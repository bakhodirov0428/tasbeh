var count=0; 
var text=document.querySelector('.header__text');
var text2=document.querySelector('.header__text2')
text2.innerHTML="SubhanAllah"
function ok1(){
    count++;
    if(count===33){
      text2=document.querySelector('.header__text2').innerHTML=' Alhamdulilah '
    }else if(count===66){

      text2=document.querySelector('.header__text2').innerHTML= ' Allohu akbar '
    }  
    else if(count===99){

      text2=document.querySelector('.header__text2').innerHTML=' La ilaha illolloh '
    }  
    text.innerHTML=count;
}
function ok2(){
  count=0;
  text.innerHTML=count;

  if(count===0){
    text2=document.querySelector('.header__text2').innerHTML=' SubhanAllah '
  }
    // text2.textContent='SubhanAllah'
}