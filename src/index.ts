import { getBase64 } from './util/files';
import { convertJsonToFormData } from './util/from';
import { convertJsonToSearchParams } from './util/location';
import { _isEmpty, _dataTypeOf, randomID, removeKeyObj } from './util';
const yimTesting = () => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return "Welcome to yim library tool."
};

export { convertJsonToFormData, yimTesting, convertJsonToSearchParams, _isEmpty, _dataTypeOf, randomID, removeKeyObj, getBase64 }