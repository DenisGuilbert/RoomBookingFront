import * as React from 'react';
import Button from 'react-bootstrap/Button';

function WithdrawButtonHook({ onWithdraw }) {
  return <Button variant="primary" onClick={() => onWithdraw(10)}>Withdraw</Button>;
}

export { WithdrawButtonHook };