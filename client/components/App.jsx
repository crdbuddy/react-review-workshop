import React, {Component} from "react";
import List from "./List.jsx";

class App extends Component {
    constructor(props){
        super(props);
        this.state={}
        this.enterName = this.enterName.bind(this);
    }
    enterName(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
 

    render(){
        const { first, last } = this.state;
        return(
            <div>
                {/* First: <input name="first" onChange={this.enterName} />
                Last: <input name="last" onChange={this.enterName} />
                Hello from Component, {first} {last} */}
                <List />
            </div>
        );
    }
}

export default App;