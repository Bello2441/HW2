import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {name: "", URL: ""}
        /*
            TODO - set initial state for link name and URL 

        */
    }

    handleNameChange = event => {
        this.setState({name: event.target.value})
        /*
            TODO - Logic for changing state based on form changes
        */
    }

    handleURLChange = event => {
        this.setState({URL: event.target.value})
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        this.setState({name:"", URL:""})
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */

    }

    render() {

        return(
            /* TODO - Logic for returning a form element with labels and inputs for link name and URL */
            <form>
                <label onSubmit={this.onFormSubmit}>
                     Name
                     <input type="text" name="name" onChange={this.handleNameChange}/>
                </label>
                 <label>
                     URL
                     <input type="text" URL="name" onChange={this.handleURLChange}/>
                 </label>
                 <input type='submit'/>
            </form>
        )
    
    }
}

export default Form;
