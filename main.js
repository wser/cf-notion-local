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
  '': '9130d1a3bb7646738d71dd376d41ab9e',
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
const CUSTOM_CSS = `
.notion-frame { background-image: linear-gradient(180deg, #fdfbfb 0, #ebedee 100%) !important;}

.notion-dark-theme > div > .notion-frame { 
    background-image: linear-gradient(180deg, #000 0, rgba(135, 131, 120, 0.3) 100%) !important;
}
.notion-dark-theme > div > div > div > .notion-page-content { background:rgb(47, 52, 55);}    

@keyframes gradient { 
    0% { background-position: 0 50% !important;}
    50% {background-position: 100% 50%;}
    100% { background-position: 0 50%; }
}    
.notion-page-content {
    padding-bottom: 2.5rem !important;
    padding-top: 2.5rem !important;
    background: #fff;
    border-radius: 1rem;
    margin: -2.75rem 0 10vh 0;
}

.notion-page-block { position: relative;}
.notion-scroller > [style='width: 100%; font-size: 14px;'] { margin-bottom: 1.5rem;}
.notion-image-block { pointer-events: none !important;}
.notion-image-block img { pointer-events: none !important;}
.notion-callout-block > div > div { border-radius: 0.5rem !important;}
.notion-peek-renderer { background: #142025 !important; transition: 0.3s;}
.notion-peek-renderer > div:nth-child(2) { border-radius: 0.5rem !important; overflow: hidden;}
.notion-gallery-view > div > div > a { border-radius: 0.5rem !important;}
.notion-gallery-view > div > div > a:hover { opacity: 0.75;}
.notion-scroller > div:nth-child(2) > div { opacity: 0 !important; pointer-events: none !important;}
div.notion-topbar-mobile > div:nth-child(5) { display: none !important;}

.notion-body {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 10s ease infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
`;

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
