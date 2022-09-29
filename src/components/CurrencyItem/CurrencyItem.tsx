import React from 'react';
import { CurrencyItemType } from './CurrencyItemType';
import './CurrencyItem.css';



export const CurrencyItem: React.FC<CurrencyItemType> = ({currency, value}) => {
   return (
        <p className='header-currency-item'>1 UAH = {value} {currency}</p>
   )
};
