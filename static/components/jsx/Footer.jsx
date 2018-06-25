

class SocialBtn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {classes: 'fab fa-4x fa-' + this.props.name}
    }
    render() {
        return [
            <a className="social-btn" href={this.props.link} target="_blank">
                <i className={this.state.classes}></i>
            </a>
        ]
    }
}

export default class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <SocialBtn name="medium" link="https://medium.com/@jdraiv"/>
                <SocialBtn name="github-square" link="https://github.com/jdraiv"/>
                <SocialBtn name="tumblr-square" link="https://jdraiv.tumblr.com/"/>
            </div>
        )
    }
}