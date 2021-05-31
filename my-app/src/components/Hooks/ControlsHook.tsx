import * as React from 'react';
import { DepositButtonHook } from './DepositButtonHook';
import { WithdrawButtonHook } from './WithdrawButtonHook';
import ButtonGroup from 'react-bootstrap/ButtonGroup'

function ControlsHook({ onDeposit, onWithdraw }) {
  return (
    <ButtonGroup aria-label="Deposit or withdraw money">
        <DepositButtonHook onDeposit={onDeposit} />
        <WithdrawButtonHook onWithdraw={onWithdraw} />
    </ButtonGroup>
  )
}
export { ControlsHook };