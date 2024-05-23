import { Component, HostListener } from '@angular/core';
import { DcToastService } from 'dc-toast-ng';
import { BreadCrumbModel } from 'projects/darkchicken';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  private animationFrameId: number;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    this.animationFrameId = requestAnimationFrame(() => {
      const pos = document.documentElement;
      pos.style.setProperty('--x', e.clientX + 'px');
      pos.style.setProperty('--y', e.clientY + 'px');
    });
  }
}
