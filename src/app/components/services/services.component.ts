import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements AfterViewInit {
  services = [
    {
      icon: 'water',
      title: 'High-Pressure Washing',
      desc: 'Industrial-grade pressure washing of all exterior and interior stadium surfaces using 4,000+ PSI commercial equipment.',
      features: ['Concrete & asphalt surfaces', 'Exterior facade cleaning', 'Loading dock areas']
    },
    {
      icon: 'person-seats',
      title: 'Seating Area Cleaning',
      desc: 'Deep cleaning of individual seats, rows, cup holders, and surrounding surfaces throughout the entire bowl.',
      features: ['Seat sanitization', 'Armrest & cup holder scrubbing', 'ADA section care']
    },
    {
      icon: 'arrow-left-right',
      title: 'Concourse Cleaning',
      desc: 'Full concourse pressure washing including food court areas, restroom corridors, and high-traffic walkways.',
      features: ['Grease removal from food courts', 'Anti-slip surface treatment', 'Column & wall washing']
    },
    {
      icon: 'award',
      title: 'Field Perimeter Cleaning',
      desc: 'Cleaning of turf borders, warning tracks, dugout areas, and field-level walkways without damaging playing surfaces.',
      features: ['Warning track washing', 'Dugout deep clean', 'Bullpen areas']
    },
    {
      icon: 'x-octagon',
      title: 'Graffiti Removal',
      desc: 'Rapid-response graffiti and stain removal using professional-grade solvents safe for all surface types.',
      features: ['Surface-safe solvents', '24hr response available', 'All surface types']
    },
    {
      icon: 'calendar-check',
      title: 'Annual Maintenance Contracts',
      desc: 'Year-round scheduled maintenance programs tailored to your event calendar, keeping your venue pristine all season.',
      features: ['Custom scheduling', 'Priority response', 'Detailed service reports']
    }
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.15 });
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  }
}
