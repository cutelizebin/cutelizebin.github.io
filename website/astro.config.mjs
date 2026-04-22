// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://cutelizebin.github.io',
  integrations: [
    starlight({
      title: 'cutelizebin',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/cutelizebin/cutelizebin.github.io' },
      ],
      sidebar: [
        {
          label: 'Papers',
          autogenerate: { directory: 'papers' },
        },
        {
          label: 'Tools',
          autogenerate: { directory: 'tools' },
        },
        {
          label: 'Notes',
          autogenerate: { directory: 'notes' },
        },
      ],
    }),
  ],
});