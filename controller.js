var app = angular.module('testFeed');

app.controller('feedCtrl', function($scope){
	$scope.posts = [
		{
			title: "Post 1",
			author: "Superman",
			image: {
				url: "http://orig05.deviantart.net/9593/f/2012/233/9/9/tottenham_hotspur_by_lj23_gfx-d5bviop.png",
				alt: "So wonderful"
			},
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus quis sit hic eos tempora excepturi beatae, optio natus sint doloribus quisquam obcaecati necessitatibus. Obcaecati tenetur id aspernatur, repudiandae eligendi quos.",
			comments: ["Wow!", "This comment is in comments", "COYS"]
		},
		{
			title: "Post 2",
			author: "Batman",
			image: {
				url: "http://wallpapercave.com/wp/rgjIyYP.png",
				alt: "Such Wow"
			},
			text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eius quo assumenda vero qui, blanditiis recusandae id dolorem possimus vitae odio delectus nihil eligendi repellendus placeat reiciendis, animi ipsum tempore!",
			comments: ["I love writing comments", "Come on you Spurs!"]
		},
		{
			title: "Post 3",
			author: "Wonder Woman",
			image: {
				url: "http://www.tottenhamhotspur.com/uploadedImages/Shared_Assets/Images/News_images/SEASON_15-16/All_matches/First_team/Audi_Cup_Real_Madrid_4_Aug_2015/real730i.jpg?n=1219&targetTypeID=HighResNewsImage",
				alt: "Much amaze"
			},
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt aliquam nisi, ea natus laudantium, unde quibusdam impedit ab a repudiandae voluptatem, tempore culpa inventore maiores quia voluptatum officiis doloribus facere!",
			comments: ["First!", "I didn't know Wonder Woman was a Spurs supporter", "Love the purple!"]
		}
	];
});
