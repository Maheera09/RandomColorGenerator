const btn = document.querySelector('#btn')
const ColorID = document.querySelector('#colorID')
const body = document.querySelector('#body')
const hex = '0123456789ABCDEF'
let color = '#'


btn.addEventListener('click', ()=>{
    for (let i=0; i<6; i++){
        color = color + hex[Math.floor(Math.random()*16)]
    }
    body.style.backgroundColor = `${color}`
    ColorID.innerHTML = `${color}`
    color='#'
})

