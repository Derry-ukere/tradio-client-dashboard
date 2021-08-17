
export const getData = () =>{
  const data = localStorage.getItem('userLoginInfo');
  return JSON.parse(data as any );
};
