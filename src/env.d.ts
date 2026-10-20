/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GA4_MEASUREMENT_ID?: string;
  readonly PUBLIC_SITE_ENV?: 'staging' | 'production';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
