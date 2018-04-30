let timer;

 function change(){
  if (!timer){
    timer = setInterval(()=>{
      document.getElementById('counter').innerHTML++;
    }, 1000);
  } else{
    clearInterval(timer);
    timer = null;
  }
}

change();

document.getElementById('-').addEventListener('click',()=>{
  document.getElementById('counter').innerHTML--;
});

document.getElementById('+').addEventListener('click',()=>{
  document.getElementById('counter').innerHTML++;
});

document.getElementById('<3').addEventListener('click',()=>{
  document.getElementsByClassName('likes')[0].innerHTML++;
});

document.getElementById('pause').addEventListener('click',(function(){
  document.querySelectorAll('button:not(#pause):not(#submit)').forEach((b)=>b.disabled=true);
  this.innerText = this.innerText === "pause" ? "resume" : "pause";
  change();
}));

document.getElementById('submit').addEventListener('click',(e)=>{
  e.preventDefault();
  document.getElementsByClassName('comments')[0].innerHTML+=`<br>${document.querySelector('input').value}`;
  document.querySelector('input').value = "";

});
