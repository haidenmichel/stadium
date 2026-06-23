import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements AfterViewInit {
  steps = [
    { num: '01', icon: 'clipboard2-check', title: 'Site Assessment', desc: 'Our project manager conducts a full walkthrough of your facility, mapping all surfaces, drainage points, and areas of concern.' },
    { num: '02', icon: 'file-earmark-text', title: 'Custom Quote', desc: 'We deliver a detailed line-item quote within 24 hours, outlining scope, scheduling windows, and estimated crew size.' },
    { num: '03', icon: 'calendar3', title: 'Scheduling', desc: 'We coordinate directly with your operations team to lock in service windows that never conflict with events or practices.' },
    { num: '04', icon: 'droplet-half', title: 'Execution', desc: 'Our certified crews arrive with all equipment and begin systematic cleaning from top to bottom, section by section.' },
    { num: '05', icon: 'check2-all', title: 'Final Inspection', desc: 'A quality control supervisor walks the entire venue with your rep, documents results, and provides your full service report.' },
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.15 });
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  }
}
