$(function(){
	$('#search-term').submit(function(event){
		event.preventDefault();
		var searchTerm = $('#query').val();
		getRequest(searchTerm);
	});

	function getRequest(searchTerm) {
		var params = {
			part: 'snippet', 
			key: 'AIzaSyAcwjV5E-FbqMFz4wyRvWcBJ2TZenDwGCA',
			q: searchTerm
		}

		url = 'https://www.googleapis.com/youtube/v3/search';

		$.getJSON(url, params, function(data){
			console.log(data.items);
			showResults(data.items);
		});
	};

	function showResults(results) {
		var html="";
		$.each(results, function(index, item){
			html += '<li>' + item.snippet.title + '<p><a href=' + '"https://www.youtube.com/watch?v=' + item.id.videoId + '"><img src="' + item.snippet.thumbnails.medium.url + '"></a></p></li>';
		});
		$('#search-results ul').html(html);
	}
});