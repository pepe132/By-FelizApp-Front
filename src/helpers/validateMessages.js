/* eslint no-template-curly-in-string: "off" -- And design requiere de establecer strings para despues conventirlos en template strings */
const typeTemplate = "'${name}' no es un ${type} válido";

export const defaultValidateMessages = {
  default: "Error de validación en el campo '${name}'",
  required: "'${name}' es obligatorio",
  enum: "'${name}' debe encontrarse en [${enum}]",
  whitespace: "'${name}' no puede estar vacío",
  date: {
    format: "'${name}' es un formato de fecha inválido",
    parse: "'${name}' no se reconoce como una fecha",
    invalid: "'${name}' es una fecha inválida",
  },
  types: {
    string: typeTemplate,
    method: typeTemplate,
    array: typeTemplate,
    object: typeTemplate,
    number: typeTemplate,
    date: typeTemplate,
    boolean: typeTemplate,
    integer: typeTemplate,
    float: typeTemplate,
    regexp: typeTemplate,
    email: typeTemplate,
    url: typeTemplate,
    hex: typeTemplate,
  },
  string: {
    len: "'${name}' debe contener ${len} caractéres exactamente",
    min: "'${name}' debe contener almenos ${min} caractéres",
    max: "'${name}' no debe contener más de ${max} caractéres",
    range: "'${name}' debe contener entre ${min} y ${max} caractéres",
  },
  number: {
    len: "'${name}' debe ser igual a ${len}",
    min: "'${name}' no puede ser menos de ${min}",
    max: "'${name}' no puede ser mas de ${max}",
    range: "'${name}' debe estar entre ${min} y ${max}",
  },
  array: {
    len: "'${name}' debe ser de ${len} de longitud",
    min: "'${name}' no debe tener una longitud menor a ${min}",
    max: "'${name}' no deber tener una longitud mayor a ${max}",
    range: "'${name}' debe tener una longitud entre ${min} y ${max}",
  },
  pattern: {
    mismatch: "'${name}' no coincide con el patrón ${pattern}",
  },
};