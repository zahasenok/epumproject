 export function getQueryVariable(variable) {
     const query = window.location.search.substring(1);
     const vars = query.split('&');
     for (var i = 0; i < vars.length; i++) {
         const pair = vars[i].split('=');
         if (decodeURIComponent(pair[0]) == variable) {
             return decodeURIComponent(pair[1]);
         }
     }
     return undefined;
 }