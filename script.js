//Task 1
function showMessage() {
    alert("Hello, JavaScript!");
}

//Task 2 #1 (audioplayer)
function audioOver(){
    var text = document.getElementById("audioPlayer").style.boxShadow = "10px 20px 30px #5F525B";
}
function audioOut(){
    var text = document.getElementById("audioPlayer").style.boxShadow = "";
}

//Task 3 #1 (socialmedia iconer)
function fbOver(){
    var text = document.getElementById("fbImg").style.boxShadow = "0px 0px 20px white";
}
function fbOut(){
    var text = document.getElementById("fbImg").style.boxShadow = "";
}
function igOver(){
    var text = document.getElementById("igImg").style.boxShadow = "0px 0px 20px white";
}
function igOut(){
    var text = document.getElementById("igImg").style.boxShadow = "";
}
//Task 3 #2 (bottom-links)
//Om oss
function omOssOver(){
    var text = document.getElementById("omOss").style.fontWeight = "bold";
}
function omOssOut(){
    var text = document.getElementById("omOss").style.fontWeight = "";
}
//Kontakta oss
function KontaktaOssOver(){
    var text = document.getElementById("kontaktaOss").style.fontWeight = "bold";
}
function KontaktaOssOut(){
    var text = document.getElementById("kontaktaOss").style.fontWeight = "";
}
//FAQ
function FAQOver(){
    var text = document.getElementById("FAQ").style.fontWeight = "bold";
}
function FAQOut(){
    var text = document.getElementById("FAQ").style.fontWeight = "";
}
//Köpvillkor
function kopvillkorOver(){
    var text = document.getElementById("kopvillkor").style.fontWeight = "bold";
}
function kopvillkorOut(){
    var text = document.getElementById("kopvillkor").style.fontWeight = "";
}
//Tips & råd
function tipsOver(){
    var text = document.getElementById("tips").style.fontWeight = "bold";
}
function tipsOut(){
    var text = document.getElementById("tips").style.fontWeight = "";
}

//Task 4 #1
$(document).ready(function(){
    $(".search-bar").focus(function(){
        $(".search-bar").css(
            "background-color", "white"
        );
    });
    $(".search-bar").blur(function(){
        $(".search-bar").css(
            "background-color", ""
        );
    });
});
//Task 4 #2
$(document).ready(function(){
    $("#email").hover(function(){
        $("#email").css({
            "box-sizing" : "border-box",
            "border-style" : "solid",
            "border-color" : "black",
            "border-width" : "2px",
            "border-radius" : "2px",
            "height" : "21px"
        });
    },
    function(){
        $("#email").css({
            "border-style" : "solid",
            "border-color" : "grey",
            "border-width" : "1px",
            "height" : "21.5px",
            "width" : "170px"
        });
      });
});
