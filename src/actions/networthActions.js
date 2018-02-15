export function calculateNetWorth(){
   return function(dispatch){
       dispatch({type: 'CALCULATE_NET_WORTH'})
   }
 }