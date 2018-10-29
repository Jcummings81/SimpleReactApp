const MyComponent = React.createElement('h1', null, 'Hello World')

class Planet extends React.Component {
    render() {
        const link = `https://en.wikipedia.org/wiki/${this.props.name}_planet)`

        return React.createElement('a', { href: link, target: "blank" }, this.props.name)
    }
}

ReactDOM.render(
    MyComponent,
    document.getElementById('app')
)