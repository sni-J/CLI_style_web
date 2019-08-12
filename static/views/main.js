$('#input').keydown((e)=>{
  setTimeout(()=>{
    var input = $('#input')[0];
    var inputText = $('#inputText')[0];
    inputText.innerHTML = input.value;
    if(e.key=='Enter'){
      $('#text')[0].innerHTML += `<span>~~~> ${input.value}</span><br/>`;
      var res = run(input.value);
      if(res!=""){
        $('#text')[0].innerHTML += `<span>${res}</span><br/>`;
      }
      input.value="";
      inputText.innerHTML="";
    }
  }, 10);
});

var c = true;
setInterval(
  () => {
    if(c){
      $('#cursor').html("");
      c = false;
    }
    else{
      $('#cursor').html("_");
      c = true;
    }
  }
, 500);

const run = (cmd) => {
  switch (cmd) {
    case 'clear':
      $('#text')[0].innerHTML="";
      return "";
    case 'exit':
      return "'exit' is not provided since window.close() is not working for security reasons.";
    default:
      return `${cmd}: Not yet implemented`;
  }
}
