/* CONFIGURATION STARTS HERE */

/* Step 1: enter your domain name like fruitionsite.com */
//const MY_DOMAIN = 'vikt0r.com';
const MY_DOMAIN = 'https://notion.wser-web.workers.dev';

/*
 * Step 2: enter your URL slug to page ID mapping
 * The key on the left is the slug (without the slash)
 * The value on the right is the Notion page ID
 */
const SLUG_TO_PAGE = {
  '': 'b7d688b35fcc4932be51534b7e66c4da',
  // "about": "<NOTION PAGE ID>",   // page with about info
  // "blog": "<NOTION PAGE ID>",    // your blog page
  // "contact": "<NOTION PAGE ID>", // feedback form
};

/* Step 3: enter your page title and description for SEO purposes */
const PAGE_TITLE = 'notion.wser-web.workers.dev';
const PAGE_DESCRIPTION = 'my page from notion';

/* Step 4: enter a Google Font name, you can choose from https://fonts.google.com */
const GOOGLE_FONT = 'Varela Round';

/* Step 5: enter any custom scripts you'd like */
/**SCRIPTS */
const CUSTOM_SCRIPT = `
`;

// CSS
import { CUSTOM_CSS } from './components/css/custom';

/* CONFIGURATION ENDS HERE */

import mainScript from './components/js/';

mainScript(
  MY_DOMAIN,
  SLUG_TO_PAGE,
  PAGE_TITLE,
  PAGE_DESCRIPTION,
  GOOGLE_FONT,
  CUSTOM_SCRIPT,
  CUSTOM_CSS
);
