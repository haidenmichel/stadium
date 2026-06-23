import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  servicesPrev = [
    { icon: 'water', title: 'High-Pressure Washing', desc: 'Industrial 4,000–6,000 PSI equipment covering every surface from concourses to exterior facades.' },
    { icon: 'person-seats', title: 'Seating Bowl Detail', desc: 'Deep cleaning of every seat, armrest, and cup holder across the full bowl, every level.' },
    { icon: 'x-octagon', title: 'Graffiti Removal', desc: 'Rapid-response surface-safe removal available 24/7, with no trace left behind.' },
  ];

  stats = [
    { num: '350+', label: 'Stadiums Cleaned' },
    { num: '18+', label: 'Years in Business' },
    { num: '240+', label: 'Crew Members' },
    { num: '98%', label: 'Client Retention' },
  ];

  testimonials = [
    { quote: "StadiumShine came in after our playoff run and had the entire 72,000-seat venue spotless in under 40 hours.", name: "Derek Hollis", role: "Director of Stadium Operations", venue: "MetroSteel Arena — NFL", initials: "DH" },
    { quote: "We've tried four different vendors over the years. Nobody matches StadiumShine's consistency.", name: "Sandra Kim", role: "VP of Facilities", venue: "Riverside Ballpark — MLB", initials: "SK" },
    { quote: "Their eco-friendly chemical approach was the deciding factor for us. They're one of the only vendors who meet our environmental standards.", name: "James Okafor", role: "General Manager", venue: "Apex Center — NBA", initials: "JO" },
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.15 });
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  }
}
