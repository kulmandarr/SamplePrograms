function commonPrefix(strings) {
  if (strings.length === 0) return '';

  strings.sort(); // Sort the array alphabetically
  const firstString = strings[0];
  const lastString = strings[strings.length - 1];
  let prefix = '';

  // Compare characters of the first and last string
  for (let i = 0; i < firstString.length; i++) {
      if (firstString[i] === lastString[i]) {
          prefix += firstString[i];
      } else {
          break;
      }
  }

  return prefix;
}

// Example usage:
const array = ["Shardul","Sharvil","Shalmali","Shadab"];
console.log("Common prefix:", commonPrefix(array)); // Output: "fl"
