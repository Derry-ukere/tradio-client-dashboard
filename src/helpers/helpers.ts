export const  percentage = (partialValue : number , totalValue : number) => {
  return (100 * partialValue) / totalValue;
};


export const  randomNumber = (min : number, max : number) =>{
  return Math.random() * (max - min) + min;
};

