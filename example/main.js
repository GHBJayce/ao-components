import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import moment from 'moment'
import components from '../packages/components/index'

const app = createApp(App)
app.use(moment)
app.use(Antd)
app.use(components)
app.mount('#app')
