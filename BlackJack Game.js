let player = {
    name : "Parshwa" ,
    chips : 200
}
let cards = []
let sum = 0 
let IsBlackjack = false
let IsAlive = false
let message = ""
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let CardEl = document.querySelector("#Card-el")
let PlayerEl = document.querySelector("#player-el")
PlayerEl.textContent = player.name + " :" + " $" + player.chips

function StartGame(){
    let Firstcard = getrandomcard()
    let Secondcard = getrandomcard()
    cards = [Firstcard,Secondcard]
    sum = Firstcard + Secondcard
    IsAlive = true
    renderGame()
}

function renderGame(){
    if(sum<21){
        message ="Do you want to draw a new card?"
    }
    else if(sum===21){
        message = "congratulation! You have got  Blackjack!"
        IsBlackjack = true
    }
    else if(sum>21){
        message = "You are out of the game!"
        IsAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = " sum : " + sum
    CardEl.textContent = "cards: " // doubt
    for(i=0;i<cards.length;i++){
        CardEl.textContent += " " + cards[i]
    } 
}

function getrandomcard(){
    let Cardnumber = Math.floor(Math.random()*13) + 1
    console.log(Cardnumber)
    if(Cardnumber === 1){
         return 11 ;
    }
    else if (Cardnumber > 10){
         return 10 ; 
    }
    return Cardnumber;
}

function NewCard(){
    if(IsAlive === true && IsBlackjack === false){
        console.log("Drawing a new card")
        let newCard = getrandomcard()
        sum += newCard
        cards.push(newCard)
        renderGame() 
    }
}

