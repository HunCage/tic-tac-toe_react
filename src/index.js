import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Game from "./components/Game";
import Board from "./components/Board";
import Square from "./components/Square";

ReactDOM.render(
    <React.StrictMode>
        <Game />
        <Board />
        <Square />
    </React.StrictMode>,
    document.getElementById("root")
);
