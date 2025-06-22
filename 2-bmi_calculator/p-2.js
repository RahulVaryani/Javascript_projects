const forms = document.querySelector('form')
forms.addEventListener('submit' , function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#Height').value)
    const weight = parseInt(document.querySelector('#Weight').value)
    const result = document.querySelector('#results')

    if((height == '') || (height < 0 ) || isNaN(height)){
        result.innerHTML = `Please put a valid value ${height}`;
    }
    else if ((weight == '') || (weight < 0 ) || isNaN(height)){
        result.innerHTML = `Please put a valid value ${weight}`;
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
            result.innerHTML = `<span>${bmi}</span>`
    }
})