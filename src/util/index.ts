// -------------------------- removeKeyObj --------------------------------------//
/* example ===> 
  const objData = {a:0,d:2,c:23}
  const notAllowedKey = ["a","c"]
  removeKeyObj(objData,notAllowedKey)
  **** result  {d:2} ****
 */
export const removeKeyObj = (objData: { [key: string]: any }, notAllowedKey: string[]) => {
  const filtered = objData;
  notAllowedKey.forEach((key) => delete filtered[key])
  return filtered;
};
// -------------------------- randomID --------------------------------------//
/* example ===> 
  - randomID()              ==> result  'fnt6petrp2j' 
  - randomID("img-")        ==> result  'img-ellvfhp4l2q' 
  - randomID("img-",2)      ==> result  'img-pqlk3xa91gmbg8ndmymxtu1n5sttv' 
  - randomID("img-",2,"-")  ==> result  'img-9q3fk4x9s-wd05tk6qdl-57osnknwyfk'
  
  - randomID("",3) 
    randomID(null,3)            
    randomID(undefined,3)   ==> result  '73557ck8747gob1hxpodzddvtvn8nzde' 

  - randomID("",3,"-")      ==> result  'dqtjlrmat1s-8ojwdt7uu15-of2cjk95r5' 
 */
export const randomID = (prefix?: string, lavle?: number, tagLavle?: string) => {
  let newid1 = Math.random().toString(36).replace("0.", prefix || "");
  let newid2 = ""
  for (let i = 0; i < (lavle || 0); i++) { newid2 = newid2 + Math.random().toString(36).replace("0.", (i === 0 ? (prefix || "") : (tagLavle || ""))); }
  return !lavle ? newid1 : newid2;
};
// -------------------------- dataTypeOf --------------------------------------//
/* example ===> 
- dataTypeOf({}))                             ==> result  'object' 
- dataTypeOf([]))                             ==> result  'array' 
- dataTypeOf(999))                            ==> result  'number' 
- dataTypeOf("xxx"))                          ==> result  'string' 
- dataTypeOf([1,2,3]))                        ==> result  'array' 
- dataTypeOf({key:"xx"}))                     ==> result  'object' 
- dataTypeOf(["1","2","3"]))                  ==> result  'array' 
- dataTypeOf([1,{key:"xx"},1]))               ==> result  'array' 
- dataTypeOf(["xxx",{key:"xx"},0]))           ==> result  'array' 
- dataTypeOf([{key:"xx"},{key:"xx"}]))        ==> result  'array of object' 
- dataTypeOf([{key:"xx"},{key:"xx"},0]))      ==> result  'array of object' 
 */
// export const dataTypeOf = (value: any): string => {
//   if (typeof value === 'object') {
//     if (Array.isArray(value)) return value[0] ? `array of ${dataTypeOf(value[0])}` : 'array'
//     else return 'object'
//   }
//   return typeof value
// }
export const _dataTypeOf = (value: any): string => {
  if (typeof value === 'object') {
    if (Array.isArray(value)) {
      if (_dataTypeOf(value[0]) === "number") return `array`
      if (_dataTypeOf(value[0]) === "string") return `array`
      if (_dataTypeOf(value[0]) === "object") return `array of object`
      if (Array.isArray(value)) return 'array'
    } else return 'object'
  }
  return typeof value
}
// -------------------------- _isEmpty --------------------------------------//
/* example ===> 
  _isEmpty()          ==> result true
  _isEmpty({})        ==> result true
  _isEmpty([])        ==> result true
  _isEmpty("")        ==> result true
  _isEmpty(1)         ==> result false
  _isEmpty("xx")      ==> result false
  _isEmpty([1,2,3])   ==> result false
  _isEmpty({a:"xx"})  ==> result false
 */
export const _isEmpty = (data: any) => {
  const queryDefault =
    data === null || data === "undefined" || data === undefined || data === "";
  if (queryDefault) return true;
  if (typeof data === "number") return false;
  if (typeof data === "string") return false;
  const obj = queryDefault ? [] : data;
  return Object.entries(obj).length === 0;
};