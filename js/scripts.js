$(document).ready(function() {

  const vowels = ["a","e","i","o","u"]
  let string = "Believe you can and you're halfway there. Theodore Roosevelt"
  for (let i = 0; i < string.length; i +=1) {
    if (vowels.includes(string[i]) === true) {
      string = string.replace(string[i], "-")
      console.log(string)}
  };
});







/*  const vowels = ["a","e","i","o","u"]

  let string = "Believe you can and you're halfway there. Theodore Roosevelt";
  for (let i = 0; i < string.length; i +=1) {
    if vowels.includes("[i]") === true {
      string.replace([i], "-")
    }
    console.log(string)
      });
    
  }; */