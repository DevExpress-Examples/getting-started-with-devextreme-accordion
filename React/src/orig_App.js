import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import { Accordion } from 'devextreme-react/accordion';
import { employees } from './data.js';

const customTitle = (data) => {
  return data.FirstName + " " + data.LastName;
}
const customItem = (data) => {
  return data.Position + " from " + data.State;
}
function App() {
  return (
    <div id="container">
      <Accordion
        dataSource={employees}
        collapsible={true}
        multiple={true}
        animationDuration="450"
        itemTitleRender={customTitle}
        itemRender={customItem}
      />
    </div>
  );
}

export default App;
