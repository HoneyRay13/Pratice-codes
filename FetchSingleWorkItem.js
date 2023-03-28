// function fetchWorkItem() {
//   var organization = "honeyray";
//   var project = "demo";
//   var workItemId = 1; // replace with the ID of the work item you want to fetch
//   var accessToken = "meuo5uro4iuf3ycwsz4rgett66vgfnoau7mlribj7rbam2ya72oa";

//   var url = "https://dev.azure.com/" + organization + "/" + project + "/_apis/wit/workitems/" + workItemId + "?$expand=all&api-version=6.1-preview.3";

//   var options = {
//     "method": "GET",
//     "headers": {
//       "Authorization": "Basic " + Utilities.base64Encode(":" + accessToken)
//     }
//   };

//   var response = UrlFetchApp.fetch(url, options);
//   var data = JSON.parse(response.getContentText());

//   Logger.log(data);
// }
