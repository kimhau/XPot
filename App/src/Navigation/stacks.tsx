import React from 'react';
import { Savings, SlotMachineSavings, XBankLanding } from '../Containers/index';
import Summary from '../Containers/Summary';
import { IStacks } from '../Modals';

export const STACKS: IStacks[] = [
  {
    name: 'XBank',
    component: XBankLanding,
  },
  {
    name: 'SlotMachine',
    component: SlotMachineSavings,
  },
  {
    name: 'Savings',
    component: Savings,
  },
  {
    name: 'Summary',
    component: Summary,
  },
];
