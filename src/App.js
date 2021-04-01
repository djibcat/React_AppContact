import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./componants/Header";
import List from "./componants/List";
import Provider from "./context";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header />
          <div className="container">
            <List />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
