window.onload = function(){
    var vk = document.getElementById("vk");
    var instagram = document.getElementById("instagram");
    var github = document.getElementById("github");
    var gmail = document.getElementById("gmail");
    var text = document.getElementById("txtx");

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        text.innerHTML = "DEAD WORLD is an international creative community of designers, beatmakers and performers founded in 2020."
    }
    
    else{
        vk.onclick = function(){
            open("https://vk.com/deadworldinc");
        }
        instagram.onclick = function(){
            open("https://www.instagram.com/deadworld.inc");
        }
        github.onclick = function(){
            open("https://github.com/deadworldinc/deadworldinc.github.io");
        }
        gmail.onclick = function(){
            open("https://gmail.com/");
        }
    }
}
