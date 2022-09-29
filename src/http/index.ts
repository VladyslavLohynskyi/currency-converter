const headers:Headers = new Headers();
headers.append("apikey", "za2ftTHAwL6BFuFf75rY6UsUyWUx7Akw");

const requestOptions:RequestInit = {
  method: 'GET',
  redirect: 'follow',
  headers: headers
};

export const getAllSymbols = async() => {
   const response = await fetch("https://api.apilayer.com/fixer/symbols", requestOptions);
   const data = await response.json();
   return data
}

export const getHeaderCurrency = async() => {
    const response = await fetch("https://api.apilayer.com/fixer/latest?symbols=EUR%2CUSD&base=UAH", requestOptions)
    const data = await response.json();
    return data
}

export const getConvertedCurrency = async(convertTo:string,convertFrom:string,amount:string)=>{
    const response = await fetch(`https://api.apilayer.com/fixer/convert?to=${convertTo}&from=${convertFrom}&amount=${amount}`, requestOptions)
    const data = await response.json();
    return data
}
 