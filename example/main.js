import { createApp } from 'vue'
import App from './preview.vue'
import Antd from 'ant-design-vue'
import moment from 'moment'
import Viewer from 'v-viewer'
import axios from 'axios'
import VueAxios from 'vue-axios'
import components from '../packages/components/index'

const app = createApp(App)
app.use(moment)
app.use(Antd)
app.use(components)
app.use(Viewer)
app.use(VueAxios, axios)
app.mount('#app')
