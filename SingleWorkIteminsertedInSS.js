// function myFunction() {
//   var sheet_url = "https://docs.google.com/spreadsheets/d/12sfka2cPH-x02rMLMV-It0oQdDAbi--1cdOFlY_3rvQ/edit#gid=0";
//   var sheet = SpreadsheetApp.openByUrl(sheet_url).getActiveSheet();

//   var api_url =  "https://dev.azure.com/honeyray/demo/_apis/wit/workitems/1?api-version=7.0";
//   var capi_url  = "";
//   var apikey = 'meuo5uro4iuf3ycwsz4rgett66vgfnoau7mlribj7rbam2ya72oa';
//   var authorization = "Basic " + Utilities.base64Encode(":"+ apikey);
//   var headers = {
//     'Authorization': authorization,
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
//   };
//   var options = {
//     'method': 'GET',
//     'headers': headers
//   };
//   var response = UrlFetchApp.fetch(api_url, options);
//   var data = JSON.parse(response.getContentText());

//   var name = data.fields["System.Title"];
//   var status = data.fields["System.State"];
//   var description = data.fields["System.Description"];
//   description = description.replace(/<\/?[^>]+>/gi, '');
//   var discussion = data.fields["System.History"];
//   var assignee = data.fields["System.AssignedTo"].displayName;
//   var priority = data.fields["Microsoft.VSTS.Common.Priority"];
//   var workItemType = data.fields["System.WorkItemType"];

//   var rowValues = [name, status, description, discussion, assignee, priority, workItemType];
//   sheet.appendRow(rowValues);
// }

