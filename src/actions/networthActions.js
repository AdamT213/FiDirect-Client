export function calculateNetWorth(){
   return function(dispatch, getState){ 
       dispatch({type: 'CALCULATE_NET_WORTH', payload: getState()})
   }
 }