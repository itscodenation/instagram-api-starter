// YOUR CODE GOES HERE

var clientID = "405032b38f6b421f9c7823a249798f52";

$(document).ready(
  function() {
    $('#search-btn').click(
      function() {
        searchInstagram(
		  clientID,
          $('#search-query').val(),
          8,
          function(results) {
            console.log(results);
            $('#search-results').empty();
            $.each(
              results,
              function(index, result) {
                $('#search-results').append('<img src="' + result.images.thumbnail.url + '">');
              }
            );
          }
        );
      }
    );
  }
);
