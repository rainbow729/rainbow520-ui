import { createApp } from 'vue'

import App from './App.vue'



import 'rainbow520-ui/dist/css/index.css'
import Card from 'rainbow520-ui'



const app  =  createApp(App) 

app.use(Card)

app.mount('#app')