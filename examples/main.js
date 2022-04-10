import { createApp } from 'vue'

import App from './App.vue'


import '../components/css/index.scss'
import Card from '../components/lib/index.js'


const app  =  createApp(App) 


app.use(Card)

app.mount('#app')
