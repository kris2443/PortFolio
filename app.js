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


const header = document.querySelector('.header');

window.onscroll = function scroolll() {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
        header.classList.add('sticky');
    else header.classList.remove('sticky');
}


new Typed('.auto-text',{
    strings : [
        "<span>Web developer</span>",
        "<span>Student</span>",
    ],
    topSpeed : 80,
    backSpeed:20,
    loop:true,
})

new Typed('.introtext',{
    strings : [
        "<span>Web developer</span>",
        "<span>Student</span>",
    ],
    topSpeed : 80,
    backSpeed:20,
    loop:true,
})