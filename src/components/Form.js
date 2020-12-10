import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "", 
            url: ""
        }
        /*
            TODO - set initial state for link name and URL 

        */
    }

    handleNameChange = event => {
        console.log("input updated!")
        console.log(event.target)
        this.setState({
            name: event.target.value
        })
        /*
            TODO - Logic for changing state based on form changes
        */
    }

    handleURLChange = event => {
        console.log("input updated!")
        console.log(event.target)
        this.setState({url: event.target.value})
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        console.log(this.state)
        this.props.handleSubmit(this.state);
        this.setState({
            name : "",
            url: ""
        })
    }
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */

    render() {

        return(
            /* TODO - Logic for returning a form element with labels and inputs for link name and URL */
            <form>
                <label onSubmit={this.onFormSubmit}>
                     Name
                     <input type="text" onChange={this.handleNameChange} value={this.state.name}/>
                </label>
                 <label>
                     URL
                     <input type="text" onChange={this.handleURLChange} value={this.state.url}/>
                 </label>
                 <button onClick={this.onFormSubmit}> Submit </button>
            </form>
        )
    
    }
}

export default Form;
