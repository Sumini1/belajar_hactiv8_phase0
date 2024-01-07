function tukar_besar_kecil(text) {
  //code di sini
  //initial value
  //   let result = "";

  //   // looping huruf nya
  //   for (let i = 0; i < text.length; i++) {
  //     // bikin element yg namanya huruf di bandingkan dg text[i] yg sudah di looping
  //     const huruf = text[i];
  //     // semua huruf dijadiin kecil
  //     if (huruf === huruf.toLowerCase()) {
  //       // setelah udah kecil maka dijadiin besar,
  //       result += huruf.toUpperCase();
  //     } else {
  //       // setelah besar dijadiin kecil
  //       result += huruf.toLowerCase();
  //     }
  //   }
  //   return result;

  let result = "";

  for (let i = 0; i < text.length; i++) {
    result +=
      text[i] === text[i].toUpperCase()
        ? text[i].toLowerCase()
        : text[i].toUpperCase();
  }
  return result;
}

console.log(tukar_besar_kecil("Hello World"));
console.log(tukar_besar_kecil("i aM aLAY"));
console.log(tukar_besar_kecil("My Name is Bond!!"));
console.log(tukar_besar_kecil("IT sHOULD be me"));
console.log(tukar_besar_kecil("001-A-3-5TrdYM"));
