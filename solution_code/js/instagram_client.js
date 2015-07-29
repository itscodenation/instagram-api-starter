// WRITE YOUR CODE IN script.js, NOT HERE

// This function searches for photos on instagram with tags 
// that match the search query.
//
// The first argument should be the search query entered by 
// the user. The second argument should be the number of results
// you want from the API (start with 1 to make it easier).
//
// The third argument should be a function to run when results 
// are returned from the Instagram API. These are known as 
// "callbacks". The function should expect to receive an array 
// of results as the first argument, so something like:
//
//    function(results) {
//      // do something
//    }
function searchInstagram(query, count, callback) {
  // first we make the search query into a tag 
  var tag = query.toLowerCase() 
                 .replace('#', '') // we don't want to send #
                 .replace(' ', ''); // no spaces in tags

  // see https://instagram.com/developer/endpoints/tags/
  var endpoint = '/tags/' + tag + '/media/recent';

  callInstagramAPI(endpoint, {'count':count}, callback);  
}

// This function is used by the searchInstagram() function 
// to actually call the API. It's broken out here to make
// that function easier to read, but also in case we
// want to eventually call other endpoints.
function callInstagramAPI(endpoint, params, callback) {
  endpoint = 'https://api.instagram.com/v1' + endpoint;
  params = $.extend({'client_id':'405032b38f6b421f9c7823a249798f52'}, params);
  $.ajax(endpoint, {'data':params, 'dataType':'jsonp'})
   .done( 
      // this block gets called if the API call works or fails!
      function(response) {
        if (response.meta.error_message) {
          alert(response.meta.error_message);
        } else if (response.data) {
          callback(response.data);
        }
      }
    );
}

