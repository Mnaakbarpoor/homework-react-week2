import React from 'react';
import ReactDOM from 'react-dom';
import Dynamico from './dynamicList'

// import Hello from "./hello"


const App = _=>(
    <div>
        <Dynamico  />
        {/* <Hello /> */}
    </div>
)


ReactDOM.render(<App />, document.getElementById('root'));


