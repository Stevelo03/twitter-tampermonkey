// ==UserScript==
// @name         Twitter Title Modifier
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  Changes Tab Name from "/ X" back to "/ Twitter" and fixes the Tweet button
// @author       Stevelo and bennett-sh
// @match        https://twitter.com/*
// @run-at       document-start
// @updateURL    https://github.com/Stevelolp/twitter-tampermonkey/raw/main/output/Twitter-Title-Modifier.user.js
// @downloadURL  https://github.com/Stevelolp/twitter-tampermonkey/raw/main/output/Twitter-Title-Modifier.user.js
// @icon         https://abs.twimg.com/favicons/twitter.2.ico
// ==/UserScript==

(function() {
    'use strict';

    const $ = document.querySelector.bind(document);

    function modifyTitle(title) {
        title.textContent = title.textContent.replace(/ \/ .+$/, ' / Twitter');
    }

    function modifyButtonText() {
        const postButton = Array.from(document.querySelectorAll('span')).find(el => /Post(en)?/.test(el.textContent));
        if (postButton) {
            postButton.textContent = 'Tweet';
        }
    }

    function checkAndModifyTitle() {
        const title = $('title');
        if (title != null) {
            modifyTitle(title);
        }
    }

    const interval = setInterval(() => {
        checkAndModifyTitle();
        modifyButtonText(); 
    }, 300);
})();

