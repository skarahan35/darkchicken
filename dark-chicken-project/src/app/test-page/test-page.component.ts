import { Component } from '@angular/core';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent {

  isVisible = false
  modalOpen = false

  constructor() {
  }

  closeModal(type:string) {
    if(type == 'button'){
      document.querySelectorAll('.dca-btn').forEach(button => {
        button.addEventListener('click', () => {
          console.log(button)
        })
      })
      document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
          const modalOverlay = document.getElementById('modalOverlay');
          const modal = document.getElementById('modal');
          const modalContent = document.getElementById('modalContent');
  
          modalContent!.innerHTML = card.innerHTML;
          modal!.classList.add('show');
          modalOverlay!.classList.add('show');
        });
      });
  
      document.getElementById('modalOverlay')!.addEventListener('click', () => {
        const modalOverlay = document.getElementById('modalOverlay');
        const modal = document.getElementById('modal');
  
        modal!.classList.remove('show');
        modalOverlay!.classList.remove('show');
      });
    }
    else{
      this.modalOpen = true
    }
  }

  clickButton(e:any){
    this.modalOpen = true
  }
}
