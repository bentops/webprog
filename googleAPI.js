$(document).ready(function()
{
	$("#search-input").keyup(function(event){
    	if(event.keyCode == 13){
        	$("#search-button").click();
    	}
	});
	$("#search-button").click(function() 
	{
		var query = $("#search-input").val();
		// console.log(query);
		$.ajax
		({
			url: "https://kgsearch.googleapis.com/v1/entities:search",
			data: 
			{
				'query': query,
				'key' : "AIzaSyAWPDqlDRYDH-qcP58LVBDDHL2iXs6wSPc",
				'limit': 100
			},
			dataType: "json"
		}).done(function(data)
		{
			showResult();
			console.log(data);
			showResult(data);

			$(".result").hover(function(event) {
				$("#InfoBox" + this.id).show('slow');
			}, function() {
			    $("#InfoBox" + this.id).hide();
			});
			$(".result").click(function () {
		        window.open($(this).find("a:first").attr("href"));
		        return false;
		    });
		});
	});
});

function showResult(data)
{
	if(data)
	{
		var r = 1;
		for (var i = 0; i <= data.itemListElement.length - 1; i++) {
			// console.log(data.itemListElement.length - 1);
			var name = data.itemListElement[i].result.name;
			if(data.itemListElement[i].result.description) var description = data.itemListElement[i].result.description;
				else var description = "";
			if(data.itemListElement[i].result.image) var imgUrl = data.itemListElement[i].result.image.contentUrl;
				else var imgUrl = imgSearch(name);
			if(data.itemListElement[i].result.detailedDescription && data.itemListElement[i].result.detailedDescription.articleBody) var detailedDescription = data.itemListElement[i].result.detailedDescription.articleBody;
				else var detailedDescription = "";
			if(data.itemListElement[i].result.url) var link = data.itemListElement[i].result.url;
			else if(data.itemListElement[i].result.detailedDescription && data.itemListElement[i].result.detailedDescription.url) var link = data.itemListElement[i].result.detailedDescription.url;
			else var link = "";
			// console.log(r + " " + name+ "\n" + description + "\n" + detailedDescription + "\n" + imgUrl);
			// console.log("link" + r + "=" + link);
			console.log(r + " " + imgUrl);

			var resultDiv = $('<div/>', {
				"id" : "r" + r,
				"class" : "result"
			})
			.appendTo("#knowledge-results");

			var resultLink = $('<a/>', {
				"class" : "divLink",
				"href" : link
			})
			.appendTo(resultDiv);

			var resultImgDiv = $('<div/>', {
				"id" : "rImgDiv" + r,
				"class" : "resultImgDiv"
			})
			.appendTo(resultDiv);

			var resultInfoDiv = $('<div/>', {
				"id" : "InfoDivr" + r,
				"class" : "resultInfoDiv"
			})
			.appendTo(resultDiv);

			$("<h3></h3>").text(name).appendTo(resultInfoDiv);
			$("<h4></h4>").text(description).appendTo(resultInfoDiv);

			
			
			var resultInfoBox = $('<div/>', {
				"id" : "InfoBoxr" + r,
				"class" : "infoBox"
			}).text(detailedDescription).hide().appendTo("#knowledge-search-nav");

			$("<h3></h3>").text(name).appendTo(resultInfoBox);
			$("<h4></h4>").text(description).appendTo(resultInfoBox);

			if(imgUrl)
			{
				if (getOrientation(imgUrl) == "portrait")
				{
					$('<img/>', {
						"src" : imgUrl,
						"id" : "Imgr" + r,
						"class" : "portrait"
					}).appendTo(resultImgDiv);
				}
				else
				{
					$('<img/>', {
						"src" : imgUrl,
						"id" : "Imgr" + r,
						"class" : "landscape"
					}).appendTo(resultImgDiv);
				}
			}

	        r++;
		}	
	}
	else $("#knowledge-results").empty();
}

function imgSearch(keywords)
{
	console.log(keywords);
	var imgResult;
	var params = {};
    params.q = keywords; // search text
    params.num = 1; // integer value range between 1 to 10 including
    params.start = 1; // integer value range between 1 to 101, it is like the offset
    // params.imgSize = ""; // for image size
    params.searchType = "image"; // compulsory 
    // params.fileType = ""; // you can leave these if extension does not matters you
    params.key = "AIzaSyAWPDqlDRYDH-qcP58LVBDDHL2iXs6wSPc"; // API_KEY got from https://console.developers.google.com/
    // params.cx = "005539955006427728611:fcqyhzkmffw";
    params.cx = "005539955006427728611:0jsf72tfg2c"; // cx value is the custom search engine value got from https://cse.google.com/cse(if not created then create it).

    $.ajax
		({
			url: "https://www.googleapis.com/customsearch/v1",
			data: params,
			dataType: "json"
		}).done(function(data)
		{
			// showResult();
			console.log(data.items[0].link);
			imgResult = data.items[0].link;
			// showResult(data);

			// $(".result").hover(function(event) {
			// 	$("#InfoBox" + this.id).show('slow');
			// }, function() {
			//     $("#InfoBox" + this.id).hide();
			// });
			// $(".result").click(function () {
		 //        window.open($(this).find("a:first").attr("href"));
		 //        return false;
		 //    });
		});
	return imgResult;
}

function getOrientation(imgUrl)
{
	img = new Image();
	img.src = imgUrl;
	var width = img.width;
	var height = img.height;
	if(width > height) return "landscape"; 
	else return "portrait";
}