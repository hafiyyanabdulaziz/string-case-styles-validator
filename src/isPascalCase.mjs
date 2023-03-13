const isPascalCase = (text) => {
  // cek apakah teks kosong
  if (!text) {
    return false;
  }

  // cek apakah teks hanya terdiri dari huruf dan angka
  if (!/^[a-zA-Z0-9]+$/.test(text)) {
    return false;
  }

  // cek apakah teks dimulai dengan huruf kapital
  if (text.charAt(0) !== text.charAt(0).toUpperCase()) {
    return false;
  }

  // cek apakah teks mengandung karakter underscore (_) atau huruf kecil
  if (text.indexOf("_") !== -1 || /[a-z]/.test(text)) {
    return false;
  }

  // jika semua syarat di atas terpenuhi, teks dianggap pascalcase
  return true;
};

export { isPascalCase };
