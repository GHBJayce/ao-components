import Comment from './comment/index.js'

const components = [
    Comment
]

const install = function (app) {
    components.forEach(component => {
        app.component(component.name, component)
    })
}

const AoComponents = {
    version: '0.0.2',
    install,
    Comment
}

if (typeof window !== 'undefined') {
    window.AoComponents = AoComponents
}

export default AoComponents