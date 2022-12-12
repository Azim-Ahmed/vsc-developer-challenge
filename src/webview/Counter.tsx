import React, { useState } from "react";
import { VSCodeButton, VSCodeTextField } from "@vscode/webview-ui-toolkit/react";
import {currency} from '../assets';

function Counter(): JSX.Element {
  const [counter, setCounter] = useState(0);

  const inc = () => setCounter((c) => c + 1);
  const dec = () => setCounter((c) => c - 1);

  return (
    <div
    style={{
      display: 'flex',
      minHeight: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
    }}

    >
      <div>
      <h1>The counter is currently {counter}</h1>
      <VSCodeButton appearance="primary" onClick={inc} title="Increment">
        Increment
      </VSCodeButton>
      <VSCodeButton appearance="primary" onClick={dec} title="Decrement">
        Decrement
      </VSCodeButton>
      <h2>{counter }</h2>
        <div>
        <VSCodeTextField defaultValue={counter} placeholder="Placeholder Text"/>
        <select defaultValue={counter} placeholder="Placeholder Text">
          {
            Object.keys(currency).map(item => <option>{ item}</option>)
          }
          <option value=""></option>
      </select>
     </div>
        <div>
        <VSCodeTextField defaultValue={counter} placeholder="Placeholder Text"/>
        <select defaultValue={counter} placeholder="Placeholder Text">
          {
            Object.keys(currency).map(item => <option>{ item}</option>)
          }
          <option value=""></option>
      </select>
     </div>
  </div>
    </div>
  );
}

export default Counter;
