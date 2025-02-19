
// /*function signature/sample */
// function  electionResult( votes ) {
//     if(!Array.isArray(votes)){
//         return "Invalid";
//     }
//     let mangoBox = [];
//     let bananaBox = [];

//     for(let vote of votes){
//         if(vote === 'mango'){
//             mangoBox.push(vote)
//         }else if(vote === 'banana'){
//             bananaBox.push(vote)
//         }
//     }

//    if(mangoBox.length > bananaBox.length){
//     return "Mango";
//    }else if(mangoBox.length < bananaBox.length){
//     return "Banana";
//    }else if(mangoBox.length === bananaBox.length){
//     return "Draw";
//    }
    
// }
// const totefl = electionResult(['oeirout','orut','ert8u9','rioeut'])
// console.log(totefl);



function  calculateWatchTime( times ) {
    if(!Array.isArray(times) || isNaN(times)){
        return "Invalid";
    }
    let second = 0;
    for(let time of times){
        second += time;
    }

    let minutes = second / 60;
    let hours = Math.floor(minutes / 60)
    let totalMinutes = Math.floor(minutes % 60)
    let totalSecond = second % 60 ;

    return { hour: hours , minute: totalMinutes , second: totalSecond } 
}           

 const nr = calculateWatchTime([100, 99, 119, 300])
 console.log(nr);
 




 