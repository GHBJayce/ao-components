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
    install,
    Comment
}

if (typeof window !== 'undefined') {
    window.AoComponents = AoComponents
}

export default AoComponents