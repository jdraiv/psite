
import Navbar from './Navbar.jsx';


function getEssayTile() {
    const url = window.location.href.toString();

    return url.substring(url.search("s/") + 2, url.length);
}

function Essay(props) {
    if (typeof props.data != undefined) {
        return <h1>Hello</h1>
    }
}

class EssayContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {title: getEssayTile(), essayData: undefined}
    }

    getEssay() {
        fetch('/get_essays')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
    }

    componentWillMount() {
        this.getEssay();
    }

    render() {
        return [
            <Navbar />,
        ]
    }
}

ReactDOM.render(
    <EssayContainer />,
    document.getElementById('container')
);