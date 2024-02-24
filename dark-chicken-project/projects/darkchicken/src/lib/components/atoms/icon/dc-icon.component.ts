import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DCService } from '../../../services/dc.service';
import { Icons } from '../../assets/types/dc-types';

@Component({
  selector: 'dca-icon',
  templateUrl: 'dc-icon.component.html',
  styleUrls: ['../../assets/style.css', 'dc-icon.component.css']
})
export class DCIconComponent implements OnInit {
  
  @Input() icon!: Icons;
  
  svgContent!: SafeHtml;

  constructor(private iconService: DCService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.iconService.getIconSVG(this.icon).subscribe((data:string) => {
      this.svgContent = this.getTrustedSvgContent(data);
    });
  }

  getTrustedSvgContent(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
