import { _isEmpty } from './index'
// -------------------------- convertJsonToSearchParams --------------------------------------//
/* example ===> 
convertSearchParams({key:"xxx",key1:"test"}) ==> result '?key=xxx&key1=test'
*/
export const convertJsonToSearchParams = (param: { [key: string]: string }) => {
  if (_isEmpty(param)) return "";
  const newParam = new URLSearchParams(Object.entries(param)).toString();
  return `?${newParam}`
};