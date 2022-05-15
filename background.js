// background.js

let color = '#3aa757';

let newColor;

chrome.runtime.onInstalled.addListener(() => {
  newColor = chrome.storage.local.get(['color']);
  // chrome.storage.local.set({color: color});
  chrome.windows.getAll({}, (windows) => {
    windows.forEach(window => {
      // console.log(window.width);
      chrome.tabs.query({ windowId: window.id }, (tabs) => {
        tabs.forEach(tab => {
          console.log(tab.url);
        });
      });

      // let tabs = window.tabs;
      // console.log(tabs.length);
      // tabs.forEach(tab => {
      //   console.log(tab.url);
      // });
    });
  });

  chrome.storage.local.set({
    urls: ["https://www.nytimes.com/games/wordle/index.html",
          "https://developer.chrome.com/docs/extensions/reference/windows/#method-create"]
  });

  chrome.storage.local.get("urls", ({ urls }) => {
    console.log(urls);
  });
  // console.log(urls);

});

chrome.runtime.onSuspend.addListener(() => {
  chrome.storage.local.set({color: color});
  console.log('Default background color set to %cgreen', `color: ${color}`);
});