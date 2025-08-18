const rect = document.querySelector('.rect')

rect.addEventListener('mousemove' , function(e){
    const rectLoc = rect.getBoundingClientRect()
    const insiderect = e.clientX - rectLoc.left

    if(insiderect < rectLoc.width/2){
        const redColor = gsap.utils.mapRange(0 , rectLoc.width/2 , 255 , 0 , insiderect);
        gsap.to(rect , {
            backgroundColor:`rgb(${redColor} , 0 , 0)`,
            ease : Power4
        })
    }
    else{
        const blueColor = gsap.utils.mapRange(rectLoc.width/2, rectLoc.width , 0 , 255 , insiderect);
        gsap.to(rect , {
            backgroundColor:`rgb(0, 0 , ${blueColor} )`,
            ease : Power4
        })
    }
})

rect.addEventListener('mouseleave' , function(e){
    gsap.to(rect , {
        backgroundColor : "gray",
    })
})