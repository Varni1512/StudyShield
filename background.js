chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "startTimer") {
        chrome.alarms.create("studyTimer", { delayInMinutes: message.duration });
    }
});

chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "studyTimer") {
        chrome.storage.local.set({ sessionActive: false });
        chrome.notifications.create({
            type: "basic",
            iconUrl: "icon.png",
            title: "Study Session Completed!",
            message: "Great job! Your study session is over. Take a break!"
        });
        chrome.storage.local.set({ sessionActive: false });
        chrome.tabs.query({}, function(tabs) {
            tabs.forEach(tab => {
                chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    function: () => {
                        alert("Your study session is over! You can now access all sites.");
                        location.reload();
                    }
                });
            });
        });
    }
});
