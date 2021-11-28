import { LightningElement } from 'lwc';

export default class customNav extends LightningElement {

  viewBasics = true; //maybe make it a constant variable if possible to prevent confusion? when clicking multiple different nav items ion the future as the page scales?

  swapView(){
    this.viewBasics = !this.viewBasics;
  }
}
