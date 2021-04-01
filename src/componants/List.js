import React, { Component } from "react";
import Contacts from "./Contacts";
import { Consumer } from "../context";

export default class List extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <React.Fragment>
              {value.contacts.map((contact) => {
                return (
                  <Contacts
                    key={contact.id}
                    id={contact.id}
                    nom={contact.nom}
                    email={contact.email}
                    tel={contact.tel}
                  />
                );
              })}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
