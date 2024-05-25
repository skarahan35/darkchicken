import { Component } from '@angular/core';
import { TabModel } from 'projects/darkchicken';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent {
  selectedModal = null
  isVisible = false
  modalOpen = false

  constructor() {
  }

  closeModal() {
    this.selectedModal = null

  }

  clickButton(e: any) {
    this.modalOpen = true
  }

  onModalClick(e: any) {
    this.selectedModal = e

  }

  tabs: TabModel[] = [
    {tabId:'1',
      tabTitle:'Description'
    },
    {tabId:'2',
      tabTitle:'Code'
    }
  ]

}
