// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = '聊斋笔谈';
export const SITE_DESCRIPTION = '胡思乱想并不有趣，有趣是有道理而且还新奇';

export type NavItems = {
	[key: string]: NavItem;
};

export type NavItem = {
	path: string;
	title: string;
};

export const NAV_ITEMS: NavItems = {
	home: {
		path: "/",
		title: "home",
	},
	blog: {
		path: "/blog",
		title: "blog",
	},
	tags: {
		path: "/tags",
		title: "tags",
	},
	about: {
		path: "/about",
		title: "about",
	},
};

export const SITE = {
	name: "廖一军",
	title: "聊斋笔谈",
	description: "佛系划水，乘风摸鱼",
	url: "https://astro-ink.vercel.app",
	githubUrl: "https://github.com/jimmyliow",
	listDrafts: true,
	image:
		"https://raw.githubusercontent.com/one-aalam/astro-ink/main/public/astro-banner.png",
	// Optional, user/author settings (example)
	// Author: name
	author: "", // Example: Fred K. Schott
	// Author: Twitter handler
	// Author: Image external source
	authorImage: "", // Example: https://pbs.twimg.com/profile_images/1272979356529221632/sxvncugt_400x400.jpg, https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png
	// Author: Bio
	authorBio:
		"Crisp, minimal, personal blog theme for Astro. Crisp, minimal, personal blog theme for Astro. Crisp, minimal, personal blog theme for Astro",
};
