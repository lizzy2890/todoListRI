import { IonItem, IonLabel, IonList } from "@ionic/react";
import React, { Component } from "react";
 
class TodoItems extends Component {
  createTasks(item) {
    return <IonItem>
              <IonLabel key={item.id}>{item.title}</IonLabel> 
          </IonItem>
  }
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <IonList className="theList">
          {listItems}
      </IonList>
    );
  }
};

export default TodoItems;