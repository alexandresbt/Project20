$("#btnxml").click(function(){
  var elements = document.getElementsByClassName("test");
  var text = "";

  for (k in range(0, elements.length -1)) {
    text += elements[k].textContent + ";"
    if (k%3 == 2) {
      text += "\n";
    }
  }

  download("Base_de_donnée_Prénscrits_20_ans_TC.csv", text);
});

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function range(start, end) {
  if(start === end) return [start];
  return [start, ...range(start + 1, end)];
}

// Start file download.
//download("hello.txt","This is the content of my file :)");
