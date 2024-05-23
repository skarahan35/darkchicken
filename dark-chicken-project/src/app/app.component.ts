import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dark-chicken-project';
  constructor(){
    document.addEventListener('DOMContentLoaded', function() {
      const sidebar = document.getElementById('sidebar');
      if (sidebar) {
          sidebar.addEventListener('click', function() {
              this.classList.toggle('collapsed');
          });
      }
  });
  }

}
