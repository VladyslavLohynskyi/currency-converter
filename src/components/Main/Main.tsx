
import './Main.css';
import { Watch } from  'react-loader-spinner'
import React, {useEffect, useState } from 'react';
import { getAllSymbols, getConvertedCurrency } from '../../http';
import { ConverterItem } from '../ConverterItem/ConverterItem';

export const Main: React.FC = () => { 
    const [currencySymbols , setCurrencySymbols] = useState<string[]>([]);
    const [currencySelectValue1 , setCurrencySelectValue1] = useState("USD");
    const [currencyInputValue1 , setCurrencyInputValue1] = useState("1");
    const [currencySelectValue2 , setCurrencySelectValue2] = useState("EUR");
    const [currencyInputValue2 , setCurrencyInputValue2] = useState("0");
    const [isConverting, setIsConverting] = useState(true);
    
    useEffect(()=>{
        getAllSymbols().then((data)=>setCurrencySymbols([...Object.keys(data.currencies)]));
        getConvertedCurrency(currencySelectValue1,currencySelectValue2,currencyInputValue1)
            .then(data=>setCurrencyInputValue2(data.result))
                .then(()=>setIsConverting(false))

    },[])

    return (
        <div className="main-container">
            {!currencySymbols.length?
            <Watch  
                height="80"
                width="80"
                radius="48"
                color="#828282"
                ariaLabel="watch-loading"
                visible={true}
                wrapperClass="loader"
            />:
            <div className='currency-converter'>
                <ConverterItem 
                    inputValue={currencyInputValue1} 
                    selectValue={currencySelectValue1}
                    anotherSelectValue={currencySelectValue2}
                    setSelectValue={setCurrencySelectValue1}
                    setInputValue={setCurrencyInputValue1}
                    isConverting={isConverting}
                    setIsConverting={setIsConverting}
                    currencySymbols={currencySymbols}
                    setAnotherInputValue={setCurrencyInputValue2}
                />
                {isConverting? 
                <Watch  
                    height="20"
                    width="20"
                    radius="48"
                    color="#828282"
                    ariaLabel="watch-loading"
                    visible={true}
                    wrapperClass="loader"
                />:<span className='swap-button'/>
                }
                 <ConverterItem 
                    inputValue={currencyInputValue2} 
                    selectValue={currencySelectValue2}
                    anotherSelectValue={currencySelectValue1}
                    setSelectValue={setCurrencySelectValue2}
                    setInputValue={setCurrencyInputValue2}
                    isConverting={isConverting}
                    currencySymbols={currencySymbols}
                    setIsConverting={setIsConverting}
                    setAnotherInputValue={setCurrencyInputValue1}
                />
            </div>
            }
    </div>
  );
}


