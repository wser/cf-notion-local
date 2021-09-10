module.exports = `
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