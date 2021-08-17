
export const getData = () =>{
  const data = localStorage.getItem('userInfo');
  return JSON.parse(data as any );
};
