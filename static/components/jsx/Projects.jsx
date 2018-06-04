

function ProjectsRender(props) {
    const validData = props.data;

    if (typeof validData != 'undefined') {
        const projects = validData.map((project) => {
            return <button className="project-link" onClick={() => window.open(project['link'], "_blank")}>{project['name']}</button>
        })
        return <div>{projects}</div>
    } else{
        return null
    }
}


export default class ProjectsShowcase extends React.Component {
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
            <div id="projects-showcase">
                <div id="categories-container">
                    {
                        Object.keys(this.state.projects).map((key) => {
                            return <button id="category-btn" onClick={this.onClick} name={key}>{key}</button>
                        })
                    }
                </div>
                <div id="projects-container">
                    {
                        <ProjectsRender data={this.state.projects[this.state.projectCategory]} />
                    }
                </div>
            </div>
        )
    }
}