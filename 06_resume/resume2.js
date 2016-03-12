var skillState = 'n1';

$(document).ready(function()
{
	$(".headerMenu").click(function(){
		$(this).css({
			'opacity': '0.8', 
			'border-color': '#962d3e'
		});
		$("#"+ this.id + ".menuPage").show('fast');
		$(".headerMenu").not(this).each(function(){
			$(this).css({
				'opacity': '0.5', 
				'border-color': 'white'
			});
			$("#"+ this.id + ".menuPage").hide();
		});
	});

	$(".page").hover(function(){
		$(".arrow").hide();
	});
	$(".floatBox").hover(function(){
		$(this).css({
		    'opacity': '1',
		    'left': '0vw',
			'transition': '1s'
		});
		$(".floatBox2").css({
		    'left': '0vw',
		    'width': '27vw',
		    'background-color': 'rgba(242,235,199,0)',
			'transition': '1s'
		});
		$(".arrow").hide();
		if(skillState == 'n1'){
			$(".floatBox2 > .skill#n1 > .name").css({
			    'font-size': '3.3vw',
			    'background-color': '#962d3e',
			    'color': 'white',
			    'transition': '1s'
			});
			$(".floatBox2 > .skill#n1 > .name > div").css({
			    'font-size': '3vw',
			    'background-color': '#962d3e',
			    'color': 'white',
			    'transition': '1s'
			});
			$(".floatBox2 > .skill#n2 > .name").css({
				'margin-top': '4vw',
			    'font-size': '3vw',
			    'line-height': '3vw',
			    'background-color': '#f2ebc7',
			    'transition': '1s'
			});
			$(".floatBox2 > .skill#n3 > .name").css({
				'margin-top': '4vw',
			    'font-size': '2.2vw',
			    'line-height': '2.2vw',
			    'background-color': '#f2ebc7',
			    'transition': '1s'
			});
			$(".floatBox2 > .skill > .detailed").css({
			    'font-size': '1.4vw',
			    'background-color': '#f2ebc7',
			    'transition': '1s'
			});
			$(".floatBox2 > .skill#n1 > .detailed").css({
			    'background-color': '#962d3e',
			    'color': 'white'
			});
		} else if(skillState == 'n2'){
			$(".floatBox2 > .skill#n1 > .name").css({
			    'font-size': '3.3vw',
			    'background-color': '#f2ebc7',
			    'transition': '1s'
			});
			$(".floatBox2 > .skill#n1 > .name > div").css({
			    'font-size': '3vw',
			    'background-color': '#f2ebc7',
			    'transition': '1s'
			});
			$(".floatBox2 > .skill#n2 > .name").css({
				'margin-top': '4vw',
			    'font-size': '3vw',
			    'line-height': '3vw',
			    'background-color': '#962d3e',
			    'color': 'white',
			    'transition': '1s'
			});
			$(".floatBox2 > .skill#n3 > .name").css({
				'margin-top': '4vw',
			    'font-size': '2.2vw',
			    'line-height': '2.2vw',
			    'background-color': '#f2ebc7',
			    'transition': '1s'
			});
			$(".floatBox2 > .skill > .detailed").css({
			    'font-size': '1.4vw',
			    'background-color': '#f2ebc7',
			    'transition': '1s'
			});
			$(".floatBox2 > .skill#n2 > .detailed").css({
			    'background-color': '#962d3e',
			    'color': 'white'
			});

		} else if(skillState == 'n3'){
			$(".floatBox2 > .skill#n1 > .name").css({
			    'font-size': '3.3vw',
			    'background-color': '#f2ebc7',
			    'transition': '1s'
			});
			$(".floatBox2 > .skill#n1 > .name > div").css({
			    'font-size': '3vw',
			    'background-color': '#f2ebc7',
			    'transition': '1s'
			});
			$(".floatBox2 > .skill#n2 > .name").css({
				'margin-top': '4vw',
			    'font-size': '3vw',
			    'line-height': '3vw',
			    'background-color': '#f2ebc7',
			    'transition': '1s'
			});
			$(".floatBox2 > .skill#n3 > .name").css({
				'margin-top': '4vw',
			    'font-size': '2.2vw',
			    'line-height': '2.2vw',
			    'background-color': '#962d3e',
			    'color': 'white',
			    'transition': '1s'
			});
			$(".floatBox2 > .skill > .detailed").css({
			    'font-size': '1.4vw',
			    'background-color': '#f2ebc7',
			    'transition': '1s'
			});
			$(".floatBox2 > .skill#n3 > .detailed").css({
			    'background-color': '#962d3e',
			    'color': 'white'
			});

		}

	},function(){
		$(this).css({
		    'left': '-35vw'
		});
		$(".floatBox2").css({
			'transition': '1s',
		    'left': '-35vw',
		    'width': '44vw',
		    'background-color': 'rgba(242,235,199,1)'
		});
		$(".floatBox2 > .skill#n1 > .name").css({
		    'font-size': '5.5vw',
		    'background-color': '',
		    'color': '#343642'
		});
		$(".arrow").fadeIn(800);
		$(".floatBox2 > .skill#n1 > .name > div").css({
		    'font-size': '4.5vw',
		    'background-color': '',
		    'color': '#343642'
		});
		$(".floatBox2 > .skill#n2 > .name").css({
			'margin-top': '3vw',
		    'font-size': '4.5vw',
		    'line-height': '3vw',
		    'background-color': ''
		});
		//if skilll

		$(".floatBox2 > .skill#n3 > .name").css({
			'margin-top': '3vw',
		    'font-size': '3.5vw',
		    'line-height': '2vw',
		    'background-color': ''
		});
		$(".floatBox2 > .skill#" + skillState + "> .name").css({
		    'color': '#343642'
		});
		//if skilll

		$(".floatBox2 > .skill > .detailed").css({
		    'font-size': '1.8vw',
		    'background-color': ''
		});
		//if skillll

		$(".floatBox2 > .skill#" + skillState + "> .detailed").css({
		    'background-color': '',
		    'color': '#343642'
		});

	});


	$(".floatBoxNavB").click(function(){
		$(this).css({
			'background-color': '#54565f'
		});
		$(".page > #"+ this.id).fadeIn(200);
		$(".skill#" + this.id + "> .name").css({
		    'background-color': '#962d3e',
		    'color': 'white'
		});
		$(".skill#" + this.id + "> .detailed").css({
		    'background-color': '#962d3e',
		    'color': 'white'
		}); 
		if(this.id == "n1")	{
			console.log("n1");
			$(".skill#" + this.id + "> .name > div").css({
			    'background-color': '#962d3e',
			    'color': 'white'
			}); 
		};
		skillState = this.id;

		$(".floatBoxNavB").not(this).each(function(){
			$(this).css({
				'background-color': '#343642'
			});
			$(".page > #"+ this.id).hide();
			$(".skill#" + this.id + "> .name").css({
			    'background-color': '#f2ebc7',
			    'color': '#343642'
			}); 
			$(".skill#" + this.id + "> .detailed").css({
			    'background-color': '#f2ebc7',
			    'color': '#343642'
			}); 
			if(this.id == "n1")	{
				console.log("not n1");
				$(".skill#" + this.id + "> .name > div").css({
				    'background-color': '#f2ebc7',
				    'color': '#343642'
				}); 
			};	
		});
	});
});

function showArrow(){
	$(".arrow").fadeIn('100');
}

