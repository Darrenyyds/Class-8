/** @format */

function getFullName(firstName, lastName) {
  const isFirstNameString = typeof firstName == "string";
  const isLastNameString = typeof lastName == "string";
  if (!isLastNameString && !isFirstNameString) {
    return "Please input a name";
  }
  if (!isLastNameString) {
    return capitalized(firstName);
  }
  if (!isFirstNameString) {
    return capitalized(lastName);
  }

  return capitalized(firstName) + " " + capitalized(lastName);
}
const capitalized = (word) =>
  word[0].toUpperCase() + word.slice(1).toLowerCase();

function getFirstLetterOf(str) {
  if (typeof str !== "string") {
    return undefined;
  }
  if (str.length === 0) {
    return "Please input a string";
  }
  return str[0];
}

module.exports = { getFullName, getFirstLetterOf };
