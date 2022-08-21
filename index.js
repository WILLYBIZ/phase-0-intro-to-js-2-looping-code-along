// Code your solutions in this file

// function writeCards(cards,event) {
    

//     let  newCard = [];
//         for (let i = 0; i < cards.length; i++) {
//       newCard.push(`Thank you, ${cards[i]}, for the wonderful ${event} surprise  gift!`);
//         }
        
//         return newCard;

//         }
    
//     function countDown(int){
//         while(int>=0){
//             console.log(int);
//             int--;
//         }
//     }

 
function writeCards(names, event) {
    let newCard = [];
    for(let i = 0; i < names.length; i++) {
        newCard.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return newCard;
}

function countDown(int) {
    while(int  >= 0) {
        console.log(int);
        int --;
    }
}


