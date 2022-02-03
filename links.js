window.onload = function(){
    var vk = document.getElementById("vk");
    var instagram = document.getElementById("instagram");
    var github = document.getElementById("github");
    var gmail = document.getElementById("gmail");

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