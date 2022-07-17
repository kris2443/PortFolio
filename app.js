console.log("hello world")
$(document).ready( function(){
    $(window).scroll( function(){
        if(this.scrollY > 20){
            $('.header').addClass("sticky");
            console.log("helloo world")
        }
        else{
            $('.navbar').removeClass("sticky");
            console.log("remove stkci")
        }
    })
})