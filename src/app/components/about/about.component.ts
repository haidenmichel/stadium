import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {
  badges = ['OSHA Certified', 'EPA Compliant', 'Fully Insured', 'Background-Checked Crews', 'SBA Certified'];

  stats = [
    { value: '350+', label: 'Stadiums Cleaned', desc: 'Across NFL, MLB, NBA, NHL, MLS & NCAA' },
    { value: '18+', label: 'Years in Business', desc: 'Founded in Boulder, CO' },
    { value: '240+', label: 'Team Members', desc: 'Certified, trained cleaning specialists' },
    { value: '48hrs', label: 'Average Turnaround', desc: 'Full stadium cleaned top to bottom' },
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.15 });
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  }
}
