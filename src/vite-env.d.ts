/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_POWER_AUTOMATE_URL: string
    readonly VITE_HUBSPOT_PORTAL_ID: string
    readonly VITE_HUBSPOT_CONTACT_FORM_ID: string
    readonly VITE_HUBSPOT_JOB_FORM_ID: string
    readonly VITE_HUBSPOT_INTERNSHIP_FORM_ID: string
    readonly VITE_HUBSPOT_DEMO_FORM_ID: string
    readonly VITE_HUBSPOT_QUOTE_FORM_ID: string
    readonly VITE_HUBSPOT_CONSULTATION_FORM_ID: string
    readonly VITE_HUBSPOT_NEWSLETTER_FORM_ID: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
