/* CONFIGURATION STARTS HERE */
import { fetchAndApply } from './components/js/fetchAndApply';
import {
  onDark,
  onLight,
  toggle,
  addDarkModeButton,
} from './components/js/toggleDarkMode';

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

const TOGGLE_DARK_MODE_SCRIPT = `
  ${onDark}
  ${onLight}
  ${toggle}
  ${addDarkModeButton}
`;

/**CSS */
import toggle_dark_mode from './components/css/toggle_dark_mode.css';
import custom_css from './components/css/custom.css';

const TOGGLE_DARK_MODE_CSS = `${toggle_dark_mode}`;
const CUSTOM_CSS = `${custom_css}`;

/* CONFIGURATION ENDS HERE */

const PAGE_TO_SLUG = {};
const slugs = [];
const pages = [];
Object.keys(SLUG_TO_PAGE).forEach((slug) => {
  const page = SLUG_TO_PAGE[slug];
  slugs.push(slug);
  pages.push(page);
  PAGE_TO_SLUG[page] = slug;
});

addEventListener('fetch', (event) =>
  event.respondWith(fetchAndApply(event.request))
);

function generateSitemap() {
  let sitemap = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  slugs.forEach(
    (slug) =>
      (sitemap += '<url><loc>https://' + MY_DOMAIN + '/' + slug + '</loc></url>')
  );
  sitemap += '</urlset>';
  return sitemap;
}

fetchAndApply(request, MY_DOMAIN, SLUG_TO_PAGE);

class MetaRewriter {
  element(element) {
    if (PAGE_TITLE !== '') {
      if (
        element.getAttribute('property') === 'og:title' ||
        element.getAttribute('name') === 'twitter:title'
      ) {
        element.setAttribute('content', PAGE_TITLE);
      }
      if (element.tagName === 'title') {
        element.setInnerContent(PAGE_TITLE);
      }
    }
    if (PAGE_DESCRIPTION !== '') {
      if (
        element.getAttribute('name') === 'description' ||
        element.getAttribute('property') === 'og:description' ||
        element.getAttribute('name') === 'twitter:description'
      ) {
        element.setAttribute('content', PAGE_DESCRIPTION);
      }
    }
    if (
      element.getAttribute('property') === 'og:url' ||
      element.getAttribute('name') === 'twitter:url'
    ) {
      element.setAttribute('content', MY_DOMAIN);
    }
    if (element.getAttribute('name') === 'apple-itunes-app') element.remove();
  }
}

class HeadRewriter {
  element(element) {
    if (GOOGLE_FONT !== '') {
      element.append(
        `<link href="https://fonts.googleapis.com/css?family=${GOOGLE_FONT.replace(
          ' ',
          '+'
        )}:Regular,Bold,Italic&display=swap" rel="stylesheet">
        <style>* { font-family: "${GOOGLE_FONT}" !important; }</style>`,
        {
          html: true,
        }
      );
    }
    element.append(
      `
        <style>
            ${TOGGLE_DARK_MODE_CSS}
            ${CUSTOM_CSS}
        </style>
    `,
      {
        html: true,
      }
    );
  }
}

class BodyRewriter {
  constructor(SLUG_TO_PAGE) {
    this.SLUG_TO_PAGE = SLUG_TO_PAGE;
  }
  element(element) {
    element.append(
      `
    <script>
        window.CONFIG.domainBaseUrl = 'https://${MY_DOMAIN}';
        const SLUG_TO_PAGE = ${JSON.stringify(this.SLUG_TO_PAGE)};
        const PAGE_TO_SLUG = {};
        const slugs = [];
        const pages = [];
        const el = document.createElement('div');
        let redirected = false;
    
    Object.keys(SLUG_TO_PAGE).forEach(slug => {
        const page = SLUG_TO_PAGE[slug];
        slugs.push(slug);
        pages.push(page);
        PAGE_TO_SLUG[page] = slug;
    });
    function getPage() {
        return location.pathname.slice(-32);
    }
    function getSlug() {
        return location.pathname.slice(1);
    }
    function updateSlug() {
        const slug = PAGE_TO_SLUG[getPage()];
        if (slug != null) {
            history.replaceState(history.state, '', '/' + slug);
        }
    }
    ${TOGGLE_DARK_MODE_SCRIPT}
    const observer = new MutationObserver(function() {
      if (redirected) return;
        const nav = document.querySelector('.notion-topbar');
        const mobileNav = document.querySelector('.notion-topbar-mobile');
        if (nav && nav.firstChild && nav.firstChild.firstChild
          || mobileNav && mobileNav.firstChild) {
            redirected = true;
            updateSlug();
            addDarkModeButton(nav ? 'web' : 'mobile');
            const onpopstate = window.onpopstate;
            window.onpopstate = function() {
                if (slugs.includes(getSlug())) {
                    const page = SLUG_TO_PAGE[getSlug()];
                    if (page) {
                        history.replaceState(history.state, 'bypass', '/' + page);
                    }
                }
            onpopstate.apply(this, [].slice.call(arguments));
            updateSlug();
        };
    }
    });
    observer.observe(document.querySelector('#notion-app'), {
        childList: true,
        subtree: true,
    });
    const replaceState = window.history.replaceState;
    window.history.replaceState = function(state) {
        if (arguments[1] !== 'bypass' && slugs.includes(getSlug())) return;
        return replaceState.apply(window.history, arguments);
    };
    const pushState = window.history.pushState;
    window.history.pushState = function(state) {
        const dest = new URL(location.protocol + location.host + arguments[2]);
        const id = dest.pathname.slice(-32);
        if (pages.includes(id)) {
            arguments[2] = '/' + PAGE_TO_SLUG[id];
        }
        return pushState.apply(window.history, arguments);
    };
    const open = window.XMLHttpRequest.prototype.open;
    window.XMLHttpRequest.prototype.open = function() {
        arguments[1] = arguments[1].replace('${MY_DOMAIN}', 'www.notion.so');
        return open.apply(this, [].slice.call(arguments));
    };
    </script>
    <script>${CUSTOM_SCRIPT}</script>
    `,
      {
        html: true,
      }
    );
  }
}

async function appendJavascript(res, SLUG_TO_PAGE) {
  return new HTMLRewriter()
    .on('title', new MetaRewriter())
    .on('meta', new MetaRewriter())
    .on('head', new HeadRewriter())
    .on('body', new BodyRewriter(SLUG_TO_PAGE))
    .transform(res);
}
