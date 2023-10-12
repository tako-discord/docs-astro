import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://tako-docs-astro.netlify.app/',
	integrations: [
		starlight({
			favicon: 'favicon.png',
			title: 'Tako User Docs',
			logo: {
				light: './src/assets/wordmark_light.svg',
				dark: './src/assets/wordmark_dark.svg',
				replacesTitle: true,
			},
			social: {
				github: 'https://github.com/tako-discord/docs-astro',
				discord: 'https://discord.gg/wDm8Qe6mud',
			},
			sidebar: [
				{
					label: 'Guides',
					translations: {
						de: 'Anleitungen',
					},
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting Started', link: '/guides/getting-started/' },
					],
				},
				{
					label: 'Info',
					autogenerate: { directory: 'info' },
				},
				{
					label: 'Reference',
					translations: {
						de: 'Referenz',
					},
					autogenerate: { directory: 'reference' },
				},
			],
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				de: {
					label: 'Deutsch',
					lang: 'de',
				},
			},
			customCss: ['./src/tailwind.css', './src/fonts/lato.css', './src/fonts/general-sans.css'],
			components: {
				SiteTitle: './src/components/SiteTitle.astro',
				Head: './src/components/Head.astro',
				Header: './src/components/Header.astro',
			},
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
