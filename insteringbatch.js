// function fetchWorkItemsAndAppendToSheet() {
//   var sheetUrl = 'https://docs.google.com/spreadsheets/d/12sfka2cPH-x02rMLMV-It0oQdDAbi--1cdOFlY_3rvQ/edit#gid=0';
//   var sheet = SpreadsheetApp.openByUrl(sheetUrl).getSheets()[0];
//   var organization = "honeyray";
//   var project = "demo";
//   var accessToken = "meuo5uro4iuf3ycwsz4rgett66vgfnoau7mlribj7rbam2ya72oa";
//   var workItemIds = "1,2,3"; // Replace with the list of work item ids you want to fetch
  
//   var url = "https://dev.azure.com/" + organization + "/" + project + "/_apis/wit/workitems?ids=" + workItemIds + "&$expand=all&api-version=6.1-preview.3";

//   var options = {
//     "method": "GET",
//     "headers": {
//       "Authorization": "Basic " + Utilities.base64Encode(":" + accessToken)
//     }
//   };

//   var response = UrlFetchApp.fetch(url, options);
//   var data = JSON.parse(response.getContentText());

//   // Process the fetched work items
//   for (var i = 0; i < data.value.length; i++) {
//     var workItem = data.value[i];

//     var name = (workItem.fields["System.Title"]);
//     var description = (workItem.fields["System.Description"]);
//     description = description.replace(/<\/?[^>]+>/gi, '');
//     var workItemType = (workItem.fields["System.WorkItemType"]);
//     var status = (workItem.fields["System.State"]);
//     var priority = (workItem.fields["Microsoft.VSTS.Common.Priority"]);
//     var assignee = (workItem.fields["System.AssignedTo"].displayName);

//     // Append the fetched data to the sheet
//     sheet.appendRow([name, description, workItemType, status, priority, assignee]);
//   }
// }
