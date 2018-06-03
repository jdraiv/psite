
class ProjectAdder extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        let projectName = this.refs.projectName.value;
        let categoryName = this.refs.category.value;
        let projectLink = this.refs.projectLink.value;
        let key = this.refs.securityKey.value;

        const data = {name: projectName, category: categoryName, link: projectLink, securityKey: key}

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
            React.createElement("div", {id: "project-adder-inputs"}, 

                React.createElement("h1", {id: "project-adder-header"}, "Add a new project!"), 

                React.createElement("form", {id: "test-form", onSubmit: this.handleSubmit}, 
                    React.createElement("input", {className: "project-adder-input", type: "text", placeholder: "Project Name", ref: "projectName"}), 
                    React.createElement("input", {className: "project-adder-input", type: "text", placeholder: "Category", ref: "category"}), 
                    React.createElement("input", {className: "project-adder-input", type: "text", placeholder: "Link", ref: "projectLink"}), 
                    React.createElement("input", {className: "project-adder-input", type: "text", placeholder: "Security Key", ref: "securityKey"}), 
                    React.createElement("button", {id: "project-adder-submit"}, "Add")
                )
            )
        )
    }
}


ReactDOM.render(
    React.createElement(ProjectAdder, null),
    document.getElementById('project-adder-container')
);