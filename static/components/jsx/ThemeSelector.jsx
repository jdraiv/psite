
class ThemeSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTheme: 'dark',
            darkThemeVars: {'main-color': '141726', 'text-color': 'white'}
        }
    }

    decideTheme() {
        let hour = new Date().getHours();

        if (hour >= 18 && hour <= 4) {
            this.setState({currentTheme: 'dark'})
        }
        this.setState({currentTheme: 'light'})
    }

    setDarkTheme() {
        let test = this.state.darkThemeVars;

        if (this.state.currentTheme === 'dark') {
            for (const [key, value] of Object.entries(this.state.darkThemeVars)) {
                console.log("Dark theme selected.")
                document.documentElement.style.setProperty(`--${key}`, `#${value}`)
            }
        }
    }

    componentWillMount() {
        this.decideTheme();
    }

    render() {
        return <button onClick={this.setDarkTheme()}>Click Me</button>
    }
}

ReactDOM.render(
    <ThemeSelector />,
    document.getElementById('theme-container')
);