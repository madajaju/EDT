module.exports = {
  "directories": [
    "2020",
    "2021",
    "2022",
    "2023"
  ],
  "base": "Base",
  "name": "Embracing Digital Transformation",
  "summary": "Darren Pulsipher, Chief Solution Architect for Public Sector at Intel, investigates effective change leveraging people, process, and technology.\nWhich digital trends are a flash in the pan—and which will form the foundations of lasting change? With in-depth discussion and expert interviews, Embracing Digital Transformation finds the signal in the noise of the digital revolution.",
  "channels": {
    "soundcloud": {
      "id": "soundcloud",
      "type": "SoundCloud",
      "title": "EmbracingDigitalTransformation",
      "user": "edt@pulsipher.org",
      "rss": "https://feeds.soundcloud.com/users/soundcloud:users:849124657/sounds.rss",
      "url": "https://soundcloud.com/embracingdigital",
      "submission": "https://soundcloud.com/embracingdigital",
      "name": "soundcloud",
      "authorized": false,
      "types": [
        "Post",
        "Podcast",
        "audio",
        "image"
      ]
    },
    "onedrive": {
      "id": "onedrive",
      "type": "OneDrive",
      "title": "OneDrive Pulsipher Family",
      "user": "darren@pulsipher.org",
      "name": "onedrive",
      "creds": {
        "grant_type": "client_credentials",
        "client_id": "356e2003-ee16-4028-b712-bd82c7fe544e",
        "client_secret": "cb7c27b3-77c7-4480-87d4-bca126ff29dc",
        "secret_value": "2H38Q~9PKCU2bIRM7izE-ELSa7f8bPhcThweXaaz",
        "token_end_point": "https://login.microsoftonline.com/88a6815b-8308-4e4e-ad60-47d086028098/oauth2/v2.0/token",
        "resource": "https://graph.microsoft.com"
      },
      "authorized": true,
      "types": []
    },
    "intelyoutube": {
      "id": "intelyoutube",
      "type": "IntelYoutube",
      "title": "Intel Business Channel",
      "user": "darren.w.pulsipher@intel.com",
      "rss": "https://youtube.com/feeds/videos.xml?playlist_id=PLj-81kG3zG5YC2Z4aBncmOpZGh6umLy0n",
      "url": "https://youtube.com/playlist?list=PLj-81kG3zG5YC2Z4aBncmOpZGh6umLy0n",
      "submission": "https://app.smartsheet.com/b/form/288e77bcb60a4c6da84008d508d8e469",
      "name": "intelyoutube",
      "creds": {
        "api_key": "AIzaSyCW7GuNyug5Qcq1MipqyYXI2syZgp6WXG8"
      },
      "authorized": true,
      "types": [
        "Video",
        "video"
      ]
    },
    "youtube": {
      "id": "youtube",
      "type": "YouTube",
      "title": "Embracing Digital Channel",
      "user": "edt@pulsipher.org",
      "rss": "https://youtube.com/feeds/videos.xml?channel_id=UCveOcNne1kP_ZccC8kOZcDA",
      "url": "https://www.youtube.com/channel/UCveOcNne1kP_ZccC8kOZcDA",
      "submission": "https://studio.youtube.com/channel/UCveOcNne1kP_ZccC8kOZcDA/videos/upload",
      "creds": {
        "api_key": "AIzaSyCW7GuNyug5Qcq1MipqyYXI2syZgp6WXG8",
        "client_id": "887621111838-osuqa12f23jclncleo8hv2c4q3j008ec.apps.googleusercontent.com",
        "project_id": "guth-370314",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_secret": "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",
        "redirect_uris": [
          "http://localhost/web/channel/authroize?id=youtube"
        ],
        "tokens": {
          "access_token": "ya29.a0AfB_byABIp1bee3T4fz6r8YzxAf3I2moJS2sb8AVkkInpmBYugz4Wp5KbyvrXmf_lnuvsk3mB2QdNPl-DlmdSPbOzxKeXJWnvEL-4CL5TQmj44GhQxRI9JZwd8WZ5EzVIJzKRrDpPJNITmN8Byq19DE4vM94N9LufXNC_AaCgYKAe4SARASFQHsvYlsRP6_dAQM5KhiFpqXkP5LGA0173",
          "refresh_token": "1//06Hh_gDyzjPDNCgYIARAAGAYSNwF-L9IrTLK1pwhT6e38uwD3LnbioYX3z4yh4APpcQ5E_UHrWo8Y1cshPhvfL6wGg8-fNUu3S4o",
          "scope": "https://www.googleapis.com/auth/youtube.upload https://www.googleapis.com/auth/youtube.readonly",
          "token_type": "Bearer",
          "expiry_date": 1694036434878
        }
      },
      "name": "youtube",
      "authorized": true,
      "types": [
        "video",
        "Post",
        "Video"
      ]
    },
    "instagram": {
      "id": "instagram",
      "type": "Instagram",
      "title": "EmbracingDigitalTransformation",
      "user": "darren@pulsipher.org",
      "url": "https://instagram.com/",
      "submission": "https://instagram.com/",
      "name": "instagram",
      "types": [
        "video",
        "image"
      ]
    },
    "blog": {
      "id": "blog",
      "type": "GitHubPages",
      "title": "Public Sector Website",
      "user": "darren.w.pulsipher@intel.com",
      "url": "https://www.embracingdigital.org/",
      "name": "blog",
      "authorized": true,
      "types": [
        "Blog",
        "doc",
        "pdf"
      ]
    },
    "intelblog": {
      "id": "intelblog",
      "type": "IntelBlog",
      "title": "Public Sector Website",
      "user": "darren.w.pulsipher@intel.com",
      "url": "https://www.intel.com/content/www/us/en/government/embracing-digital-transformation-overview.html",
      "name": "intelblog",
      "authorized": true,
      "types": [
        "doc",
        "pdf",
        "Blog"
      ]
    },
    "linkedingroup": {
      "id": "linkedingroup",
      "type": "LinkedInGroup",
      "title": "Embracing Digital Transformation",
      "user": "darren@pulsipher.org",
      "url": "https://www.linkedin.com/company/embracing-digital-transformation",
      "submission": "https://www.linkedin.com/company/embracing-digital-transformation",
      "name": "linkedingroup",
      "types": [
        "video",
        "image",
        "doc",
        "pdf"
      ]
    },
    "facebookpage": {
      "id": "facebookpage",
      "type": "FacebookPage",
      "title": "Embracing Digital Transformation Page",
      "user": "darren@pulsipher.org",
      "url": "https://www.facebook.com/embracingdigital",
      "submission": "https://www.facebook.com/embracingdigital",
      "name": "facebookpage",
      "types": [
        "video",
        "image"
      ]
    },
    "linkedin": {
      "id": "linkedin",
      "type": "LinkedIn",
      "title": "LinkedIn",
      "user": "darren@pulsipher.org",
      "url": "https://www.linkedin.com/in/darrenpulsipher",
      "name": "linkedin",
      "creds": {
        "client_id": "86moxvxwbgq5ha",
        "client_secret": "QBw5vB7DFTCqZ2mi"
      },
      "authorized": false,
      "types": [
        "video",
        "image",
        "doc",
        "Post",
        "Video",
        "Blog",
        "Article",
        "Slidedeck"
      ]
    },
    "facebook": {
      "id": "facebook",
      "type": "Facebook",
      "title": "Darren Pulsipher",
      "user": "darren@pulsipher.org",
      "url": "https://www.facebook.com/darrenpulsipher",
      "name": "facebook",
      "authorized": true,
      "types": [
        "video",
        "image",
        "Post",
        "Video"
      ]
    },
    "transistor": {
      "id": "transistor",
      "type": "Transistor",
      "title": "EmbracingDigitalTransformation",
      "user": "contact@wheresthelemonade.org",
      "rss": "https://feeds.transistor.fm/embracing-digital-transformation-773aba93-f01b-4760-b6dd-b9124960d507",
      "url": "https://dashboard.transistor.fm/shows/embracing-digital-transformation-773aba93-f01b-4760-b6dd-b9124960d507",
      "submission": "https://dashboard.transistor.fm/shows/embracing-digital-transformation-773aba93-f01b-4760-b6dd-b9124960d507/episodes/new",
      "name": "transistor",
      "creds": {
        "api_key": "OD-_egSCZ9Zx0y6viJG7cQ"
      },
      "authorized": true,
      "types": [
        "Podcast",
        "audio",
        "Post",
        "Audio"
      ]
    },
    "twitter": {
      "id": "twitter",
      "type": "Twitter",
      "title": "Embracing Digital Transformation Twitter",
      "user": "darren@pulsipher.org",
      "url": "https://twitter.com/darrenpulsipher",
      "submission": "https://twitter.com/compose/tweet",
      "creds": {
        "api_key": "L8fBRxdkptoz7CAVybBldmtpj",
        "api_key_secret": "LcOf2utsE7aPF4JmVHrfb7fNYB6SxiHyhrSDv2yeKSOoUP3QaB",
        "bearer_token": "AAAAAAAAAAAAAAAAAAAAAI6WogEAAAAAXcdg5KnLPAMWE1cIy3W5LphfcLU%3DGNevdo7UFLJA3frbRBXnLWPaxCWpPjOAhXZU0alI1aV1Orrnpi",
        "access_token": "22585127-w8Y4KkZ30EdjD8K3D0nnwoRKn7bB51M7LmsMWAHcg",
        "access_token_secret": "XStiAaaxNzsF12coLgQE37qSgEaGXssy10f5ciWcQ0QDc",
        "client_id": "MjJRU3d2SklqSE4yb0tua2JYVDM6MTpjaQ",
        "client_secret": "AJguk_LO9oUE-_ZLOx3xzeW_XTxvDRYXeSAjIB5hkkCk3qD2de",
        "handle": "darrenpulsipher"
      },
      "name": "twitter",
      "types": [
        "video",
        "image",
        "Post"
      ]
    },
    "email": {
      "id": "email",
      "type": "Email",
      "user": "edt@pulsipher.org",
      "pass": "july2711",
      "name": "email",
      "authorized": true,
      "types": [
        "doc",
        "Post",
        "Blog"
      ]
    }
  },
  "mappings": {
    "instagramPost": {
      "id": "instagramPost",
      "name": "Instagram Post",
      "templates": {
        "body": "instagram/body.ejs"
      },
      "channels": [
        "instagram",
        "facebook"
      ]
    },
    "linkedInPost": {
      "id": "linkedInPost",
      "name": "LinkedIn",
      "templates": {
        "body": "linkedIn/body.ejs"
      },
      "channels": [
        "linkedin"
      ]
    },
    "emailEpisode": {
      "id": "emailEpisode",
      "name": "Email Episode",
      "templates": {
        "body": "email/body.ejs",
        "to": "email/to.ejs",
        "subject": "email/subject.ejs"
      },
      "channels": [
        "email"
      ]
    },
    "emailAssets": {
      "id": "emailAssets",
      "name": "Email Assets",
      "templates": {
        "body": "email/fullbody.ejs",
        "to": "email/to.ejs",
        "subject": "email/subject.ejs"
      },
      "channels": [
        "email"
      ]
    },
    "twitter": {
      "id": "twitter",
      "name": "Twitter Post",
      "templates": {
        "body": "twitter/body.ejs"
      },
      "channels": [
        "twitter"
      ]
    },
    "youtubeSubmit": {
      "id": "youtubeSubmit",
      "name": "Youtube Shorts Submit",
      "templates": {
        "Title": "youtube/title.ejs",
        "Description": "youtube/description.ejs",
        "Tags": "youtube/tags.ejs"
      },
      "channels": []
    },
    "intelyoutubeSubmit": {
      "id": "intelyoutubeSubmit",
      "name": "Intel You Tube",
      "templates": {
        "Title": "intelyoutube/title.ejs",
        "Summary": "intelyoutube/summary.ejs",
        "Supporting": "intelyoutube/supporting.ejs",
        "Tags": "intelyoutube/tags.ejs"
      },
      "channels": []
    },
    "transistorSubmit": {
      "id": "transistorSubmit",
      "name": "Transistor Submit",
      "templates": {
        "Title": "transistor/title.ejs",
        "Description": "transistor/description.ejs",
        "Image": "transistor/image.ejs",
        "Tags": "transistor/tags.ejs"
      },
      "channels": []
    },
    "soundCloud": {
      "id": "soundCloud",
      "name": "SoundCloud",
      "templates": {
        "title": "soundcloud/title.ejs",
        "permalink": "soundcloud/permalink.ejs",
        "tags": "soundcloud/tags.ejs",
        "description": "soundcloud/description.ejs"
      },
      "channels": []
    }
  },
  "blueprints": {}
};