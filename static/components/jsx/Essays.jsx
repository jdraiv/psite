
import Navbar from './Navbar.jsx';

// Fix title alignment bottom


function Essays(props) {
    const data = props.data;

    if (typeof data != "undefined") {
        const essays = data.map((essay) => {
            return (
                <div className="essay-item">
                    <img className="essay-image" src={essay['image']}></img>
                    <a class="essay-title" href="#">{essay['title']}</a>
                </div>
            )
        });
        return <div id="essays-box">{essays}</div>
    } else {
        return null
    }
}

class EssaysShowcase extends React.Component {
    constructor(props) {
        super(props)
        this.state = {essays: []}
    }

    getEssays() {
        fetch('/get_essays')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            this.setState({essays : data})
            console.log(this.state.essays);
        })
    }

    componentWillMount() {
        this.getEssays();
    }

    render() {
        return [
            <Navbar />,
            <div id="essays-container">
                {
                    <Essays data={this.state.essays} />
                }
            </div>
        ]
    }
}

ReactDOM.render(
    <EssaysShowcase />,
    document.getElementById('container')
);