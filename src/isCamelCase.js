const isCamelCase = (text) => {
  // cek apakah teks kosong
  if (!text) {
    return false;
  }

  // cek apakah teks hanya terdiri dari huruf kecil dan besar
  if (!/^[a-zA-Z]+$/.test(text)) {
    return false;
  }

  // cek apakah teks dimulai dengan huruf kecil
  if (text.charAt(0) !== text.charAt(0).toLowerCase()) {
    return false;
  }

  // jika semua syarat di atas terpenuhi, teks dianggap camelCase
  return true;
};

export default isCamelCase;
