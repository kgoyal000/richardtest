decrease()
  function increase(){
    document.querySelector('.page').innerHTML = '<i class="arrow left" onclick="decrease()"></i>2<i class="arrow right fade" onclick="increase()"></i>'
    document.querySelector('.page1').classList.add('hide');
    document.querySelector('.page2').classList.remove('hide');
    }
  function decrease(){
    document.querySelector('.page').innerHTML = '<i class="arrow left fade" onclick="decrease()"></i>1<i class="arrow right" onclick="increase()"></i>'
    document.querySelector('.page2').classList.add('hide');
    document.querySelector('.page1').classList.remove('hide');
  }
  var nav = false;

function submit(){
  document.forms[form].submit();
}
function openNav() {
  nav = true;
  document.getElementById("mySidebar").classList.remove('old');
  document.getElementById("main").style.left = "125px";
  document.getElementById("mySidebar").classList.add('new');

}

function closeNav() {
  nav = false
  document.getElementById("mySidebar").classList.remove('new');
  document.getElementById("mySidebar").classList.add('old');
  document.getElementById("main").style.left= "0";
}
function checkNav(){
if(nav == true){
  document.getElementById('sidebar').addEventListener('click',()=>{
    closeNav()
  })
}else{
  document.getElementById('sidebar').addEventListener('click',()=>{
    openNav()
  })
}
}
