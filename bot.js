
var Twit = require('twit');


var T = new Twit(require('./config.js'));


var sajjeSearch = {q: "#sajje", count: 1, result_type: "recent"}; 


function retweetLatest() {
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

retweetLatest();
setInterval(retweetLatest, 1000 * 10);
