document.getElementById("startSession").addEventListener("click", function() {
    let topic = document.getElementById("studyTopic").value;
    let time = parseInt(document.getElementById("studyTime").value);
    if (!topic || !time) {
        document.getElementById("statusMessage").innerText = "Please enter a topic and time!";
        return;
    }
    chrome.storage.local.set({ studyTopic: topic, studyTime: time, sessionActive: true });
    chrome.runtime.sendMessage({ action: "startTimer", duration: time });
    window.close();
});

document.getElementById("stopSession").addEventListener("click", function() {
    chrome.storage.local.set({ sessionActive: false });
    document.getElementById("statusMessage").innerText = "Study session ended.";
});