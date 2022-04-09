import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from "react-dom/client";

import App from './App';

//ReactDOM.render(<App/>,document.getElementById('root'));
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render (
    <StrictMode>
        <App/>
    </StrictMode>
)
/*
Krejt aplikacioni ka me qene brenda App component dhe kete komponente
e bejme hook brenda root
Root eshte brenda folderit public, ne file-in index.html
*/
