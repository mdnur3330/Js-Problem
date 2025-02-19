
/*function signature/sample */
function  electionResult( votes ) {
    if(!Array.isArray(votes)){
        return "Invalid";
    }
    let mangoBox = [];
    let bananaBox = [];

    for(let vote of votes){
        if(vote === 'mango'){
            mangoBox.push(vote)
        }else if(vote === 'banana'){
            bananaBox.push(vote)
        }
    }

   if(mangoBox.length > bananaBox.length){
    return "Mango";
   }else if(mangoBox.length < bananaBox.length){
    return "Banana";
   }else if(mangoBox.length === bananaBox.length){
    return "Draw";
   }
    
}
const totefl = electionResult(['oeirout','orut','ert8u9','rioeut'])
console.log(totefl);


