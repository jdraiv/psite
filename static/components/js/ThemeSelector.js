
class ThemeSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTheme: 'dark',
            darkThemeVars: {'main-color': '141726', 'text-color': 'white'},
            lightThemeVars: {'main-color': 'white', 'text-color': '000'}
        }
    }

    decideTheme() {
        let hour = new Date().getHours();

        if (hour >= 16 && hour <= 4) {
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
    
    setLightTheme() {

    }

    componentWillMount() {
        this.decideTheme();
    }

    render() {
        return (
            React.createElement("button", {onClick: this.setDarkTheme()}, "Click Me"),
            React.createElement("button", {onClick: this.setLightTheme()}, "Light")
        )
    }
}

ReactDOM.render(
    React.createElement(ThemeSelector, null),
    document.getElementById('theme-container')
);