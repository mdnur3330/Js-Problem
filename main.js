
function cashOut( money ) {
    if(typeof money !== 'number' || money <0 || arguments.length > 1){
        return "Invalid";
    }
    const  cashoutCost = money * 1.75 / 100;
    return cashoutCost;
}



function  validEmail( email ) {
 
    if(typeof email !== 'string' || email == ' ' || email == '' ||  arguments.length > 1){
        return "Invalid" 
    }
   
    const notAloudChars =  ".-_+@";
    const spsChar = email.indexOf('@')

    if(notAloudChars.includes(email.charAt(0)) || 
    email.includes(' ') || spsChar === -1 || email.lastIndexOf('@') !== spsChar || 
    !email.endsWith('.com')){
        return false;
    }
    return true;
}



    function  electionResult( votes ) {
        if(!Array.isArray(votes) || arguments.length > 1){
            return "Invalid";
        }
        let mangoBox = [];
        let bananaBox = [];
    
        for(let vote of votes){
            if(typeof vote !== 'string'){
                return "Invalid";
            }else if(vote === 'mango'){
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


function  isBestFriend( f1,f2 ) {

    if(typeof f1 !== 'object' || typeof f2 !== 'object'  || Object.keys(f1).length < 3|| Object.keys(f2).length < 3 || Array.isArray(f1) || Array.isArray(f2) || arguments.length > 2){
         return "Invalid";
     }else if(f1.bestFriend === f2.roll && f2.bestFriend === f1.roll){
         return true;
     }
     else{
         return false;
     }
 }




function  calculateWatchTime( times ) {
    if(!Array.isArray(times) || arguments.length > 1){
        return "Invalid";
    }
    let second = 0;
    for(let time of times){
        if(typeof(time) !== 'number'){
            return  "Invalid" 
        }
        second += time;
    }

    let minutes = second / 60;
    let hours = Math.floor(minutes / 60)
    let totalMinutes = Math.floor(minutes % 60)
    let totalSecond = second % 60 ;

    return { hour: hours , minute: totalMinutes , second: totalSecond } 
}           


