
import Navbar from './Navbar.jsx';
import ProjectsShowcase from './Projects.jsx';
import EssaysShowcase from './Essays.jsx'
import Footer from './Footer.jsx'


class Homepage extends React.Component {
    render() {
        return [
            <Navbar />,
            <ProjectsShowcase />,
            <EssaysShowcase />,
            <Footer />
        ]
    }
}

ReactDOM.render(
    <Homepage />,
    document.getElementById('container')
);
