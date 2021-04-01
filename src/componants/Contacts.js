import React, { Component } from "react";
import { Consumer } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const iconShow = <FontAwesomeIcon icon={faSortDown} />;
const iconDelete = <FontAwesomeIcon icon={faTimes} />;

export default class Contacts extends Component {
  state = {
    show: false,
  };
  delete = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };
  montrerContact = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <div className="card card-body mb-3 text-center">
              <h4>
                {this.props.nom}&nbsp;
                <i onClick={this.montrerContact} style={{ cursor: "pointer" }}>
                  {iconShow}
                </i>
                <i
                  onClick={() => this.delete(this.props.id, value.dispatch)}
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                >
                  {iconDelete}
                </i>
              </h4>
              {this.state.show ? (
                <ul className="card card-body mb-3">
                  <li className="list-goup-item">Email : {this.props.email}</li>
                  <li className="list-group-item">
                    Téléphone : {this.props.tel}
                  </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
