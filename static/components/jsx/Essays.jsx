
import Navbar from './Navbar.jsx';


function imageHeader(str) {
    let initialLink = str.substring(str.search('src=') + 5)
    return initialLink.substring(0, initialLink.search('"'))
}


class Essay extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="essay-item">
                <img className="essay-image" src={this.props.image}></img>
                <a className="essay-title" href={this.props.link} target="_blank">{this.props.title}</a>
            </div>
        )
    }
}


export default class EssaysShowcase extends React.Component {
    constructor(props) {
        super(props)
        this.state = {essays: []}
    }

    getEssays() {
        const url = "https://api.tumblr.com/v2/blog/jdraiv.tumblr.com/posts/text?api_key=fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4&notes_info=true";

        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            this.setState({essays: data['response']['posts']});
        })
    }

    componentWillMount() {
        this.getEssays();
    }

    render() {
        const essays = this.state.essays.map((essay) => {
            return (
                <Essay title={essay['title']} link={essay['short_url']} image={imageHeader(essay['reblog']['comment'])} />
            )
        })
        return [
            <section id="essays-section">
                <h1 id="essays-section-header">Essays</h1>
                <div id="essays-box">{essays}</div>
            </section>
        ]
    }
}

/*
ReactDOM.render(
    <EssaysShowcase />,
    document.getElementById('container')
);
*/