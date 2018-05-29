
class ProjectAdder extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        let projectName = this.refs.projectName.value;
        let projectLink = this.refs.projectLink.value;
        let key = this.refs.securityKey.value;

        const data = {name: projectName, link: projectLink, securityKey: key}

        fetch('/add_project', {
            method: 'POST',
            header: new Headers(),
            body: JSON.stringify(data)
        }).then(function(response) {
            return response.json()
        }).then(function(data) {
            console.log(data);
        })
    }
    
    render() {
        return (
            <div id="project-adder-inputs">

                <h1 id="project-adder-header">Add a new project!</h1>

                <form id="test-form" onSubmit={this.handleSubmit}>
                    <input className="project-adder-input" type="text" placeholder="Project Name" ref="projectName" />
                    <input className="project-adder-input" type="text" placeholder="Link" ref="projectLink"/>
                    <input className="project-adder-input" type="text" placeholder="Security Key" ref="securityKey"/>
                    <button id="project-adder-submit">Add</button>
                </form>
            </div>
        )
    }
}


ReactDOM.render(
    <ProjectAdder />,
    document.getElementById('project-adder-container')
);