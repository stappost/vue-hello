// recuperare createApp da vue
const { createApp } = Vue;

createApp({
    
    // aggiungere in data il messaggio da voler stampare
    data(){
        return{
            text: "<h1>Hello World</h1>"
        }
    }
    // utiliziamo .mount per permettere di stampare nell'html
}).mount("#app")