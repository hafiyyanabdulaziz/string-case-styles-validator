const isSnackCase = (text) => {
  // cek apakah teks kosong
  if (!text) {
    return false;
  }

  // cek apakah teks hanya terdiri dari huruf kecil dan angka
  if (!/^[a-z0-9_]+$/.test(text)) {
    return false;
  }

  // cek apakah teks dimulai atau diakhiri dengan karakter underscore (_)
  if (text.charAt(0) === "_" || text.charAt(text.length - 1) === "_") {
    return false;
  }

  // jika semua syarat di atas terpenuhi, teks dianggap snackcase
  return true;
};

export default isSnackCase;
