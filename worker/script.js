!function(n){var t={};function e(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)e.d(o,i,function(t){return n[t]}.bind(null,i));return o},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(n,t){const e="https://notion.wser-web.workers.dev",o={"":"b7d688b35fcc4932be51534b7e66c4da"},i={},r=[],a=[];Object.keys(o).forEach(n=>{const t=o[n];r.push(n),a.push(t),i[t]=n}),addEventListener("fetch",n=>n.respondWith(async function(n){if("OPTIONS"===n.method)return function(n){return null!==n.headers.get("Origin")&&null!==n.headers.get("Access-Control-Request-Method")&&null!==n.headers.get("Access-Control-Request-Headers")?new Response(null,{headers:s}):new Response(null,{headers:{Allow:"GET, HEAD, POST, PUT, OPTIONS"}})}(n);let t,i=new URL(n.url);if(i.hostname="www.notion.so","/robots.txt"===i.pathname)return new Response("Sitemap: https://"+e+"/sitemap.xml");if("/sitemap.xml"===i.pathname){let n=new Response(function(){let n='<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';return r.forEach(t=>n+="<url><loc>https://"+e+"/"+t+"</loc></url>"),n+="</urlset>",n}());return n.headers.set("content-type","application/xml"),n}if(i.pathname.startsWith("/app")&&i.pathname.endsWith("js")){t=await fetch(i.toString());let n=await t.text();return t=new Response(n.replace(/www.notion.so/g,e).replace(/notion.so/g,e),t),t.headers.set("Content-Type","application/x-javascript"),t}if(i.pathname.startsWith("/api"))return t=await fetch(i.toString(),{body:i.pathname.startsWith("/api/v3/getPublicPageData")?null:n.body,headers:{"content-type":"application/json;charset=UTF-8","user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36"},method:"POST"}),t=new Response(t.body,t),t.headers.set("Access-Control-Allow-Origin","*"),t;if(r.indexOf(i.pathname.slice(1))>-1){const n=o[i.pathname.slice(1)];return Response.redirect("https://"+e+"/"+n,301)}t=await fetch(i.toString(),{body:n.body,headers:n.headers,method:n.method}),t=new Response(t.body,t),t.headers.delete("Content-Security-Policy"),t.headers.delete("X-Content-Security-Policy");return async function(n,t){return(new HTMLRewriter).on("title",new d).on("meta",new d).on("head",new l).on("body",new p(t)).transform(n)}(t,o)}(n.request)));const s={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, HEAD, POST, PUT, OPTIONS","Access-Control-Allow-Headers":"Content-Type"};class d{element(n){"og:title"!==n.getAttribute("property")&&"twitter:title"!==n.getAttribute("name")||n.setAttribute("content","vikt0r.com"),"title"===n.tagName&&n.setInnerContent("vikt0r.com"),"description"!==n.getAttribute("name")&&"og:description"!==n.getAttribute("property")&&"twitter:description"!==n.getAttribute("name")||n.setAttribute("content","my page from notion"),"og:url"!==n.getAttribute("property")&&"twitter:url"!==n.getAttribute("name")||n.setAttribute("content",e),"apple-itunes-app"===n.getAttribute("name")&&n.remove()}}class l{element(n){n.append(`<link href="https://fonts.googleapis.com/css?family=${"Varela Round".replace(" ","+")}:Regular,Bold,Italic&display=swap" rel="stylesheet">\n        <style>* { font-family: "Varela Round" !important; }</style>`,{html:!0}),n.append("\n        <style>\n            \n    div.notion-topbar > div > div:nth-child(3) { display: none !important; }\n    div.notion-topbar > div > div:nth-child(4) { display: none !important; }\n    div.notion-topbar > div > div:nth-child(5) { display: none !important; }    \n    div.notion-topbar > div > div:nth-child(6) { display: none !important; }\n    div.notion-topbar-mobile > div:nth-child(3) { display: none !important; }\n    div.notion-topbar-mobile > div:nth-child(4) { display: none !important; }\n    div.notion-topbar > div > div:nth-child(1n).toggle-mode { display: block !important; }\n    div.notion-topbar-mobile > div:nth-child(1n).toggle-mode { display: block !important; }\n\n            \n    .notion-frame { background-image: linear-gradient(180deg, #fdfbfb 0, #ebedee 100%) !important;}\n\n    .notion-dark-theme > div > .notion-frame { \n        background-image: linear-gradient(180deg, #000 0, rgba(135, 131, 120, 0.3) 100%) !important;\n    }\n    .notion-dark-theme > div > div > div > .notion-page-content { background:rgb(47, 52, 55);}    \n    \n    @keyframes gradient { \n        0% { background-position: 0 50% !important;}\n        50% {background-position: 100% 50%;}\n        100% { background-position: 0 50%; }\n    }    \n    .notion-page-content {\n        padding-bottom: 2.5rem !important;\n        padding-top: 2.5rem !important;\n        background: #fff;\n        border-radius: 1rem;\n        margin: -2.75rem 0 10vh 0;\n    }\n \n    .notion-page-block { position: relative;}\n    .notion-scroller > [style='width: 100%; font-size: 14px;'] { margin-bottom: 1.5rem;}\n    .notion-image-block { pointer-events: none !important;}\n    .notion-image-block img { pointer-events: none !important;}\n    .notion-callout-block > div > div { border-radius: 0.5rem !important;}\n    .notion-peek-renderer { background: #142025 !important; transition: 0.3s;}\n    .notion-peek-renderer > div:nth-child(2) { border-radius: 0.5rem !important; overflow: hidden;}\n    .notion-gallery-view > div > div > a { border-radius: 0.5rem !important;}\n    .notion-gallery-view > div > div > a:hover { opacity: 0.75;}\n    .notion-scroller > div:nth-child(2) > div { opacity: 0 !important; pointer-events: none !important;}\n    div.notion-topbar-mobile > div:nth-child(5) { display: none !important;}\n\n    .notion-body {\n        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);\n        background-size: 400% 400%;\n        animation: gradient 10s ease infinite;\n    }\n\n    @keyframes gradient {\n        0% {\n            background-position: 0% 50%;\n        }\n        50% {\n            background-position: 100% 50%;\n        }\n        100% {\n            background-position: 0% 50%;\n        }\n    }\n\n        </style>\n    ",{html:!0})}}class p{constructor(n){this.SLUG_TO_PAGE=n}element(n){n.append(`\n    <script>\n        window.CONFIG.domainBaseUrl = 'https://${e}';\n        const SLUG_TO_PAGE = ${JSON.stringify(this.SLUG_TO_PAGE)};\n        const PAGE_TO_SLUG = {};\n        const slugs = [];\n        const pages = [];\n        const el = document.createElement('div');\n        let redirected = false;\n    \n    Object.keys(SLUG_TO_PAGE).forEach(slug => {\n        const page = SLUG_TO_PAGE[slug];\n        slugs.push(slug);\n        pages.push(page);\n        PAGE_TO_SLUG[page] = slug;\n    });\n    function getPage() {\n        return location.pathname.slice(-32);\n    }\n    function getSlug() {\n        return location.pathname.slice(1);\n    }\n    function updateSlug() {\n        const slug = PAGE_TO_SLUG[getPage()];\n        if (slug != null) {\n            history.replaceState(history.state, '', '/' + slug);\n        }\n    }\n    \n    function onDark() {\n        el.innerHTML = '<div title="Change to Light Mode" style="margin-left: auto; margin-right: 14px; min-width: 0px;"><div role="button" tabindex="0" style="user-select: none; transition: background 120ms ease-in 0s; cursor: pointer; border-radius: 44px;"><div style="display: flex; flex-shrink: 0; height: 14px; width: 26px; border-radius: 44px; padding: 2px; box-sizing: content-box; background: rgb(46, 170, 220); transition: background 200ms ease 0s, box-shadow 200ms ease 0s;"><div style="width: 14px; height: 14px; border-radius: 44px; background: white; transition: transform 200ms ease-out 0s, background 200ms ease-out 0s; transform: translateX(12px) translateY(0px);"></div></div></div></div>';\n        document.body.classList.add('dark');\n        __console.environment.ThemeStore.setState({ mode: 'dark' });\n    };\n    function onLight() {\n        el.innerHTML = '<div title="Change to Dark Mode" style="margin-left: auto; margin-right: 14px; min-width: 0px;"><div role="button" tabindex="0" style="user-select: none; transition: background 120ms ease-in 0s; cursor: pointer; border-radius: 44px;"><div style="display: flex; flex-shrink: 0; height: 14px; width: 26px; border-radius: 44px; padding: 2px; box-sizing: content-box; background: rgba(135, 131, 120, 0.3); transition: background 200ms ease 0s, box-shadow 200ms ease 0s;"><div style="width: 14px; height: 14px; border-radius: 44px; background: white; transition: transform 200ms ease-out 0s, background 200ms ease-out 0s; transform: translateX(0px) translateY(0px);"></div></div></div></div>';\n        document.body.classList.remove('dark');\n        __console.environment.ThemeStore.setState({ mode: 'light' });\n    }\n    function toggle() {\n        if (document.body.classList.contains('dark')) {\n            onLight();\n        } else {\n            onDark();\n        }\n    }\n    function addDarkModeButton(device) {\n        const nav = device === 'web' ? document.querySelector('.notion-topbar').firstChild : document.querySelector('.notion-topbar-mobile');\n        el.className = 'toggle-mode';\n        el.addEventListener('click', toggle);\n        nav.appendChild(el);\n        onLight();\n    }\n\n    const observer = new MutationObserver(function() {\n      if (redirected) return;\n        const nav = document.querySelector('.notion-topbar');\n        const mobileNav = document.querySelector('.notion-topbar-mobile');\n        if (nav && nav.firstChild && nav.firstChild.firstChild\n          || mobileNav && mobileNav.firstChild) {\n            redirected = true;\n            updateSlug();\n            addDarkModeButton(nav ? 'web' : 'mobile');\n            const onpopstate = window.onpopstate;\n            window.onpopstate = function() {\n                if (slugs.includes(getSlug())) {\n                    const page = SLUG_TO_PAGE[getSlug()];\n                    if (page) {\n                        history.replaceState(history.state, 'bypass', '/' + page);\n                    }\n                }\n            onpopstate.apply(this, [].slice.call(arguments));\n            updateSlug();\n        };\n    }\n    });\n    observer.observe(document.querySelector('#notion-app'), {\n        childList: true,\n        subtree: true,\n    });\n    const replaceState = window.history.replaceState;\n    window.history.replaceState = function(state) {\n        if (arguments[1] !== 'bypass' && slugs.includes(getSlug())) return;\n        return replaceState.apply(window.history, arguments);\n    };\n    const pushState = window.history.pushState;\n    window.history.pushState = function(state) {\n        const dest = new URL(location.protocol + location.host + arguments[2]);\n        const id = dest.pathname.slice(-32);\n        if (pages.includes(id)) {\n            arguments[2] = '/' + PAGE_TO_SLUG[id];\n        }\n        return pushState.apply(window.history, arguments);\n    };\n    const open = window.XMLHttpRequest.prototype.open;\n    window.XMLHttpRequest.prototype.open = function() {\n        arguments[1] = arguments[1].replace('${e}', 'www.notion.so');\n        return open.apply(this, [].slice.call(arguments));\n    };\n    <\/script>\n    <script>\n<\/script>\n    `,{html:!0})}}}]);