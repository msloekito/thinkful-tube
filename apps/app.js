// // $(function(){

// //   function getRequest(searchTerm){
// //   var params = {
//     			part: "snippet",
// 				type: "video",
// 				q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
// 				maxResults: 3,
// 				order: "viewCount",
//   };
//   url = 'https://www.googleapis.com/youtube/v3/search';

//   $.getJSON(url, params, function(data){
//     showResults(data.Search);
//     console.log("test");
//   });
// }
// })

$(function() {
// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms



// Helper function to display JavaScript value on HTML page.
function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString;
}

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    // This API key is intended for use only in this lesson.
    // See http://goo.gl/PdPA1 to get a key for your own applications.
    gapi.client.setApiKey('AIzaSyASPbBq7_stRpHmcpgeYYEUYw12sr_hI_c');

    search();
}

function search() {
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: 'yao ming'
    });
    
    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    request.execute(onSearchResponse);
}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
    showResponse(response);
}
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.googleapis.com/youtube/v3/search", true);
// xhr.send();

// console.log(xhr.status);
// $.ajax({
// 	type: 'GET',
// 	url: 'https://www.googleapis.com/youtube/v3/search',
// 	success: function(data) {
// 		console.log('success', data)
// 	}
// })
// 	$("form").on("submit", function(e) {
// 		e.preventDefault();
// 		//prepare the request
// 		var request = gapi.client.youtube.search.list({
// 				part: "snippet",
// 				type: "video",
// 				q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
// 				maxResults: 3,
// 				order: "viewCount",
// 				});
// 				//execute the request
// 				request.execute(function(response) {
// 					console.log(response);
// 		});
// 	});
// });

// function init() {
// 	gapi.client.setApiKey("AIzaSyCmMt3baqu1S_tWLLaJjDkUHK65ue81oVU");
// 	gapi.client.load("youtube", "v3", function(){
// 		//youtube api is ready
// 	});
})