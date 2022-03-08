const
 buttonPrev = document.querySelector('.button_prev'),
 buttonNext = document.querySelector('.button_next'),
 packs = document.querySelectorAll('.pack'),
 carousel = document.querySelector('.carousel')

let index = 0



const activeCard =  (n) =>{

for(let pack of packs){    
pack.classList.remove('active')
}

packs[n].classList.add('active')


}


const nextCard = () =>{

if(index === packs.length - 1){
    index = 0
    activeCard(index)
}

else{
    index++
    activeCard(index)
}

}

buttonNext.addEventListener('click', nextCard)


const prevCard = () =>{

if(index === 0){
    index = packs.length -1
    activeCard(index)
}

else{
    index--
    activeCard(index)
}


}


buttonPrev.addEventListener('click', prevCard)
