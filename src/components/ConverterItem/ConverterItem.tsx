import React, { useEffect, useMemo } from "react";
import { getConvertedCurrency } from "../../http";
import "./ConverterItem.css";
import { ConverterItemType } from "./ConverterItemType";
import debounce from "lodash.debounce";

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
    
  useEffect(() => {
    return () => {
      debouncedInputChangeHandler.cancel();
    };
  }, []);

  function handleChangeSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectValue(e.target.value);
    setIsConverting(true);
    getConvertedCurrency(anotherSelectValue, e.target.value, inputValue)
      .then((data) => setAnotherInputValue(data.result))
      .then(() => setIsConverting(false));
  }

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setIsConverting(true);
    getConvertedCurrency(selectValue, anotherSelectValue, e.target.value)
      .then((data) => setAnotherInputValue(data.result))
      .then(() => setIsConverting(false));
  }

  const debouncedInputChangeHandler = useMemo(
    () => debounce(handleChangeInput, 300),
    []
  );

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
        onChange={(e) => {
          setInputValue(e.target.value);
          debouncedInputChangeHandler(e);
        }}
        disabled={isConverting}
      />
    </div>
  );
};
