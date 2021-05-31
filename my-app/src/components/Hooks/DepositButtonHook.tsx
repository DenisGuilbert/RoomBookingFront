import * as React from 'react';
import Button from 'react-bootstrap/Button';

function DepositButtonHook({ onDeposit }) {
  return <Button onClick={() => onDeposit(10)}>Deposit</Button>;
}

export { DepositButtonHook };