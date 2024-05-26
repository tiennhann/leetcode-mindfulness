document.querySelector("p#des").textContent = "Click to see the problems";
document.querySelector("button").addEventListener("click", () => {
    (async () => {
        const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
        const response = await chrome.tabs.sendMessage(tab.id, {reason: "getsolved"});
        document.querySelector("p#output").textContent = `${response.length} solved problems`;
      })();
})