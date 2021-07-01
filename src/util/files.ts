export const getBase64 = (file: Blob, callback: (base64: string | ArrayBuffer | null) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(file);
};