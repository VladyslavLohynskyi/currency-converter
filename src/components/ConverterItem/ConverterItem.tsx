import React from "react";
import { getConvertedCurrency } from "../../http";
import "./ConverterItem.css";
import { ConverterItemType } from "./ConverterItemType";



export const ConverterItem: React.FC<ConverterItemType> = ({
  selectValue,
  inputValue,
  anotherSelectValue,
  setInputValue,
  setSelectValue,
  isConverting,
  setIsConverting,
  currencySymbols,
  setAnotherInputValue,
}) => {

  function handleChangeSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectValue(e.target.value);
    setIsConverting(true);
    getConvertedCurrency(anotherSelectValue, e.target.value, inputValue)
      .then((data) =>setAnotherInputValue(data.result))
      .then(() => setIsConverting(false));
  }

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
    setIsConverting(true);
    getConvertedCurrency(anotherSelectValue,selectValue, e.target.value)
      .then((data) => setAnotherInputValue(data.result))
        .then(() => setIsConverting(false));
  }


  return (
    <div className="currency-converter-item">
      <select
        value={selectValue}
        onChange={handleChangeSelect}
        disabled={isConverting}
      >
        {currencySymbols.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      <input
        type="number"
        value={inputValue}
        onChange={handleChangeInput}
        disabled={isConverting}
      />
    </div>
  );
};
