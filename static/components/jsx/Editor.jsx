
import Navbar from './Navbar.jsx';
import EssayAdder from './Essay-Adder.jsx';

class Editor extends React.Component {
    render() {
        return [
            <Navbar />,
            <EssayAdder />
        ]
    }
}

ReactDOM.render(
    <Editor />,
    document.getElementById('container')
);