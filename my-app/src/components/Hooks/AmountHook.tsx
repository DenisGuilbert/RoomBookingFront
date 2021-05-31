import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AmountHook({ value }) {
  return (
    <div>
        <p>You have saved :</p>
        <div>${value}</div>
    </div>
  );
}

export { AmountHook };