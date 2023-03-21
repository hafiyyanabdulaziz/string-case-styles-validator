import {
  isCamelCase,
  isKebabCase,
  isPascalCase,
  isSnackCase,
  toCamelCase,
  toKebabCase,
  toPascalCase,
  toSnackCase,
} from "string-case-styles-validator";

const test = isSnackCase("hafiyHyan_2432abdul");

console.log(test);
