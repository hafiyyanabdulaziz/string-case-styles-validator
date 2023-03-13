const isCamelCase = (text) => {
  // cek apakah teks kosong
  if (!text) {
    return false;
  }

  // cek apakah teks hanya terdiri dari huruf dan angka
  if (!/^[a-zA-Z0-9]+$/.test(text)) {
    return false;
  }

  // cek apakah teks dimulai dengan huruf kecil
  if (text.charAt(0) !== text.charAt(0).toLowerCase()) {
    return false;
  }

  // cek apakah teks mengandung karakter underscore (_) atau huruf kapital
  if (text.indexOf("_") !== -1 || /[A-Z]/.test(text)) {
    return false;
  }

  // jika semua syarat di atas terpenuhi, teks dianggap camelCase
  return true;
};

export { isCamelCase };
