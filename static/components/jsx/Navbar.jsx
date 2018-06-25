

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {timeIcon: 'light'}
    }

    decideIcon() {
        let hour = new Date().getHours();

        if (hour >= 18 || hour <= 4) {
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
            <div id="navbar-container">
                <nav>
                    <ul id="nav-ul">
                        <li className="nav-item"><a className="nav-link" href="#projects-section">Projects</a></li>
                        <li className="nav-item" id="nav-icon-container">
                            <img id="nav-icon" src={this.state.timeIcon}/>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="#essays-section">Essays</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}