import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Mifener's Blog",
	subtitle: "欢迎分享开源知识~",
	themeColor: {
		hue: 35,
		fixed: false,
		forceDarkMode: false,
	},
	banner: {
		enable: true,
		src: "/sc-banner.webp",
		position: "center",
		credit: {
			enable: true,
			text: "Blog @mifener",
			url: "https://github.com/user-attachments/assets/518face6-75a2-4d69-a0b3-7fcfcbd454ff",
		},
	},
	toc: {
		enable: true,
		depth: 2,
	},
	favicon: [
		{
			src: '/favicon/icon.webp',
		}
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.Series,
		LinkPreset.About,
		LinkPreset.Friends,
		{
			name: "GitHub@mifener",
			url: "https://github.com/mifen8/bloger",
			external: true,
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "/avatar.webp",
	name: "Mifener",
	bio: "Do what you promised",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/mifen8/bloger",
		},
		{
			name: "Telegram",
			icon: "fa6-brands:telegram",
			url: "https://t.me/yCENzh",
		}
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};

// Make sure there are NO extra /* or tabs or spaces after this