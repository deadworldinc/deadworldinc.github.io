window.onload = function () {
    var rightbtn = document.getElementById("right");
    var i = 0;
    
    var soulburn = document.getElementById("soulburn");
    var txxxc = document.getElementById("txxxc");
    var revnack = document.getElementById("revnack");
    var pristup = document.getElementById("pristup");
    var rawstar = document.getElementById("rawstar");
    var emowhip = document.getElementById("emowhip");
    var godofblood = document.getElementById("godofblood");
    var cloroxcide = document.getElementById("cloroxcide");
    
    rightbtn.onclick = function(){
        if (i!=1){
            $("#row1").fadeOut(1000);
            setTimeout(() => $("#row2").fadeIn(900),1000);
            i = 1;
        }
        else{
            $("#row2").fadeOut(1000);
            setTimeout(() => $("#row1").fadeIn(900),1000);
            i = 0;
        }
    }

    soulburn.onclick = function(){
        open("https://www.instagram.com/deadworld.inc");
    }
    txxxc.onclick = function(){
        open("https://www.instagram.com/vvs_spike/");
    }
    revnack.onclick = function(){
        open("https://www.instagram.com/revnack/");
    }
    pristup.onclick = function(){
        open("https://www.instagram.com/fuckingpristup/");
    }
    rawstar.onclick = function(){
        open("https://www.instagram.com/rawstarsdead/");
    }
    emowhip.onclick = function(){
        open("https://www.instagram.com/emowhipp/");
    }
    godofblood.onclick = function(){
        open("https://www.instagram.com/godoftheblood/");
    }
    cloroxcide.onclick = function(){
        open("https://www.instagram.com/cloroxcide/");
    }
}
