// ==UserScript==
// @name         Twitter Title Modifier
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Ändert den Titel der Twitter-Seiten entsprechend.
// @author       Stevelo and bennett-sh
// @match        https://twitter.com/*
// @run-at   document-start
// @updateURL    https://github.com/Stevelolp/twitter-tampermonkey/raw/main/output/Twitter-Title-Modifier.user.js
// @downloadURL  https://github.com/Stevelolp/twitter-tampermonkey/raw/main/output/Twitter-Title-Modifier.user.js
// @icon         https://abs.twimg.com/favicons/twitter.2.ico
// ==/UserScript==

(function() {
    'use strict'

    const $ = document.querySelector.bind(document)

    function modifyTitle(title) {
        title.textContent = title.textContent.replace(/ \/ .+$/, ' / Twitter')
    }

    // try grabbing the title every 300ms; once grabbed observe it's content
    const grabInterval = setInterval(() => {
        const title = $('title')
        if(title != null) {
            clearInterval(grabInterval)
            const observer = new MutationObserver(() => modifyTitle(title))
            observer.observe(title, { childList: true })
        }
    }, 300)
})()
