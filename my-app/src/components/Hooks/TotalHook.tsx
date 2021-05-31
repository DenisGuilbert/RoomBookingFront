import React, { Component, useState } from 'react';
import { AmountHook } from './AmountHook';
import { ControlsHook } from './ControlsHook';

export function TotalHook() {
  const [amount, setAmount] = useState(0);

  function deposit(value) {
    setAmount(amount + value);
  }

  function withdraw(value) {
    //Withdraw money to the account, but can't withdraw < 0
    const newAmount = amount - value;
    setAmount(newAmount < 0 ? 0 : newAmount);
  }

  return (
    <div>
        <hr/>
        <AmountHook value={amount} />      
        <ControlsHook onDeposit={deposit} onWithdraw={withdraw} />
    </div>
  )
}