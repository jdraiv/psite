
import Navbar from './Navbar.jsx';

class Editor extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
            </div>
        )
    }
}

ReactDOM.render(
    <Editor />,
    document.getElementById('container')
);