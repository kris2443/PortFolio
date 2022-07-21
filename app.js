// console.log("hello world")
// $(document).ready( function(){
//     $(window).scroll( function(){
//         if(this.scrollY > 20){
//             $('.header').addClass("sticky");
//             console.log("helloo world")
//         }
//         else{
//             $('.navbar').removeClass("sticky");
//             console.log("remove stkci")
//         }
//     })
// })

const header = document.querySelector(".header");

window.onscroll = function onScrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};



// About Me
// const aboutMe = document.querySelector('.aboutMe');
// document.getElementById('aboutMe').onclick(()=>{
   
// })


const type = new Typed(".auto-text", {
  strings: [
    "<span>Web Developer</span>",
    "<span>Student</span>",
    "<span>Video Editing</span>",
  ],
  typeSpeed: 60,
  backSpeed: 10,
  loop: true,
});


const Abouttyping = new Typed(".introtext", {
  strings: [
    "<span>I'm a Web Developer</span>",
    "<span>I know Video Editing</span>",
    "<span>I'm a Student</span>",
  ],
  typeSpeed: 60,
  backSpeed: 10,
  loop: true,
});

