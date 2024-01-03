const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
//console.log(buttons);

buttons.forEach( function(btn){
    console.log(btn);
    btn.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id == 'grey'){
            body.style.backgroundColor = e.target.id
            body.style.color = 'black'
        }
        if(e.target.id == 'orange'){
            body.style.backgroundColor = e.target.id
            body.style.color = 'black'
        }
        if(e.target.id == 'green'){
            body.style.backgroundColor = e.target.id
            body.style.color = 'black'
        }
        if(e.target.id == 'black'){
            body.style.backgroundColor = e.target.id;
            body.style.color = 'white'
        }
    })
})