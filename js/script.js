
const { createApp } = Vue;

createApp({
    data() {
        return {
            titolo: 'Hello Vue!',
            color: 'text-white',
            image: './img/web-developer-image.jpg',
        }
    },
}).mount('#app');  