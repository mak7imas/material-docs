import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MaterialDocsExample from "./example/MaterialDocsExample";
import Documentation from "./docs-app/Documentation";

ReactDOM.render(
  <React.StrictMode>
    {/*<MaterialDocsExample />*/}
    <Documentation />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
