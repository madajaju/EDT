# Codex Task: Fix embracingdigital.org Navigation, SEO, AEO, and Publishing Issues

You are working in the repository that generates and publishes **embracingdigital.org**.

The site architecture and content strategy are fundamentally sound. Do **not** redesign the site, rename major sections, rewrite large amounts of editorial content, or change the overall information architecture unless required to fix a defect.

The goal of this task is to fix several specific technical SEO, AEO, navigation, publishing, and consistency problems identified during a live audit of the website.

Work systematically through the repository, identify the source templates/components/build scripts responsible for each issue, fix them at the source, regenerate the site, and validate that the problems do not recur.

---

# 1. Fix All Common Header Navigation URLs

## Problem

The shared site header currently generates relative URLs such as:

```html
href="en/shows/index.html"
```

When rendered from a page such as:

```text
/en/home/
```

the browser resolves this incorrectly as:

```text
/en/home/en/shows/index.html
```

This causes 404 errors.

The problem appears to affect common navigation links including:

* Home
* Guidance
* Learn
* Community
* About
* Search

It may occur from pages in multiple directory depths.

## Required Fix

Find the common header/navigation template or shared component and make all site-global navigation links root-relative.

Use URLs such as:

```html
/en/home/
/en/shows/
/en/digital-transformation/
/en/community.html
/en/about.html
/en/search.html
```

If the build system intentionally uses `index.html`, that is acceptable, but prefer clean directory URLs where they are already supported.

Do not hardcode navigation independently into every generated page.

There should be **one canonical definition of the navigation** if the current architecture allows it.

## Validation

After rebuilding, verify the navigation from pages at several directory depths, including examples such as:

```text
/en/home/
/en/briefs/
/en/episodes/edt-378/
/en/digital-transformation/
/en/digital-transformation/odxa/
/en/digital-transformation/articles/<article>/
```

Every common header link must resolve correctly.

Add an automated link-validation test if one does not already exist.

The test should catch:

* internal 404s
* accidentally nested `/en/.../en/...` paths
* malformed relative common-navigation URLs

---

# 2. Eliminate "Loading..." as the Primary Homepage Content

## Problem

The homepage currently exposes placeholders like:

```text
Mon
Loading...

Tues
Loading...

Wed
Loading...

Thu
Loading...

Fri
Loading...
```

The week's actual content appears to be loaded with JavaScript.

This weakens:

* search indexing
* AEO
* AI crawler visibility
* social and metadata extraction
* accessibility
* resilience when JavaScript fails

## Required Fix

The current week's content should be included directly in the generated HTML during the site build.

The HTML delivered to the browser should already include:

* day
* article/episode title
* short description
* canonical link
* content type where appropriate

Example structure:

```html
<article>
    <p>Monday</p>
    <h3>
        <a href="/en/.../">Actual Article Title</a>
    </h3>
    <p>Actual description of the content.</p>
</article>
```

JavaScript may still enhance or refresh the presentation after page load, but the essential content must already exist in the static HTML.

Do not remove useful client-side functionality.

The requirement is progressive enhancement:

> HTML first, JavaScript enhancement second.

## Validation

Inspect the generated homepage HTML without executing JavaScript.

Confirm that it contains the five current weekday content items rather than `Loading...`.

If no content exists for a particular day, render an intentional empty-state message rather than a generic loading state.

---

# 3. Prevent Published Content from Displaying "Coming Soon"

## Problem

Previously published episodes were displaying a stale:

```text
Coming Soon
Come back on YYYY-MM-DD
```

message even though the episode content was already published.

This appears mostly fixed on the live site, but the publishing pipeline needs protection against regression.

## Required Fix

Find the logic responsible for deciding whether a page is:

* draft
* scheduled
* coming soon
* published
* archived

Prefer an explicit publication state from asset/front-matter metadata.

Example:

```json
{
  "status": "published",
  "publishDate": "2026-08-20"
}
```

or equivalent existing metadata.

The page generator should follow rules similar to:

```text
IF status == published:
    render published content
    never render Coming Soon

IF status == scheduled AND publish date is in the future:
    render Coming Soon if desired

IF publish date has passed:
    do not leave the page in a contradictory scheduled state
```

Do not rely only on browser-side date comparison.

This should happen during site generation.

## Validation

Add tests using:

* future scheduled content
* today's content
* past published content
* explicitly published content
* draft content

Ensure no published page contains `Coming Soon`.

---

# 4. Add Build-Time Detection for Source Markup Leakage

## Problem

Source-format metadata such as AsciiDoc directives has previously leaked into public pages.

Examples include:

```text
:doctype:
:icons:
:sectnums:
:imagesdir:
ifdef::
endif::
include::
```

There may be other source directives.

## Required Fix

Determine why these directives were exposed and fix the source parsing/rendering issue wherever possible.

Additionally, add a generated-site validation step that searches **visible generated content** for likely source-language leakage.

At minimum detect patterns including:

```text
:doctype:
:icons:
:sectnums:
:imagesdir:
ifdef::
endif::
include::
```

Also look for incorrectly exposed heading markup such as:

```text
=== The Core Concept
```

when it should have rendered as HTML.

Do not blindly fail on legitimate code examples. Restrict validation to rendered article/body content where practical, or maintain an intentional allowlist.

The build should fail or issue a prominent error when accidental markup leakage is detected.

---

# 5. Add or Validate Structured Data / JSON-LD

Implement consistent schema.org structured data using JSON-LD.

Do not add schema simply for keyword stuffing.

Use accurate relationships based on the site's actual content.

## Global Pages

Where appropriate include:

```text
WebSite
Organization
Person
BreadcrumbList
```

Identify the canonical publisher/organization from existing site metadata rather than inventing one.

## Podcast / Episode Pages

Use appropriate schema such as:

```text
PodcastEpisode
PodcastSeries
AudioObject
VideoObject
Person
Organization
```

Include where available:

* episode title
* description
* episode number
* publish date
* date modified
* author/host
* podcast series
* audio URL
* video URL
* canonical page URL
* thumbnail/image

Do not fabricate missing values.

## Articles / Briefs

Use:

```text
Article
```

or, where semantically appropriate:

```text
NewsArticle
```

Include:

* headline
* description
* author
* datePublished
* dateModified
* publisher
* image
* canonical URL

## Framework / Architecture Content

For pages about:

* GEAR
* O-DXA / ODXA
* FORGE
* Transformation Dimensions
* Digital Transformation Pillars

use an appropriate type such as:

```text
TechArticle
```

when appropriate.

Connect related concepts through structured metadata where schema.org supports it without abusing schema.

## Whitepapers

Use an appropriate type such as:

```text
TechArticle
```

or:

```text
ScholarlyArticle
```

only when the content genuinely qualifies.

## Validation

Generated JSON-LD must:

* be valid JSON
* contain valid canonical URLs
* not contain null/undefined placeholder data
* not contradict visible content
* not describe unpublished content as published

Add automated JSON parsing validation during builds.

---

# 6. Improve Canonical URLs

Audit canonical tags across the generated site.

Every indexable page should contain one canonical URL.

Avoid canonical fragmentation caused by variants such as:

```text
/page
/page/
/page/index.html
/page/?utm_source=...
```

Choose one canonical representation.

Where the site already uses clean directory URLs, prefer them.

Example:

```html
<link rel="canonical"
      href="https://embracingdigital.org/en/digital-transformation/odxa/">
```

Do not include tracking parameters in canonical URLs.

---

# 7. Audit sitemap.xml and robots.txt

Validate the generated sitemap.

The sitemap should include canonical indexable pages and exclude:

* broken URLs
* temporary build pages
* duplicate path variants
* redirects
* query-string versions
* draft pages
* scheduled unpublished pages where inappropriate

Validate `robots.txt`.

Ensure important content is crawlable.

Do not accidentally block:

```text
/en/digital-transformation/
/en/shows/
/en/episodes/
/en/briefs/
```

or other public content areas.

---

# 8. Set Internal Search Page to noindex,follow

The internal search page is largely a client-side search interface and currently may expose zero-result placeholders to crawlers.

For the site's internal search page, add:

```html
<meta name="robots" content="noindex,follow">
```

Do not prevent users from accessing the page.

Do not globally noindex search-related content directories.

This applies specifically to the internal search UI page.

---

# 9. Fix Community Page Subscriber Copy

Find the Community page content where the same claim is repeated for multiple platforms:

```text
Join the conversation with over 200,000 subscribers and industry pioneers.
```

The same language should not automatically be used for LinkedIn and Patreon unless that figure specifically applies to each platform.

Rewrite the sections so they accurately describe each community.

Suggested direction:

LinkedIn:

```text
Join our broader community of digital leaders, architects, practitioners, and educators.
```

Patreon/member community:

```text
Join our member community for early access, Q&A, technical briefs, and deeper architectural discussions.
```

Preserve the site's tone.

Do not invent subscriber counts.

---

# 10. Review the "ODXA Is the Industry Standard" Claim

Search for statements such as:

```text
ODXA is the industry standard
```

or similar absolute standardization claims.

Unless the repository contains authoritative support demonstrating formal industry-standard status, replace overly absolute language with something accurate.

Preferred language could include:

```text
O-DXA is an open architectural framework for aligning capabilities, technology, and mission outcomes across five transformation domains.
```

or, where supported:

```text
O-DXA is an emerging open industry architecture...
```

Do not weaken legitimate references to actual standards-body activities if the source material substantiates them.

The objective is factual precision, not removal of O-DXA positioning.

---

# 11. Preserve and Strengthen the Existing GEAR / O-DXA / FORGE Architecture

Do not replace the current conceptual organization.

Preserve the existing relationship:

```text
GEAR
    |
    +-- Structural Domains
    |      -> O-DXA
    |
    +-- Applied Practice
    |      -> FORGE
    |
    +-- Transformation Dimensions
    |      -> People
    |      -> Process
    |      -> Policy
    |      -> Technology
    |
    +-- Execution Pillars
           -> AI
           -> Data
           -> Cybersecurity
           -> Ubiquitous Computing
           -> Edge
           -> Advanced Communications
```

Where appropriate, strengthen contextual internal links between these concepts.

For example:

O-DXA pages should naturally link to:

* GEAR
* FORGE
* five domains
* relevant whitepapers
* relevant DTA episodes or lectures

FORGE should link back to:

* GEAR
* O-DXA
* examples / use cases

Pillar pages should link to related:

* domains
* articles
* whitepapers
* episodes

Avoid large indiscriminate "related links" dumps.

Links should be contextually meaningful.

---

# 12. Standardize AEO-Friendly Introductions on Canonical Framework Pages

Do not rewrite the whole site.

For important evergreen concept pages, ensure the first substantive paragraph provides a direct, concise definition.

Examples include:

* GEAR
* O-DXA
* FORGE
* each O-DXA domain
* each transformation dimension
* each major execution pillar

Preferred pattern:

```text
H1

40–80 word direct definition

Why it matters

Core concepts/components

How it is used

Related framework concepts

Supporting resources
```

Example style:

```text
The Open Digital Transformation Architecture (O-DXA) is the structural
model within GEAR. It provides a domain-based way to understand and
coordinate transformation across strategic, organizational, process,
digital, and physical responsibilities.
```

Do not force question-and-answer phrasing onto every page.

The primary objective is that an answer engine can easily extract:

* what the concept is
* where it fits
* why it matters

---

# 13. Preserve the Shows Editorial Model

Do not change the existing differentiation among the three major shows.

Preserve approximately:

```text
Digital Transformation Architect
The Canon / How-To

Embracing Digital Transformation
The Evidence / Who

Embracing Digital This Week
The Synthesis / What's Next
```

This relationship is strategically useful for both readers and machine understanding.

Ensure these pages link to each other and to the relevant architecture/content hub.

---

# 14. Audit Older EDTW Titles

Do not automatically rewrite history without source information.

Identify older EDTW pages with generic titles such as:

```text
Embracing Digital This Week
2026-02-09
#152 Embracing Digital This Week
```

Generate a report of episodes that lack descriptive titles.

If the repository includes summaries/headlines from which a reliable descriptive title can be derived, propose or generate improved titles.

Preferred format:

```text
<Descriptive Topic Title> | EDTW #152
```

Do not fabricate topics from incomplete metadata.

If confidence is low, leave the title unchanged and include it in the remediation report.

---

# 15. Add an Internal Link Checker

If one does not already exist, add a script or build task that validates generated internal links.

It should:

1. crawl the generated static site
2. extract internal href values
3. normalize fragments and query strings
4. confirm the destination exists
5. report the referring page
6. fail CI/build for real broken internal links

Ignore intentionally external URLs.

Handle:

* `/path/`
* `/path/index.html`
* anchors such as `#section`
* query parameters
* root-relative paths

The output should make defects easy to fix.

Example:

```text
BROKEN LINK

Source:
dist/en/home/index.html

Link:
en/shows/index.html

Resolved:
dist/en/home/en/shows/index.html

Expected likely destination:
dist/en/shows/index.html
```

---

# 16. Add a Site Quality Build Check

Create a reusable validation step, for example:

```bash
npm run validate-site
```

or equivalent for the project's existing build system.

Do not introduce Node/npm if the project uses another established toolchain unless there is a strong technical reason.

The validation should ideally check:

* broken internal links
* duplicate canonical URLs
* missing canonical URLs
* malformed JSON-LD
* accidental source markup leakage
* published pages containing "Coming Soon"
* common navigation links
* missing page titles
* missing meta descriptions on important indexable pages
* missing H1
* duplicate H1s where inappropriate
* pages whose visible content is primarily `Loading...`

Provide actionable output.

---

# 17. Do Not Over-Optimize

Avoid:

* keyword stuffing
* adding FAQ schema everywhere
* creating thin pages solely for search engines
* repeating GEAR/ODXA keywords unnaturally
* fake author credentials
* unsupported dates
* unsupported subscriber counts
* fake schema fields
* fake reviews/ratings
* excessive cross-link blocks
* redesigning the site's visual language

SEO and AEO improvements must improve the site for humans as well.

---

# 18. Final Validation

After implementing the changes:

1. rebuild the entire website
2. run the link checker
3. run structured-data validation
4. run markup-leak validation
5. inspect the homepage without JavaScript
6. inspect common navigation from at least five different directory depths
7. inspect one page of each major type:

```text
Homepage
Shows page
Podcast episode
EDTW brief
Article
Whitepaper
GEAR
O-DXA
FORGE
Pillar
Community
About
Search
```

8. make sure there are no unexpected visual regressions

---

# 19. Produce a Final Remediation Report

When finished, give me a concise report containing:

## Fixed

List each issue actually corrected.

## Files Changed

List templates, scripts, data files, or configuration files modified.

## Automated Safeguards Added

For example:

* link checker
* schema validator
* markup leakage detector
* publication-state validation

## Remaining Issues

List anything that could not safely be fixed automatically.

## SEO/AEO Recommendations Deferred

List good ideas discovered during the work that are intentionally outside this task.

## Validation Results

Report:

```text
Internal broken links:
JSON-LD errors:
Published pages with Coming Soon:
Markup leakage:
Pages missing canonical:
Pages missing title:
Pages missing meta description:
Homepage server-rendered content:
```

Do not report an issue as fixed unless the generated output was actually validated.

---

# Priority Order

Implement in this order:

## P0

1. Fix shared header URLs.
2. Fix internal broken links caused by shared navigation.
3. Render homepage weekly content in static HTML.

## P1

4. Validate publication-state logic.
5. Prevent markup leakage.
6. Add/validate structured data.
7. Validate canonical URLs, sitemap, and robots.txt.
8. Add automated link/site validation.

## P2

9. Improve framework-page AEO introductions.
10. Correct Community copy.
11. Correct unsupported "industry standard" claims.
12. Improve contextual internal linking.
13. Audit older EDTW titles.

## P3

14. Report additional metadata/content cleanup opportunities.

The key principle for this work is:

> **Fix the publishing system and templates rather than manually patching generated pages.**

Wherever multiple pages share the same defect, find and fix the shared source responsible for generating them.
