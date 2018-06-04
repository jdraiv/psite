
import Navbar from './Navbar.jsx';
import ProjectsShowcase from './Projects.jsx';


class Homepage extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <ProjectsShowcase />
            </div>
        )
    }
}

ReactDOM.render(
    <Homepage />,
    document.getElementById('container')
);
