
var Twit = require('twit');


var T = new Twit(
		module.exports = {
  consumer_key:         'NjfxR17ePHFCH7OvL9prBX1Wg',
  consumer_secret:      'ngWmYqXlay8AfKSKvOLEqbY0tsz4yM12bsSdTEQ8lBChZgZrQ5',
  access_token:         '3972856272-1EENm3Kxp7vUkidtPj7r0uEqxImDbuzGzUVbRg0',
  access_token_secret:  'oVJ63YMdg4Cp6K13uSlIXimclig0l0eb9GvA5rjgWZtuL'
}


	);





function retweetLatest() {

var sajjeSearch = {q: "#sajje",count: 1, result_type: "recent"}; 

	T.get('search/tweets', sajjeSearch, function (error, data) {
	  
	  console.log(error, data);
	  
	  if (!error) {
	  
		var retweetId = data.statuses[0].id_str;
	
		T.post('statuses/retweet/' + retweetId, { }, function (error, response) {
			if (response) {
				console.log('Success! Check your bot, it should have retweeted something.')
			}
			
			if (error) {
				console.log('There was an error with Twitter:', error);
			}
		})
	  }
	  
	  else {
	  	console.log('There was an error with your hashtag search:', error);
	  }
	});
}

function retweetLatestSin() {

var sajjeSearch = {q: "##සාජ්ජේ",count: 1, result_type: "recent"}; 

	T.get('search/tweets', sajjeSearch, function (error, data) {
	  
	  console.log(error, data);
	  
	  if (!error) {
	  
		var retweetId = data.statuses[0].id_str;
	
		T.post('statuses/retweet/' + retweetId, { }, function (error, response) {
			if (response) {
				console.log('Success! Check your bot, it should have retweeted sinhala something.')
			}
			
			if (error) {
				console.log('There was an error with Twitter:', error);
			}
		})
	  }
	  
	  else {
	  	console.log('There was an error with your hashtag search:', error);
	  }
	});
}


retweetLatest();
retweetLatestSin();
setInterval(retweetLatest, 1000 * 10);
