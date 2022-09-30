const headers:Headers = new Headers();
headers.append("apikey", "rvszdcqr8mdcl6aNPmJEsFuoWWdgaqjg");

const requestOptions:RequestInit = {
  method: 'GET',
  redirect: 'follow',
  headers: headers
};

export const getAllSymbols = async() => {
   const response = await fetch("https://api.apilayer.com/currency_data/list", requestOptions);
   const data = await response.json();
   return data
}

export const getHeaderCurrency = async() => {
    const response = await fetch("https://api.apilayer.com/currency_data/live?source=UAH&currencies=EUR%2CUSD", requestOptions)
    const data = await response.json();
    return data
}

export const getConvertedCurrency = async(convertTo:string,convertFrom:string,amount:string)=>{
    const response = await fetch(`https://api.apilayer.com/currency_data/convert?to=${convertTo}&from=${convertFrom}&amount=${amount}`, requestOptions)
    const data = await response.json();
    return data
}
 