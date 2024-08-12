// ==UserScript==
// @name         EroThots Show Video Link
// @namespace    http://tampermonkey.net/
// @version      2024-08-12
// @description  try to take over the world!
// @author      neeeee
// @match      https://erothots1.com/*
// @match      https://erothots.co/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=undefined.
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
    let videoPlayer = document.querySelector('.video-player');
    let vPlayer = document.querySelector('.v-player');
    let vSource = vPlayer.firstElementChild.src;
    let downloadLink = document.createElement('a');
    videoPlayer.appendChild(downloadLink);
    downloadLink.setAttribute('download', '');
    downloadLink.className = 'downloadLink';
    downloadLink.href = vSource;
    downloadLink.innerHTML = `<strong>Download Source:</strong>  <span style="text-decoration: underline;text-color: #a5adce;">${vSource}</span>`;
})();