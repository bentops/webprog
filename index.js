$(document).ready(function()
{
	$(".content > div").click(function(){
		if(this.id == "1") window.open("http://bentops.azurewebsites.net/03_cssAnimation/cssAnimation.html" ,'_blank');
		else if(this.id == "2") window.open("http://bentops.azurewebsites.net/04_css3d/css3d.html" ,'_blank'); 
		else if(this.id == "3") window.open("http://bentops.azurewebsites.net/05_camera/ExerciseStarter.html" ,'_blank');
		else if(this.id == "4") window.open("http://bentops.azurewebsites.net/06_googleAPI/googleAPI.html" ,'_blank'); 
		else if(this.id == "5") window.open("http://bentops.azurewebsites.net/07_resume/resume.html" ,'_blank');
	});
});


