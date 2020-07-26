function submit(){
  if($('#quan_num').val()==""){
    $('#quan_num').css('border','red 2px solid');
  }else{
    $('#quan_num').css('border','black 2px solid');
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function () {
        // do something to response
    $('#data').html($(this.responseText).find('#data').html());
    };
    var quantity = document.getElementById('quan_num').value;
    if(quantity > 3){
     quantity = 3;
    }
     xhr.send('select='+document.getElementById('select').value+"&"+'page='+document.getElementById('page').value+"&"+'quantity='+quantity);
  }
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
  document.getElementById("mySidebar").classList.remove('start');
  document.getElementById("mySidebar").classList.remove('old');
  document.getElementById("mySidebar").classList.add('new');
  document.getElementById("main").style.marginLeft = "40%";
}

function closeNav() {
  nav = false
  document.getElementById("mySidebar").classList.remove('new');
  document.getElementById("mySidebar").classList.add('old');
  document.getElementById("main").style.marginLeft = "25%";
}
function checkNav(event){
  console.log(event.target)
 if(event.target != document.getElementById('quantity') && event.target != document.getElementById('h4_title') && event.target != document.getElementById('quan_num') ){  
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

}