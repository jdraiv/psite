
class ProjectsShowcase extends React.Component {
    render() {
        return (
            React.createElement("div", {id: "projects-container"}, 
                React.createElement("h1", null, "Test"), 
                React.createElement("div", {id: "test"})
            )
        )
    }
}

ReactDOM.render(
    React.createElement(ProjectsShowcase, null),
    document.getElementById('projects-container')
);