// ==UserScript==
// @name         Fix Google Links
// @version      0.1
// @description  Prevent google page from replacing search results links with the redirection ones.
// @author       Neokyuubi
// @match        https://www.google.com/search?q=*
// @icon         https://www.google.com/favicon.ico
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @run-at       document-end
// ==/UserScript==


(function () {
  'use strict';

  $("#rso a[data-jsarwt]").each(function () {
    $(this).attr('data-jsarwt', "");
  });

})();
