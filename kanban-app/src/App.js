import React from "react";
import data from "./data.json";
import KanbanBoard from "./KanbanBoard";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <KanbanBoard cards={data} />
      </div>
    );
  }
}
