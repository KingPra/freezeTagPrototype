 module.exports = function won (teams) {

     for(let i = 0; i < teams.length; i++) {
         let frozen = teams[i].isFrozen;
         
         // need to look at these lines, currently registers false
         let runners = teams[i].flag;
         let chasers = teams[i].flag;
         console.log(teams[i].flag);
      if (teams[i].team === 'runners' && frozen !== false || teams[i].team === 'chasers' && chasers === true) {
         return 'chasers won'; 
     } else {
         if (teams[i].team === 'runners' && runners === true) {
             return 'runners won';
         } else {
             return 'no one has won yet';
         }
     }
     }
 }