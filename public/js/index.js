function submit(){
var xhr = new XMLHttpRequest();
xhr.open('POST', '/', true);
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhr.onload = function () {
    // do something to response
    $('#data').html($(this.responseText).find('#data').html());
};
xhr.send('select='+document.getElementById('select').value+"&"+'page='+document.getElementById('page').value);
}
  function increase(){
    $('.arrow.left').removeClass('fade');
    $('.arrow.right').addClass('fade');
    document.getElementById('page').value = 2;
    document.querySelector('#page_num').innerHTML = 2
  }
  function decrease(){
    $('.arrow.right').removeClass('fade');
    $('.arrow.left').addClass('fade');
    document.getElementById('page').value = 1;
    document.querySelector('#page_num').innerHTML = 1;
  }
  var nav = false;
function openNav() {
  nav = true;
  document.getElementById("mySidebar").classList.remove('old');
  document.getElementById("main").style.left = "15%";
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
