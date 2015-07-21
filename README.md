# chrome-extensions

what I know so far: (taken from developer.chrome.com/extensions)

1. create a manifest.json file. This file will include the extension's name, description, version number and other default actions like, "title".
2. You must create an icon.png and a popup.html
3. chrome extensions accept javascript, html, and css files.


for more information visit:
https://developer.chrome.com/extensions


To load extension:


1. Visit chrome://extensions in your browser (or open up the Chrome menu by clicking the icon to the far right of the Omnibox:  The menu's icon is three horizontal bars. and select Extensions under the Tools menu to get to the same place).

2. Ensure that the Developer mode checkbox in the top right-hand corner is checked.

3. Click Load unpacked extension… to pop up a file-selection dialog.

4. Navigate to the directory in which your extension files live, and select it.

If the extension is valid, it'll be loaded up and active right away! If it's invalid, an error message will be displayed at the top of the page. Correct the error, and try again.


currently getting the following error:
background.html:1 Refused to execute inline script because it violates the following Content Security Policy directive: "script-src 'self' chrome-extension-resource:". Either the 'unsafe-inline' keyword, a hash ('sha256-1W4cDAWNWsyJRHoPpMCX51A_dOahG_dS7SRmelAOZn4='), or a nonce ('nonce-...') is required to enable inline execution.
