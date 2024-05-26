async function getSolved(limit=50) {
  async function getProblems(skip) {
    // do something with response here, not outside the function
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      body: JSON.stringify({
        "query": "\n    query problemsetQuestionList($categorySlug: String, $limit: Int, $skip: Int, $filters: QuestionListFilterInput) {\n  problemsetQuestionList: questionList(\n    categorySlug: $categorySlug\n    limit: $limit\n    skip: $skip\n    filters: $filters\n  ) {\n    total: totalNum\n    questions: data {\n      acRate\n      difficulty\n      freqBar\n      frontendQuestionId: questionFrontendId\n      isFavor\n      paidOnly: isPaidOnly\n      status\n      title\n      titleSlug\n      topicTags {\n        name\n        id\n        slug\n      }\n      hasSolution\n      hasVideoSolution\n    }\n  }\n}\n    ",
        "variables": {
          "categorySlug": "all-code-essentials",
          "skip": skip,
          "limit": limit,
          "filters": {
            "status": "AC"
          }
        },
        "operationName": "problemsetQuestionList"
      }),
      headers: {
        "Content-type": "application/json"
      }
    });
    const data = await response.json();
    const problemsList = data["data"]['problemsetQuestionList'];
    return problemsList;
  } // end getProblems
  
  // get the first limit
  let problemsList = await getProblems(0);
  if (problemsList === undefined) {
    console.error("failed to get problem list");
    return;
  }
  const size = problemsList.total;
  let problems = problemsList['questions'];
  // check if there is more
  if (size > problems.length) {
    // get the rest of the data
    const times = Math.ceil((size - limit) / limit);
    for (let i = 0; i < times; ++i) {
      problemsList = await getProblems((i+1) * limit);
      problems.push(...problemsList['questions']);
    } // end for i
  } // end if
  return problems;
} // end parseProblems


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.reason === "getsolved") {
      getSolved().then((data) => {
          console.log(data);
          sendResponse(data);
      });
      return true;
    } // end if
  }
);      