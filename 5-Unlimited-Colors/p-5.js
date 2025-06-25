const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color+= hex[Math.floor(Math.random() *16 )]
    }
    return color
}

let interval;
const color = document.querySelector('.con')
document.querySelector('#btnstart').addEventListener('click' , function(e){

    const colorChange = function(){
   color.style.backgroundColor = randomColor()
    }

   interval = setInterval( colorChange, 1000)
})
document.querySelector('#btnstop').addEventListener('click' , function(e){

    clearInterval(interval)
})