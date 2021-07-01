import { _dataTypeOf } from './index'
// -------------------------- convertJsonToFormData --------------------------------------//
/* example ===> 
  const objData = {a:{c:"",e:""},d:2,c:23}
  convertJsonToFormData(objData)

  const objData = {img:[{image:""},image:""],d:2,c:23}
  convertJsonToFormData(objData)

  convertJsonToFormData("data-xxx","key")
 */
export const convertJsonToFormData = (data: any, keydata?: string) => {
  try {
    const formData = new FormData();
    const _appendDataArray = (keys: string | null, dataArray: []) => {
      if (!keys) throw new Error('_appendDataArray : No key to append data')
      dataArray.forEach((data: any, index: number) => {
        _appendData(`${keys}[${index}]`, data)
      })
    }
    const _appendDataObject = (keyObject: string | null, dataAObject: { [keys: string]: any }) => {
      Object.keys(dataAObject).forEach((key) => {
        _appendData(keyObject ? `${keyObject}[${key}]` : key, dataAObject[key])
      })
    }
    const _appendDataArrayOfObject = (keys: string | null, dataArray: { [keys: string]: any }) => {
      if (!keys) throw new Error('_appendDataArrayOfObject : No key to append data')
      dataArray.forEach((data: any, index: number) => {
        if (_dataTypeOf(data) === "object") _appendDataObject(`${keys}[${index}]`, data)
        else if (_dataTypeOf(data) === "array") _appendDataArray(`${keys}[${index}]`, data)
        else formData.append(keys, data)
      })
    }
    const _appendData = (keys: string, data: any) => {
      if (_dataTypeOf(data) === "array of object") _appendDataArrayOfObject(keys, data)
      else if (_dataTypeOf(data) === "object") _appendDataObject(keys, data)
      else if (_dataTypeOf(data) === "array") _appendDataArray(keys, data)
      else formData.append(keys, data)
    }

    if (_dataTypeOf(data) === "object") _appendDataObject(null, data)
    else if (_dataTypeOf(data) === "array") _appendDataArray(null, data)
    else if (_dataTypeOf(data) === "array of object") _appendDataArrayOfObject(null, data)
    else keydata && formData.append(keydata, data)
    return formData;
  } catch (error) {
    throw new Error("_appendFormData : can't append data")
  }
};