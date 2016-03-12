$(document).ready(function()
{
	$(".content > div").click(function(){
		if(this.id == "1") window.open("http://bentops.azurewebsites.net/03_cssAnimation/cssAnimation.html" ,'_blank');
		else if(this.id == "2") window.open("http://bentops.azurewebsites.net/04_css3d/css3d.html" ,'_blank'); 
		else if(this.id == "3") window.open("http://bentops.azurewebsites.net/05_camera/ExerciseStarter.html" ,'_blank');
		else if(this.id == "4") window.open("http://bentops.azurewebsites.net/06_googleAPI/googleAPI.html" ,'_blank'); 
		else if(this.id == "5") window.open("http://bentops.azurewebsites.net/07_resume/resume.html" ,'_blank');
	});
	$(".content > div").hover(function(){
		$(this).css({
			'background-color': 'lightskyblue',
			'transition': '0.5s'
		});
		$('#' + this.id + "> .classno > h3").css({
			'color': 'white',
			'transition': '0.5s'
		});
	},function(){
		$(this).css({
			'background-color': 'white'
		});
		$('#' + this.id + "> .classno > h3").css({
			'color': 'lightskyblue'
		});
	});
	$(".header > .h1 > h1").click(function(){
		window.open("http://bentops.azurewebsites.net/07_resume/resume.html" ,'_blank');
	});
});


