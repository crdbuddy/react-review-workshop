import React, {Component} from "react";
import ListEntry from "./ListEntry.jsx";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item:"",
            items: []
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmitHandler(e) {
        this.setState({
            items:[... this.state.items, this.state.item]
        }, ()=> console.log(this.state)
        );
    }
    
    render () {
        return (
            <div>
                <div>
                    Item: <input name="item"  onChange={this.onChangeHandler} />
                    <button onClick = {this.onSubmitHandler}>Submit</button>
                </div>

                <div>
                    {this.state.items.map(item => (
                    <ListEntry 
                    item={item} 
                    key={item} 
                    />
                 ))};
                 </div>
            </div>
            

        )
    }
}
export default List;