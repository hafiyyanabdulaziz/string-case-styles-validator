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

const test = isCamelCase("     hafiyyan abdul aziz");

console.log(test);
