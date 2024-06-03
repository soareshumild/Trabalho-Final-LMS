//menu responsivo
function menuShow() {
    let menuResponsivo = document.querySelector('.responsive-menu');
    if (menuResponsivo.classList.contains('open')) {
      menuResponsivo.classList.remove('open');
      document.querySelector('.icon').src = "assets/img/menuburguer.svg";
    } else {
      menuResponsivo.classList.add('open');
      document.querySelector('.icon').src = "assets/img/closemenu.svg";
    }
  }
  
  //slide
  var radio = document.querySelector('.manual-btn')
  var cont = 1
  
  document.getElementById('radio1').checked = true
  
  setInterval(() => {
      proximaImg()
  }, 5000)
  
  function proximaImg(){
      cont++
  
      if(cont > 4){
          cont = 1 
      }
  
      document.getElementById('radio'+cont).checked = true
  }