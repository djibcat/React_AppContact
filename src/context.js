import React, { Component } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
const Context = React.createContext();
export default class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        nom: "John Doe",
        email: "john@gmail.com",
        tel: "555-555-555",
      },
      {
        id: 2,
        nom: "John Doe",
        email: "john@gmail.com",
        tel: "555-555-555",
      },
      {
        id: 3,
        nom: "John Doe",
        email: "john@gmail.com",
        tel: "555-555-555",
      },
      {
        id: 4,
        nom: "John Doe",
        email: "john@gmail.com",
        tel: "555-555-555",
      },

    ],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
