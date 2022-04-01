import Comment from './comment/index.js'
import Tabs from './tabs/index.js'

const components = [
    Comment,
    Tabs
]

const install = function (app) {
    components.forEach(component => {
        app.component(component.name, component)
    })
}

const AoComponents = {
    version: '0.0.2',
    install,
    Comment,
    Tabs
}

if (typeof window !== 'undefined') {
    window.AoComponents = AoComponents
}

export default AoComponents