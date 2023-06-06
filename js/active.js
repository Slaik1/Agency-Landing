document.addEventListener('DOMContentLoaded',() =>{
const header = document.querySelector('.header')
const headerCounter = document.querySelector('.header__counter').children
const imageArray = ['url(img/start-photo.jpg)','url(img/mountains.jpg)','url(img/sun.jpg)']
let active = 0

const slider ={
    
}

for(let i=0;i<headerCounter.length;i++){
    slider[i]={
        elem:headerCounter[i],
        url:imageArray[i]
    }
}
sliderLength=Object.keys(slider).length

function main(){
    setBackground(active)
    setCounter()
}

function clearStyles(){
    for(key in slider){
        slider[key].elem.className=''
    }
}

function setCounter(){
    clearStyles()
    slider[active].elem.className='active'
    active+=1
    active=active % sliderLength
}

function setBackground(num){
    header.style.backgroundImage=slider[num].url
}

for(let i=0;i<sliderLength;i++){
    slider[i].elem.onclick = () =>{
        setBackground(i)
        clearStyles()

        slider[i].elem.className='active'
        active=i

        clearInterval(interval)
        interval=setInterval(main,4000)
    }
}

let interval=setInterval(main,4000)
})