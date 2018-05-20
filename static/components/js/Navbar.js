

class Navbar extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            React.createElement("div", {id: "navbar"}, 
                React.createElement("h1", null)
            )
        )
    }
}

ReactDOM.render(
    React.createElement(Navbar, null),
    document.getElementById('navbar-container')
);