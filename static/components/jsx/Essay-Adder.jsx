
function LanguagesSelect(props) {
    const select = props.langs.map((lang) => {
        return <option value={lang}>{lang}</option>
    })

    return <select className="select-input">{select}</select>
}

class TranslationBtn extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="btns-box">
]                <button type="button" id="translation-btn" className={this.props.btnState} onClick={this.props.click}>Translation</button>
            </div>
        )
    }

}

class Translation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {languages: ['EN', 'ES', 'IT']}
    }
    render () {
        return (
            <div className="adder-box">
                <input className="inputs" name="title" placeholder="Original Title" />
                <input className="inputs" name="translated-title" placeholder="Translated Title" />
                <input className="inputs" name="key" placeholder="Key" />
                <LanguagesSelect langs={this.state.languages} />
            </div>
        )
    }
}

class NormalEssay extends React.Component {
    render() {
        return (
            <div className="adder-box">
                <input className="inputs" name="title" placeholder="Title" />
                <input className="inputs" name="image" placeholder="Image" />
                <input className="inputs" name="key" placeholder="Key" />
            </div>
        )
    }
}

export default class EssayAdder extends React.Component {

    constructor(props) {
        super(props);

        this.state = {translation: false, btnState: 'btn-inactive'}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        if (this.state.btnState == 'btn-active'){
            this.setState({btnState: 'btn-inactive'})
        } else {
            this.setState({btnState: 'btn-active'})
        }
    }

    render() {
        return [
            <TranslationBtn click={this.handleClick} btnState={this.state.btnState}/>,
            <Translation />
        ]
    }
}

