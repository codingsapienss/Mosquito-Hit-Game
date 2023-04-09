let hitCount = 0
let btn = document.querySelector('#btn')
let score = document.querySelector('#score')
let isGameOn = false

function startGame(){
    isGameOn = true
    hitCount= 0
    score.innerText = `Score : ${hitCount}`
    let mosquito = document.querySelector("#mosquito")
    btn.setAttribute('style', 'display:none')
    let time = setInterval(()=>{

        let i = Math.floor(Math.random()*75)
        let j = Math.floor(Math.random()*72)
        mosquito.style.left = i+'vw'
        mosquito.style.top = j+'vh'
        
    }, 900)

    setTimeout(()=>{
        clearInterval(time)
        isGameOn = false
        mosquito.style.top = 0 
        mosquito.style.left = 0
        btn.textContent = 'Game Over! Restart'
        btn.setAttribute('style', 'display:block')
    }, 60000)
}


function hitMosquio (){
   if(isGameOn){
    hitCount++
    score.innerText = `Score : ${hitCount}`
   }
}