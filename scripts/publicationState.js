const VALID_STATUSES = new Set(['draft', 'scheduled', 'published', 'archived']);

const normalizeDay = value => {
    const dateOnly = typeof value === 'string'
        ? value.match(/^(\d{4})-(\d{2})-(\d{2})(?:$|T)/)
        : null;
    const date = dateOnly
        ? new Date(Number(dateOnly[1]), Number(dateOnly[2]) - 1, Number(dateOnly[3]))
        : new Date(value);
    if (Number.isNaN(date.getTime())) return null;
    date.setHours(0, 0, 0, 0);
    return date;
};

function resolvePublicationStatus(content, now = new Date()) {
    const explicitStatus = String(
        content?.publicationStatus || content?.status || content?.state || ''
    ).trim().toLowerCase();
    const status = VALID_STATUSES.has(explicitStatus) ? explicitStatus : '';
    const publishDate = normalizeDay(content?.publishDate || content?.releaseDate);
    const today = normalizeDay(now);
    const dateHasArrived = Boolean(publishDate && today && publishDate <= today);

    // Explicit terminal states always win over dates. In particular, a draft
    // must never become public merely because an old date was assigned to it.
    if (status === 'published' || status === 'archived' || status === 'draft') {
        return status;
    }

    // Scheduled content becomes effectively published on its publication day,
    // preventing a stale scheduled/Coming Soon state after the date passes.
    if (status === 'scheduled') return dateHasArrived ? 'published' : 'scheduled';

    // Legacy records without status retain date-based compatibility.
    if (publishDate) return dateHasArrived ? 'published' : 'scheduled';
    return 'draft';
}

const isPubliclyAvailable = status => status === 'published' || status === 'archived';

module.exports = {resolvePublicationStatus, isPubliclyAvailable};
