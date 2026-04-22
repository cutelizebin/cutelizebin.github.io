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
        { icon: 'x.com', label: 'X (Twitter)', href: 'https://x.com/Zebin_Li98' },
      ],
      sidebar: [
        {
          label: 'Notes',
          link: '/notes/',
        },
        {
          label: 'All Notes',
          autogenerate: { directory: 'notes' },
        },
      ],
    }),
  ],
});