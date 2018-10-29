
class Planet extends React.Component {
    render() {
        const link = `https://en.wikipedia.org/wiki/${this.props.name}_planet)`

        return React.createElement('a', { href: link, target: "_blank" }, this.props.name)
    }
}

class PlanetContainer extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            [   "test",
                React.createElement('br'),
                React.createElement(Planet, {name: 'Earth'}),
                React.createElement('br'),
                React.createElement(Planet, {name: 'Mars'}),
                React.createElement('br'),
                React.createElement(Planet, {name: 'Pluto'})
            ]
        )
    }
}
const MyComponent = React.createElement(PlanetContainer, { name: 'Mars'})


ReactDOM.render(
    MyComponent,
    document.getElementById('app')
)