// ==UserScript==
// @name        Not Webdriver
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @grant       none
// @version     1.0
// @author      xn435
// @description Hide webdriver detection by setting navigator.webdriver to false.
// ==/UserScript==

// Huge thanks to hldev from stackoverflow who came up with this solution.
// Source: https://stackoverflow.com/questions/53039551/selenium-webdriver-modifying-navigator-webdriver-flag-to-prevent-selenium-detec/69533548#69533548

Object.defineProperty(Navigator.prototype, 'webdriver', {
    set: undefined,
    enumerable: true,
    configurable: true,
    get: new Proxy(
        Object.getOwnPropertyDescriptor(Navigator.prototype, 'webdriver').get,
        { apply: (target, thisArg, args) => {
            Reflect.apply(target, thisArg, args);
            return false;
        }}
    )
});
