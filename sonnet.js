// this defines a varibale called "sonnetUnaltered".  
// Then, the document.getElementById('sonnet') part targets the contents of the div with id="sonnet" on the index.html.
// The .innerHTML allows for the data on the index.html page to be altered.
// Finally, the portion at the bottom then targets the variable "sonnetUnaltered" and uses the replace string method to 
// replace all instances of the word "orphans" within the text.

var sonnetUnaltered=document.getElementById('sonnet').innerHTML;
console.log (sonnetUnaltered) 

// alert statement to indicate number of characters in text
alert(sonnetUnaltered.indexOf("orphans"));


sonnetAltered = sonnetUnaltered.replace("orphans", "CROCODILES")
// sonnetAltered = sonnetUnaltered.replace("what", "WHO DAT")
document.getElementById('sonnet').innerHTML = sonnetAltered
