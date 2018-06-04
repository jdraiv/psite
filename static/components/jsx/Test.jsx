
import Hello from './Hello.jsx'

class Test extends React.Component {
    render() {
        return <Hello />
    }
}

ReactDOM.render(
    <Test />,
    document.getElementById('test')
);