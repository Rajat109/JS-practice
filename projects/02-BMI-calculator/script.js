const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `<span> Enter the valid height ${height} </span> `
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `<span> Enter the valid weight ${weight} </span> `
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        
        if(bmi < 18.6){
            results.innerHTML = `<span> Your BMI is ${bmi} and you are under-weight</span>`

            // below code not working
            
            // const div = document.createElement('div')
            // const text = document.createTextNode('You are under-weight')
            // div.appendChild(text)
            // document.body.appendChild(div)
        }
        
        
    }
})