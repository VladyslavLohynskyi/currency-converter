import React from 'react';

export interface ConverterItemType{
    selectValue: string;
    inputValue: string;
    anotherSelectValue:string;
    setSelectValue: React.Dispatch<React.SetStateAction<string>>;
    setInputValue: React.Dispatch<React.SetStateAction<string>>
    setAnotherInputValue:React.Dispatch<React.SetStateAction<string>>;
    isConverting:boolean;
    setIsConverting: React.Dispatch<React.SetStateAction<boolean>>
    currencySymbols: string[];
}