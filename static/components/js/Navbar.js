

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {timeIcon: 'light'}
    }

    decideIcon() {
        let hour = new Date().getHours();
        console.log(hour);

        if (hour >= 16 || hour <= 4) {
            this.setState({timeIcon: 'static/icons/Moon.svg'})
        } else {
            this.setState({timeIcon: 'static/icons/Sun.svg'})
        }
    }

    componentWillMount() {
        this.decideIcon();
    }

    render() {
        return (
            React.createElement("div", {id: "navbar-container"}, 
                React.createElement("nav", null, 
                    React.createElement("ul", {id: "nav-ul"}, 
                        React.createElement("li", {className: "nav-item"}, React.createElement("a", {className: "nav-link", href: "#"}, "Projects")), 
                        React.createElement("li", {className: "nav-item", id: "nav-icon-container"}, 
                            React.createElement("img", {id: "nav-icon", src: this.state.timeIcon})
                        ), 
                        React.createElement("li", {className: "nav-item"}, React.createElement("a", {className: "nav-link", href: "#"}, "Essays"))
                    )
                )
            )
        )
    }
}

ReactDOM.render(
    React.createElement(Navbar, null),
    document.getElementById('container')
);