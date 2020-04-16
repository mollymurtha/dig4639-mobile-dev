import React from "react";

class ViewContact extends React.Component{
    constructor(props){
        super(props);
        
        this.state = { contacts: []};
    }

    componentDidMount() {

        fetch("http://plato.mrl.ai:3000/contacts/view", {headers: {API: "murtha"}})
        .then((res) => res.json())
        .then((data, ) => {
            console.log(data)
          this.setState({contacts: data.contacts});
        });
      }

      render(){
          return(
              <div>
                  <h2>Contacts</h2>
                  {
                      this.state.contacts.map((value, index)=> {
                          return  <p key={index}> {value.name}, {value.number} </p>;
                      })
                  }
              </div>
            );
    }
}

export default ViewContact;
