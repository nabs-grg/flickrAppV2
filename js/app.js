$(function () {
  var BASE_URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search';

  $('#btn-search').click(function () {
    var flickr_TAG = $('#search-location').val();

    console.log($('#search-location').val());

    $.ajax({
      type: 'GET',
      url: BASE_URL,
      dataType: 'jsonp',
      jsonp: 'jsoncallback',
      data: {
        api_key: '0a07a2af2eb6782a2bde023925f56ab4',
        has_geo: 1,
        extras: 'geo',
        format: 'json',
        tags: flickr_TAG,
        per_page: 20,
      },
      success: function (data) {
        console.log('testing ssh');

        $.each(data.photos.photo, function (index, value) {
          //get the URL for the requested flickr images
          var photoURL =
            'http://farm' +
            value.farm +
            '.static.flickr.com/' +
            value.server +
            '/' +
            value.id +
            '_' +
            value.secret +
            '_m.jpg';

          imageHTML = '<img src="' + photoURL + '" >';

          //add images to the image div
          $('#images-flickr').append(imageHTML);

          $('#images-flickr').append('<br />');
        });
      },
    });

    $('#search-location').val('');
  });
});
