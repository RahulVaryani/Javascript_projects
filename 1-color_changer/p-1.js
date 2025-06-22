const boxes = document.querySelectorAll('.Box')
const body = document.querySelector('body')

boxes.forEach(function(Box){
    Box.addEventListener('click' , function(e){
        // if(e.target.id == 'grey'){
        //     body.style.backgroundColor = e.target.id;
        // }
        let choose = e.target.id;
        switch(choose){
            case 'grey' : body.style.backgroundColor = e.target.id  
            break;
            case 'pink' : body.style.backgroundColor = e.target.id  
            break;
            case 'blue' : body.style.backgroundColor = e.target.id  
            break;
            case 'yellow' : body.style.backgroundColor = e.target.id  
            break;
            default : 
            console.log('NULL');
        }
    })
})