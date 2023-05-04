import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css"
 
var xhr;
var url = "https://jsonplaceholder.typicode.com/todos";

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.processRequest = this.processRequest.bind(this);
    }

    componentDidMount(){
        xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.send();

        xhr.addEventListener("readystatechange", this.processRequest, false);  
    }
    
    processRequest() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);

            this.setState({
                items: response
            });
        }
    }

    render() {        
        return (
        <div className="todoListMain">
            <div className="header">
            <form onSubmit={this.addItem}>
                <input  ref={(a) => this._inputElement = a}
                        placeholder="enter task">
                </input>
                <button type="submit">add</button>
            </form>
            </div>
            <TodoItems entries={this.state.items}/>
        </div>
        );
    }

    addItem(e){
        if (this._inputElement.value !== "") {
            var newItem = {
                title: this._inputElement.value,
                id: Date.now()
            };
            
            this.setState((prevState) => {
                return { 
                items: prevState.items.concat(newItem) 
                };
            });
            
            this._inputElement.value = "";  
        }

        console.log(this.state.items);

        e.preventDefault();
    }
}
 
export default TodoList;