<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into your React portfolio site. The `@posthog/react` `PostHogProvider` was added to `src/main.jsx` to initialize PostHog globally with exception autocapture enabled. Ten custom events were instrumented across five files, covering every meaningful user interaction: contact intent, content engagement, social discovery, and error monitoring. Environment variables `VITE_PUBLIC_POSTHOG_KEY` and `VITE_PUBLIC_POSTHOG_HOST` are used throughout — no keys are hardcoded. The `posthog-node` package was also installed as a dependency for future server-side usage.

| Event | Description | File |
|---|---|---|
| `contact_form_submitted` | User successfully submitted the contact form (captures sender name, email, message length) | `src/sections/Contact.jsx` |
| `contact_form_error` | An error occurred during form submission — also calls `captureException` for error tracking | `src/sections/Contact.jsx` |
| `calendly_clicked` | User clicked the Calendly button to schedule a meeting | `src/sections/Contact.jsx` |
| `cta_contact_clicked` | User clicked the main "Contactez-moi" CTA button in the Hero section | `src/sections/Hero.jsx` |
| `cv_downloaded` | User clicked the "Télécharger mon CV" button to download the PDF resume | `src/sections/Hero.jsx` |
| `social_link_clicked` | User clicked a social profile link in the Hero section (captures platform + href) | `src/sections/Hero.jsx` |
| `project_link_clicked` | User clicked a project link in the Projects section (captures project title + link type) | `src/sections/Projects.jsx` |
| `footer_social_link_clicked` | User clicked a social profile link in the Footer (captures platform + href) | `src/layout/Footer.jsx` |
| `privacy_policy_opened` | User opened the privacy policy popup from the footer | `src/layout/Footer.jsx` |
| `legal_notice_opened` | User opened the legal notice popup from the footer | `src/layout/Footer.jsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- 📊 **Dashboard — Analytics basics**: https://eu.posthog.com/project/134365/dashboard/547948
- 🔽 **Contact Conversion Funnel** (CTA click → form submitted): https://eu.posthog.com/project/134365/insights/AtCqPET2
- 📬 **Contact Outreach Activity** (form submissions, errors, Calendly): https://eu.posthog.com/project/134365/insights/b3cLuwmj
- 🖱️ **Portfolio Content Engagement** (CV downloads, project clicks, social clicks): https://eu.posthog.com/project/134365/insights/R03YYIyl
- 📄 **CV Downloads Over Time** (weekly bar chart — key lead signal): https://eu.posthog.com/project/134365/insights/Nv69vt2a
- 📈 **Visitor Engagement Breadth** (weekly stacked bars across all key actions): https://eu.posthog.com/project/134365/insights/toDFSfIn

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
