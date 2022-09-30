import React, { useEffect, useState } from 'react';
import { getHeaderCurrency } from '../../http';
import { CurrencyItem } from '../CurrencyItem/CurrencyItem';
import './Header.css';

interface headerCurrency {
    USD:number;
    EUR:number;
}

export const Header: React.FC = () => {
    const [headerCurrency, setHeaderCurrency] = useState<headerCurrency>({USD:0,EUR:0})

    useEffect(()=>{
       getHeaderCurrency().then(data=> setHeaderCurrency({USD:data.quotes.UAHUSD ,EUR:data.quotes.UAHEUR}))
    },[])

   return (
    <div className='header-container'>
        {Object.keys(headerCurrency).map(currency=>
            <CurrencyItem key={currency} currency={currency} value={headerCurrency[currency as keyof headerCurrency]}/>)
        }
    </div>
   );
};
