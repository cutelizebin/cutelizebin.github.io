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
        { icon: 'github', label: 'GitHub', href: 'https://github.com/cutelizebin' },
      ],
      sidebar: [
        {
          label: 'Notes',
          autogenerate: { directory: 'notes' },
        },
      ],
    }),
  ],
});