import React from "react";
import ColorPicker from './Components/cp.js';
import 'F:/REACTJS/frontend3/src/App.css';

const App = () => {
  const colors = ["#FE0000", "#00FF01", "#0000FE", "#FFFF00", "#FF00FE", "#00FFFF", "#FEA500", "#81007F", "#FFC0CB", "#008001", "#FE6347","#01CED1",
"#8B4512","#FF8B00","#4682B4","#FED700"];

  return (
  <div className="app">
    <h1>Color Picker</h1>
    <ColorPicker colors={colors} />
  </div>
  );
};

export default App;
