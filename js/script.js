// recuperare createApp da vue
const { createApp } = Vue;

createApp({
    
    // aggiungere in data il messaggio da voler stampare
    data(){
        return{
            message: "Hello World",
            text: "<h1>Hello World</h1>",
            image: "nice.jpeg"
        }
    }
    // utiliziamo .mount per permettere di stampare nell'html
}).mount("#app")