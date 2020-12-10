import React from 'react';
import Table from './Table';
import Form from './Form';

class LinkContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           favLinks:[],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeCharacter = this.removeCharacter.bind(this);
        /* TODO - Create state object for storing favLinks */
    }

    removeCharacter = index => {
        
            this.setState(({favLinks}) => ({favLinks : favLinks.filter((_, i) => i !== index)}))
            console.log("Removed value");
        }
        /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
    

    handleSubmit = favLink => {
        this.setState(({favLinks}) => ({favLinks : favLinks.concat([favLink])}))
        /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
    }

    render() {
        
        return (
            <div className="container">
                <h1>My Favorite Links</h1>
                <p>Add a new url with a name and link to the table.</p>
                {<Table linkData={this.state.favLinks} removeLink={this.removeCharacter}/>/*TODO - Add Table Component */}
                
                <br/>

                <h3>Add New</h3>
                {<Form handleSubmit={this.handleSubmit}/>/*TODO - Add Form Component */}
                
            </div>
        );
    }
}


export default LinkContainer;