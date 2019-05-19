$('#input').keydown((e)=>{
  setTimeout(()=>{
    var input = $('#input')[0];
    var inputText = $('#inputText')[0];
    inputText.innerHTML = input.value;
    if(e.key=='Enter'){
      $('#text')[0].innerHTML += `<span>~~~> ${input.value}</span><br/>`;
      $('#text')[0].innerHTML += `<span>${run(input.value)}</span><br/>`;
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
  return `Your command was ${cmd}`;
}
