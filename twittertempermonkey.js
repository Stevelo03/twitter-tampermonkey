// ==UserScript==
// @name         Twitter Title Modifier
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Ändert den Titel der Twitter-Seiten entsprechend.
// @author       Stevelo
// @match        https://twitter.com/*
// @grant        none
// @run-at   document-start
// @icon         https://abs.twimg.com/favicons/twitter.2.ico
// ==/UserScript==

(function() {
    'use strict';

    // Funktion zum Ändern des Titels
    function modifyTitle() {
        var pageTitle = document.title;
        var replacedTitle = pageTitle.replace(/ \/ .+$/, ' / Twitter');
        document.title = replacedTitle;
    }

    // Änderungen durchführen, wenn die Seite vollständig geladen ist
    window.addEventListener('load', function() {
        modifyTitle();
    });

    // Änderungen durchführen, wenn eine neue Seite geladen wird (AJAX)
    document.addEventListener('DOMSubtreeModified', function() {
        modifyTitle();
    });
})();
