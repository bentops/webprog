// Edited by Ben on 2/15/2106.
var isCapture = false;
var s = 1;
$(document).ready(function(){
    CameraTool.initCameraOn("camera");
    $("#camera-control > button").mousedown(capture);
    $("body").keydown(keyevent);
});

function capture(){
    if (isCapture == false){
        
        countdown();
        setTimeout(CameraTool.captureTo("photo"), 4000);
        setTimeout(CameraTool.hideCamera(), 5000);
        isCapture = true;
    } else {
        CameraTool.initCameraOn("camera");
        isCapture = false;
    }
}

function countdown() {
    setTimeout(function(){$("#countdown").html("3");},0);
    setTimeout(function(){$("#countdown").html("2");},1000);
    setTimeout(function(){$("#countdown").html("1");},2000);
    setTimeout(function(){$("#countdown").html("");},3000);
}

//
// drag & drop
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    console.log("dragStart");
    ev.dataTransfer.setData("text", ev.target.id);
    ev.dataTransfer.setData("offsetX", ev.offsetX);
    ev.dataTransfer.setData("offsetY", ev.offsetY);
    var data = ev.dataTransfer.getData("text");
}

function drop(ev) {
    if(isCapture){
        console.log("droppp");
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");

        var copysticker = document.createElement("img");
        var original = document.getElementById(data);
        ev.target.appendChild(copysticker);
        copysticker.setAttribute("id", "s" + s);
        var x = ev.dataTransfer.getData("offsetX");
        var y = ev.dataTransfer.getData("offsetY");
        px = ev.offsetX - x;
        py = ev.offsetY - y;
        $("#s" + s)
            .attr({
                "class": "sticker",
                "src": original.src,
                "data-rotation": 0
            })
            .css({
                "position": "absolute",
                "top": py + "px",
                "left": px + "px" 
            });

        $("#s" + s).click(selectSticker);
        selectnewSticker();
        s++;
    }
}

function selectSticker(){
    if($("#" + this.id).hasClass("selected")) {
        $("#" + this.id).removeClass("selected");
    }    
    else{
        deselect();
        $("#" + this.id).addClass("selected");
    }
}

function selectnewSticker(){
    $("#overlay > .sticker").each(function(){
        deselect();
        $("#" + this.id).addClass("selected");
    });
}

function deselect(){
    $("#overlay > .sticker").each(function(){
        $("#" + this.id).removeClass("selected");
    });
}

// function moving(ev) {
//     console.log("mmmm");
//     if(isCapture){
//         ev.preventDefault();
//         var data = ev.dataTransfer.getData("text");

        
//         var original = document.getElementById(data);
//         ev.target.appendChild(document.getElementById(data));
//         var offset = $('#overlay').offset();
//         x = ev.pageX - offset.left - 75;
//         y = ev.pageY - offset.top - 40;
//         document.getElementById(data).style.position = "absolute";
//         document.getElementById(data).style.top = y+ "px";
//         document.getElementById(data).style.left = x + "px";
//         console.log("x= " + x);
//         console.log("y= " + y);
//         //ev.target.appendChild(document.getElementById(data));
//     }
// }

// Key
function keyevent(ev){
    console.log(ev);
    if(ev.shiftKey) {
        if(ev.which == 37) {
            $(".selected.sticker").each(function(){
                $(this).context.dataset.rotation --;
                $(this).css("transform","rotate(" + $(this).context.dataset.rotation + "deg)");                });
        } 
        else if(ev.which == 39) {
            $(".selected.sticker").each(function(){
                $(this).context.dataset.rotation ++;
                $(this).css("transform","rotate(" + $(this).context.dataset.rotation + "deg)");
            });
        }    
    }
    else {
        if(ev.which == 37){
            $(".selected.sticker").each(function(){
                $(this).css("left","-=5px");
            });
        }else if(ev.which == 38){
            $(".selected.sticker").each(function(){
                $(this).css("top","-=5px");
            });
        }else if(ev.which == 39){
            $(".selected.sticker").each(function(){
                $(this).css("left","+=5px");
            });
        }else if(ev.which == 40){
            $(".selected.sticker").each(function(){
                $(this).css("top","+=5px");
            });
        }else if(ev.which == 187){
            $(".selected.sticker").each(function(){
                $(this).css("width","+=5px");
            });
        }else if(ev.which == 189){
            $(".selected.sticker").each(function(){
                $(this).css("width","-=5px");
            });
        }else if(ev.which == 8){
            $(".selected.sticker").each(function(){
                $(this).remove();
            });
        }
    }
    
}



//

/**
 * Created by Atiwong on 2/10/2016.
 */
var CameraTool = {
    element: undefined,
    video:undefined,
    status:"uninit",
    state: function(){
        return this.state;
    },
    initCameraOn : function(id) {
        this.element = $("#"+id);
        this.video = $("<video></video>").css({"width":"100%","height":"100%"});
        //this.video = $("<video></video>");
        this.element.addClass("camera").html("").append(this.video);
        navigator.getUserMedia
            = navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;

        if (navigator.getUserMedia) {
            navigator.getUserMedia(
                {audio: true, video: true},
                function (stream) {
                    CameraTool.video.attr("src", window.URL.createObjectURL(stream));
                    CameraTool.video[0].play();
                    CameraTool.status = "on";
                }, handleInitError);
        } else {
            handleInitError();
        }
        function handleInitError() {
            video.remove();
            element.append($("<div>Cannot initialize the video stream</div>"));
        }
    },
    captureTo: function(id){
        console.log("CAP");
        var canvas = $("#"+id);
        canvas[0].getContext("2d").drawImage(CameraTool.video[0],0,0,canvas.width(),canvas.height());
        this.status = "loaded";
        CameraTool.hideCamera();
    },
    hideCamera: function(){
        console.log("HIDE");
        this.element.html("");
        this.status = "uninit";
    }
};