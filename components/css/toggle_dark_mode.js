module.exports = `
div.notion-topbar > div > div:nth-child(3) { display: none !important; }
div.notion-topbar > div > div:nth-child(4) { display: none !important; }
div.notion-topbar > div > div:nth-child(5) { display: none !important; }    
div.notion-topbar > div > div:nth-child(6) { display: none !important; }
div.notion-topbar-mobile > div:nth-child(3) { display: none !important; }
div.notion-topbar-mobile > div:nth-child(4) { display: none !important; }
div.notion-topbar > div > div:nth-child(1n).toggle-mode { display: block !important; }
div.notion-topbar-mobile > div:nth-child(1n).toggle-mode { display: block !important; }
`;
