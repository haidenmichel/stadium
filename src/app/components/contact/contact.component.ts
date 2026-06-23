import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {
  submitted = false;

  contactInfo = [
    { icon: 'telephone-fill', label: 'Call Us', value: '1-800-STADIUM (1-800-782-3486)' },
    { icon: 'envelope-fill', label: 'Email', value: 'ops@stadiumshinepro.com' },
    { icon: 'geo-alt-fill', label: 'Headquarters', value: 'Boulder, CO — Serving All 50 States' },
    { icon: 'clock-fill', label: 'Response Time', value: 'Quote within 24 hours' },
  ];

  serviceOptions = [
    { key: 'pressure', label: 'Pressure Washing' },
    { key: 'seating', label: 'Seating Areas' },
    { key: 'concourse', label: 'Concourse' },
    { key: 'field', label: 'Field Perimeter' },
    { key: 'graffiti', label: 'Graffiti Removal' },
    { key: 'contract', label: 'Annual Contract' },
  ];

  onSubmit(form: any) {
    if (form.valid) {
      this.submitted = true;
    }
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.15 });
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  }
}
