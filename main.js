
class Planet extends React.Component {
    render() {
        const link = `https://en.wikipedia.org/wiki/${this.props.name}_planet)`

        return React.createElement(
            'a', 
        { href: link, target: "_blank" },
        [
         this.props.name,
         ' | '
        ]
        )
    }
}

class PlanetContainer extends React.Component {
    render() {
        const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Neptune', 'Uranus', 'Pluto'].map( name => {
            return React.createElement(Planet, { name })
        })
            return React.createElement(
                'div',
                null,
                planets
            )
    }
}
const MyComponent = React.createElement(PlanetContainer, { name: 'Mars'})


ReactDOM.render(
    MyComponent,
    document.getElementById('app')
)