function toggle() {
    // console.log("tee")
    var x = document.getElementById("myLink");
    var close = document.getElementById("close-btn");
    var menu = document.getElementById("menu-btn");
    if (x.style.display === "block") {

      x.style.display = "none";
      close.style.display = "none";
      menu.style.display = "block";
    } else {
      x.style.display = "block";
      close.style.display = "block";
      menu.style.display = "none";
    }
  }
  var home=document.getElementById('home-active')
  var about=document.getElementById('about-active')
  var skill=document.getElementById('skill-active')
  var experience=document.getElementById('experience-active')
  var work=document.getElementById('work-active')
  var blog=document.getElementById('blog-active')
  var contact=document.getElementById('contact-active')
  var mobile=document.getElementById('mobile')
  
  window.onscroll = function () { 
    "use strict";
    if (window.scrollY > 400 && window.scrollY <= 800 ) {
     
        about.style.display="block"
        home.style.display="none"
        skill.style.display="none"
        experience.style.display="none"
    experience.style.display="none"
    work.style.display="none"
    blog.style.display="none"
    contact.style.display="none"

        // myNav.classList.add("nav-colored");
    } else if(window.scrollY > 800 && window.scrollY <= 1600){
        skill.style.display="block"
        about.style.display="none"
        home.style.display="none"
    experience.style.display="none"
    experience.style.display="none"
    work.style.display="none"
    blog.style.display="none"
    contact.style.display="none"
        
    
} else if(window.scrollY > 1600 && window.scrollY <= 2400){
    skill.style.display="none"
    about.style.display="none"
    home.style.display="none"
    experience.style.display="block"
    work.style.display="none"
    blog.style.display="none"
    contact.style.display="none"
    

} else if(window.scrollY > 2400 && window.scrollY <= 3000){
    skill.style.display="none"
    about.style.display="none"
    home.style.display="none"
    experience.style.display="none"
    work.style.display="block"
    blog.style.display="none"
    contact.style.display="none"
    
}else if(window.scrollY > 3000 && window.scrollY <= 3400){
    skill.style.display="none"
    about.style.display="none"
    home.style.display="none"
    experience.style.display="none"
    work.style.display="none"
    blog.style.display="block"
    contact.style.display="none"
    
}
else if(window.scrollY > 3400 && window.scrollY <= 4000){
    skill.style.display="none"
    about.style.display="none"
    home.style.display="none"
    experience.style.display="none"
    work.style.display="none"
    blog.style.display="none"
    contact.style.display="block"

    
}
    else {
        home.style.display="block"

        about.style.display="none"

        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};