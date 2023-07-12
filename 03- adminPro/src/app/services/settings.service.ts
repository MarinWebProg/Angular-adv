import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//Los
export class SettingsService {
  private linkTheme = document.querySelector('#theme');

  constructor() {
    //console.log('Settings Service init/ Ajustes de servicio arranque');
    const url = localStorage.getItem('theme') ||'./assets/css/colors/purple-dark.css';
    this.linkTheme?.setAttribute('href',url);
  }

  changeTheme(theme: string){
    const url = `./assets/css/colors/${theme}.css`
    this.linkTheme?.setAttribute('href',url);
    localStorage.setItem('theme',url);

    this.checkCurrentTheme();
  }

  checkCurrentTheme(){
     //const linkWorking:any []| NodeListOf<Element>=[];
     const linkWorking = document.querySelectorAll('.selector');

     linkWorking.forEach ((elem:any) =>{
       elem.classList.remove('working'); //Lo que hace es eliminar el elemento que le estamos llamando
       const btnTheme = elem.getAttribute('data-theme');
       const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
       const currentTheme = this.linkTheme?.getAttribute('href');

       if(btnThemeUrl === currentTheme){
         elem.classList.add('working');
        }

      });

   }


}
