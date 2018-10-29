
class Planet extends React.Component {
    render() {
        const link = `https://en.wikipedia.org/wiki/${this.props.name}_planet)`

        return React.createElement('a', { href: link, target: "blank" }, this.props.name)
    }
}

const MyComponent = React.createElement(Planet, { name: 'Mars'}, 'Hello World')


ReactDOM.render(
    MyComponent,
    document.getElementById('app')
)