function parseProblems() {
  let nextButton = document.querySelector('button[aria-label="next"]:enabled')
  nextButton.click();  
  // let buttons = Array.from(document.querySelectorAll('button'));
  // buttons = buttons.filter(button => button.innerText == "Status");
  // const statusButton = buttons[0];
  // statusButton.click();
  // let options = Array.from(document.querySelectorAll('div[role="menuitem"]:has(span)'));
  // options = options.filter(option => option.innerText == "Solved")
  // console.log(options)
  // let option = options[0];
  // option.click()

  // let  rowgroups = Array.from(document.querySelectorAll('div[role="rowgroup"]'));
  // rowgroups = rowgroups.filter(rowgroup => rowgroup.querySelector("div[role='row']") != null)
  // let rowgroup = rowgroups[0]
  // let rows = Array.from(rowgroup.querySelectorAll('div[role="row"]'));
  // rows = rows.map(row => row.querySelector('span[data-state="closed"]'))
  // console.log(Array.from(rows));
  }

} // end parseProblems


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    parseProblems();
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting === "hello")
      sendResponse({farewell: "goodbye"});
  }
);