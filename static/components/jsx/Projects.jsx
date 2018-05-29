
class ProjectsShowcase extends React.Component {
    render() {
        return (
            <div id="projects-container">
                <h1>Test</h1>
                <div id="test"></div>
            </div>
        )
    }
}

ReactDOM.render(
    <ProjectsShowcase />,
    document.getElementById('projects-container')
);