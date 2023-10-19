import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

import webmanifest from "astro-webmanifest";

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
		replacesTitle: true
		},
		social: {
		github: 'https://github.com/tako-discord/docs-astro',
		discord: 'https://discord.gg/wDm8Qe6mud'
		},
		sidebar: [{
		label: 'Guides',
		translations: {
			de: 'Anleitungen'
		},
		items: [
		// Each item here is one entry in the navigation menu.
		{
			label: 'Getting Started',
			link: '/guides/getting-started/'
		}]
		}, {
		label: 'Info',
		autogenerate: {
			directory: 'info'
		}
		}, {
		label: 'Reference',
		translations: {
			de: 'Referenz'
		},
		autogenerate: {
			directory: 'reference'
		},
		collapsed: true
		}],
		defaultLocale: 'root',
		locales: {
		root: {
			label: 'English',
			lang: 'en'
		},
		de: {
			label: 'Deutsch',
			lang: 'de'
		}
		},
		customCss: ['./src/tailwind.css', './src/fonts/lato.css', './src/fonts/general-sans.css'],
		components: {
		SiteTitle: './src/components/SiteTitle.astro'
		}
  }),
  tailwind({ applyBaseStyles: false }),
  webmanifest({
	name: "Tako User Docs",
	icon: "./public/favicon.png",
	short_name: "Tako Docs",
	description: "Documentation for the Tako Discord bot - Everything you need, neatly packaged in a Tako.",
	start_url: "/",
	theme_color: "#299BA3",
	background_color: "#14171b",
	display: "standalone",
	config: {
		createFavicon: false,
	}
  })]
});