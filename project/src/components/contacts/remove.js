import React from 'react';

const HEADERS = {
    "Method": "GET",
    "headers": {
        "API": "murtha",
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}

class RemoveContact extends React.Component{
    constructor(props){
        super(props);
        this.remRef = React.createRef();
        this.state = this.state = {
            value : '',
        }
    }

    conDel = (event) => {
        let newHeaders = {...HEADERS,
        "method": "POST",
        body: JSON.stringify({
            position: this.remRef.current.value
        })
    }

    event.preventDefault();
        fetch("http://plato.mrl.ai:3000/contacts/remove", newHeaders)
        .then((res) => res.json())
        .then((data) => {
            this.setState({value: this.remRef.current.value})
            console.log(data)
        }, 
        [])
    }

    render(){
        return(
            <div>
                <h2>Delete Contact</h2>
                <form onSubmit = {this.conDel}>

                    <label className="name">Position</label> <br />
                    <input type ="text" ref={this.remRef} id="position" placeholder="Enter Position" />
                    <br /> <br />
                    <button type ="submit">Delete</button>
                </form>
            </div>
        );
    }

}

export default RemoveContact;
