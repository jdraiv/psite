

function ProjectsRender(props) {
    const validData = props.data;

    if (typeof validData != 'undefined') {
        const projects = validData.map((project) => {
            return React.createElement("button", {className: "project-link", onClick: () => window.open(project['link'], "_blank")}, project['name'])
        })
        return React.createElement("div", null, projects)
    } else{
        return null
    }
}


class ProjectsShowcase extends React.Component {
    constructor(props) {
        super(props);

        this.state = {projects: [], projectCategory: 'Web-Dev'}

        this.componentWillMount = this.componentWillMount.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    getProjects() {
        fetch('/projects')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            this.setState({projects: data, projectCategory: Object.keys(data)[0]})
        })
    }

    componentWillMount() {
        this.getProjects();
    }

    onClick(event) {
        console.log(event.target.name)
        this.setState({projectCategory: event.target.name})
    }

    render() {
        return (
            React.createElement("div", {id: "projects-showcase"}, 
                React.createElement("div", {id: "categories-container"}, 
                    
                        Object.keys(this.state.projects).map((key) => {
                            return React.createElement("button", {id: "category-btn", onClick: this.onClick, name: key}, key)
                        })
                    
                ), 
                React.createElement("div", {id: "projects-container"}, 
                    
                        React.createElement(ProjectsRender, {data: this.state.projects[this.state.projectCategory]})
                    
                )
            )
        )
    }
}

ReactDOM.render(
    React.createElement(ProjectsShowcase, null),
    document.getElementById('projects-section')
);