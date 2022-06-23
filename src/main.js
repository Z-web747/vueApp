import { createApp } from 'vue'
import App from './App.vue'
console.log(import.meta.env)
console.log(process.env.NODE_ENV);
createApp(App).mount('#app')
