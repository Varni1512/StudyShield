chrome.storage.local.get(["studyTopic", "sessionActive"], function(data) {
    if (!data.sessionActive) return;
    let bodyText = document.body.innerText;
    if (!bodyText.includes(data.studyTopic)) {
        document.body.innerHTML = `<div class='blocked'><h1>Blocked: Not related to study</h1><p>Focus on ${data.studyTopic}!</p></div>`;
        document.body.style.cssText = "display: flex; justify-content: center; align-items: center; height: 100vh; background-color:rgb(180, 65, 65); color: #333; font-family: Arial, sans-serif;";
    }
});
