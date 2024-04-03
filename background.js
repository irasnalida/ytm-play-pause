chrome.action.onClicked.addListener(function (tab){
    chrome.tabs.query({url: "*://music.youtube.com/*"}, function(tabs) {
        tabs.forEach(function(tab) {
            //console.log("Tab ID:", tab.id);
            //console.log("Title:", tab.title);
            //console.log("URL:", tab.url);
            //console.log("Active:", tab.active);
            //console.log("----------------------------");
            chrome.scripting.executeScript({
                target: {tabId: tab.id},
                files: ['content.js']
              });
        });
    });
});