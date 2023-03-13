const isKebabCase = (text) => {
  // cek apakah teks kosong
  if (!text) {
    return false;
  }

  // cek apakah teks hanya terdiri dari huruf dan angka
  if (!/^[a-z0-9]+$/.test(text)) {
    return false;
  }

  // cek apakah teks mengandung karakter underscore (_) atau huruf kapital
  if (text.indexOf("_") !== -1 || /[A-Z]/.test(text)) {
    return false;
  }

  // cek apakah teks dimulai atau diakhiri dengan karakter strip (-)
  if (text.charAt(0) === "-" || text.charAt(text.length - 1) === "-") {
    return false;
  }

  // jika semua syarat di atas terpenuhi, teks dianggap kebabcase
  return true;
};

export { isKebabCase };
