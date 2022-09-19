const urlEncode = function(text) {
text = text.trim();
let encode = ""
for (i = 0; i < text.length; i++) {
  if (text[i] === " ") {
    encode = encode + "%20"
  }else {
      encode = encode + text[i]
  }
}
  return encode
}













console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));