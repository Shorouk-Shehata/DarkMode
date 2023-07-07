function setTheme(themeName)
 {
   localStorage.setItem('theme',themeName);
   document.documentElement.className=themeName;
 }

 function toggleTheme()
 {
   var Btn = document.getElementById('switch');
   if(localStorage.getItem('theme')==="theme-dark")
   {
     setTheme('theme-light');
     Btn.textContent="Dark";
    
     }
   else
   {
     setTheme('theme-dark');
     Btn.textContent="Light";
    }
 }

  (function(){
    if(localStorage.getItem('theme')==="theme-dark")
   {
     setTheme('theme-dark');
   }
   else
   {
     setTheme('theme-light');
   }
  })();