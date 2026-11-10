# Stay & Meet integration plan

## Experience
- Add a new `/dmc/stay-meet` destination under the existing DMC division, using Creek Oxley’s current typography, purple brand, navigation, and page framing.
- Present a direct, polished introduction and three clear portfolio areas: Luxury Stays, Creek Motels, and Conferences & Events, with section links and enquiry actions.
- Reposition Kilulu in the new luxury portfolio by linking to its existing `/dmc/watamu` page, not creating another Kilulu listing. Link Trademark and Luxora to their current property pages.
- Add property profiles for Tribe Hotel, Creek Motels Lodwar, and Kongoni Camp, plus a maintainable portfolio data structure for future additions. Do not feature Naivasha.
- Use available property imagery where its identity is confirmed. For properties without provided images or details, omit unverified claims and clearly invite enquiries rather than publishing invented specifications.

## Enquiries and discovery
- Add accommodation and event enquiry forms with the requested contact, property, date, group-size, and requirements fields, routed through the existing Creek Oxley enquiry channel.
- Add a small Stay & Meet link under the DMC navigation, responsive mobile navigation, page-specific SEO metadata, sitemap entries, and prerender paths.

## Technical details
- Follow the existing React Router, `SEOHead`, Navbar/Footer, design tokens, and form patterns.
- Keep existing DMC and Kilulu pages intact; only link to existing profiles where they already exist.
- Verify portfolio navigation and enquiry form behavior in the preview, including mobile layout, and check the preview build logs.
