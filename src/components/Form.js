import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {name: "", URL: <a href=""></a>}
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        /*
            TODO - set initial state for link name and URL 

        */
    }

    handleChange = event => {
        this.setState({name: event.target.value, URL : event.target.value})
        /*
            TODO - Logic for changing state based on form changes
        */
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */

    }

    render() {

        return(
            /* TODO - Logic for returning a form element with labels and inputs for link name and URL */
            <form onSubmit={this.onFormSubmit}>
                 <label>
                     Name
                     <input type="text" name={this.state.name} onChange={this.handleChange}/>
                 </label>
                 <input type="submit" value="submit"/>
                 <label>
                     URL
                     <input type="text" URL={this.state.URL} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="submit"/>
            </form>
        )
    
    }
}

export default Form;
