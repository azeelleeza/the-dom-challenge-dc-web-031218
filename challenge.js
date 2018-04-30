const timer = setInterval(()=>{
document.getElementById('counter').innerHTML++;
}, 1000);

const time = ()=>{
  const timer = setInterval(()=>{
  document.getElementById('counter').innerHTML++;
}, 1000);
return timer;};

document.getElementById('-').addEventListener('click',()=>{
  document.getElementById('counter').innerHTML--;
});

document.getElementById('+').addEventListener('click',()=>{
  document.getElementById('counter').innerHTML++;
});

document.getElementById('<3').addEventListener('click',()=>{
  document.getElementsByClassName('likes')[0].innerHTML++;
});

document.getElementById('pause').addEventListener('click',(()=>{
  document.querySelectorAll('button:not(#pause):not(#submit)').forEach((b)=>b.disabled=true);
  document.getElementById('pause').innerText === "pause" ? clearInterval(timer) : time() ;
  console.log(this);
  document.getElementById('pause').textContent = "resume";
}).bind(this));

document.getElementById('submit').addEventListener('click',(e)=>{
  e.preventDefault();
  document.getElementsByClassName('comments')[0].innerHTML+=`<br>${document.querySelector('input').value}`;
  document.querySelector('input').value = "";

});
