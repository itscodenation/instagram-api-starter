// WRITE YOUR CODE IN script.js, NOT HERE

// This function searches for photos on flickr for photos
// that match the search query.
//
// The first argument should be the search query entered by
// the user. The second argument should be the number of results
// you want from the API (start with 1 to make it easier).
//
// The third argument should be a function to run when results
// are returned from the Flickr API. These are known as
// "callbacks". The function should expect to receive an array
// of results as the first argument, so something like:
//
//    function(results) {
//      // do something
//    }
function searchFlickr(clientID, query, count, callback) {
    // see https://www.flickr.com/services/api/
    var method = "flickr.photos.search";

    callFlickrAPI(clientID, method, {
        'text': query, // searches title, description & tags
        'per_page': count,
        'page': 1,
        'content_type': 1,
        'sort': 'relevance'
    }, function(response) {
        var photos = response.photos;
        console.log(photos);
        callback(photos);
    });
}

// This function is used by the searchFlickr() function
// to actually call the API. It's broken out here to make
// that function easier to read, but also in case we
// want to eventually call other endpoints.
function callFlickrAPI(clientID, method, params, callback) {
    var endpoint = 'https://api.flickr.com/services/rest/?method=' + method + "&";
    params = $.extend({
        'api_key': clientID,
        'format': 'json',
        'nojsoncallback': 1,
        'extras': 'url_m,url_s'
    }, params);

    var requestURL = endpoint + $.param(params);

    console.log("callFlickrAPI: " + requestURL);

    $.ajax(requestURL)
        .done(
            // this block gets called if the API call works or fails!
            function(response) {
                if (response.stat !== "ok") {
                    alert(response.message);
                } else {
                    callback(response);
                }
            }
        );
}
