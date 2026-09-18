// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Netlify exposes the deploy origin as URL (and DEPLOY_PRIME_URL on previews);
// the fallback keeps local builds and other hosts working.
const site = process.env.URL ?? process.env.DEPLOY_PRIME_URL ?? 'https://lhde.netlify.app';

// https://astro.build/config
export default defineConfig({
  site,
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  integrations: [mdx(), sitemap({ i18n: { defaultLocale: 'fr', locales: { fr: 'fr-FR', en: 'en-GB' } } })],
  vite: {
    plugins: [tailwindcss()],
  },
});
