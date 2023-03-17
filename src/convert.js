import _ from "lodash";

export const toCamelCase = (str) => {
  return _.camelCase(str);
};

export const toKebabCase = (str) => {
  return _.kebabCase(str);
};

export const toPascalCase = (str) => {
  // pertama, split string menjadi kata-kata terpisah
  const words = str.split(/[\s-_]+/);

  // kemudian, ubah setiap kata menjadi capitalized (huruf pertama diawali huruf besar)
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1),
  );

  // gabungkan semua kata menjadi satu string dengan menghapus spasi, tanda "-" dan tanda "_" di antara kata-kata
  const pascalCaseString = capitalizedWords.join("");

  return pascalCaseString;
};

export const toSnackCase = (str) => {
  return _.snakeCase(str);
};
