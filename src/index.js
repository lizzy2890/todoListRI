import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";
import { setupIonicReact } from "@ionic/react";

import '@ionic/react/css/core.css';

const destination = document.querySelector("#container");

setupIonicReact();

ReactDOM.render(
    <div>
        <TodoList/>
    </div>,
    destination
);