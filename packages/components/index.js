import Comment from './comment/index.js'
import Tab from './tab/index.js'
import Preview from './preview/index.js'
import Tree from './tree/index.js'

const components = [
    Comment,
    Tab,
    Preview,
    Tree,
]

const install = function (app) {
    components.forEach(component => {
        app.component(component.name, component)
    })
}

const AoComponents = {
    version: '0.1.2',
    install,
    Comment,
    Tab,
    Preview,
    Tree,
}

if (typeof window !== 'undefined') {
    window.AoComponents = AoComponents
}

export default AoComponents