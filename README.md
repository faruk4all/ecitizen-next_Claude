# eCitizen Digital V6 (glass + 3D)

Static multi-page site: no build step. Preview with `python server.py`, deploy on Vercel (`vercel.json` included).

## Before launch
1. **config.js**: add the verified GA4, GTM, Meta Pixel, TikTok Pixel, Search Console and `leadEndpoint` values. Empty values load nothing and the consent banner stays hidden. The form posts JSON to `leadEndpoint`; if it is empty or fails, the form opens WhatsApp with the visitor's details. Google Apps Script endpoints need CORS handling for JSON posts.
2. **Legal pages** (privacy, terms, lead-data, cookie) are plain-language drafts based on how this site works. Have them reviewed before launch. Confirm retention, governing law and the names of your hosting and lead service.
3. **Email domain**: the site uses hi@ecitizen.digital but the site URL is ecitizendigital.com. Pick one.
4. Article titles are 80-106 characters and will be cut off in Google results. Consider shorter SEO titles.

## Structure
`styles.css` = V5 component styles + V6 glass/3D theme. `app.js` = interactions, consent-gated tracking, lead form. Visitors who choose "Cookie settings" in the footer can change their consent any time. `next-app/` from V5 was dropped (it had drifted from the root files).
