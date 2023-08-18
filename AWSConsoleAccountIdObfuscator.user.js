// ==UserScript==
// @name         AWS Console Account ID Obfuscator
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide your Account ID when sharing screen publicly
// @author       Steven Follis
// @match        https://*.console.aws.amazon.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=amazon.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // This approach dynamically injects CSS rather than using JS to manipulate text directly

    // Create CSS rules, one for the top nav, and one for the top nav's flyout menu
    // In these rules, use CSS's text-shadow to blur the account number
    const stylesheet = new CSSStyleSheet();
    stylesheet.insertRule("span[data-testid='awsc-nav-account-menu-button'] span:first-child { color: transparent; text-shadow: 0 0 5px rgba(255,255,255,0.8); }");
    stylesheet.insertRule("#menu--account > div > div > div:nth-child(1) > span:nth-child(2) { color: transparent; text-shadow: 0 0 5px rgba(255,255,255,0.8); }");

    // Inject the custom CSS into the page
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, stylesheet];

})();