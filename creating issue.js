// function createWorkItemsFromSpreadsheet() {
//   var sheetUrl = 'https://docs.google.com/spreadsheets/d/1AatNxZCfTxgXu0jtqe7aRBfE8Ye1DjhEI6YF8oJh1KM/edit#gid=0';
//   var sheet = SpreadsheetApp.openByUrl(sheetUrl).getSheets()[0];
//   var data = sheet.getDataRange().getValues();

//   // Replace with your own Azure DevOps organization, project and Personal Access Token (PAT)
//   var organization = 'honeyray';
//   var project = 'demo';
//   var pat = 'meuo5uro4iuf3ycwsz4rgett66vgfnoau7mlribj7rbam2ya72oa';

//   // Loop through the rows in the spreadsheet and create work items
//   for (var i = 1; i < data.length; i++) {
//     var title = data[i][0];
//     var description = data[i][1];

//     // Create the work item payload
//     var payload = {
//       'op': 'add',
//       'path': '/fields/System.Title',
//       'value': title
//     };
//     if (description) {
//       payload['relations'] = [
//         {
//           'rel': 'System.LinkTypes.Hierarchy-Reverse',
//           'url': 'https://dev.azure.com/' + organization + '/' + project + '/_apis/wit/workItems/' + description
//         }
//       ];
//     }

//     // Create the HTTP request options
//     var options = {
//       'method': 'post',
//       'headers': {
//         'Authorization': 'Basic ' + Utilities.base64Encode(':' + pat),
//         'Content-Type': 'application/json-patch+json'
//       },
//       'payload': JSON.stringify([payload])
//     };

//     // Send the HTTP request to create the work item
//     var url = 'https://dev.azure.com/' + organization + '/' + project + '/_apis/wit/workitems/$Issue?api-version=6.0';
//     var response = UrlFetchApp.fetch(url, options);

//     // Log the response from Azure DevOps
//     Logger.log(response.getContentText());
//   }
// }
