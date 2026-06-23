import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements AfterViewInit {
  plans = [
    {
      name: 'Essential', price: 'From $8K', unit: '/ service', featured: false,
      desc: 'Ideal for smaller collegiate or minor league venues with standard cleaning needs.',
      features: [
        { text: 'Up to 25,000 sq ft', included: true },
        { text: 'Exterior pressure wash', included: true },
        { text: 'Concourse cleaning', included: true },
        { text: 'Seating area wash', included: false },
        { text: 'Graffiti removal', included: false },
        { text: 'Service report & photos', included: true },
        { text: 'Priority scheduling', included: false },
      ]
    },
    {
      name: 'Professional', price: 'From $22K', unit: '/ service', featured: true,
      desc: 'The complete solution for mid-size professional and large collegiate venues.',
      features: [
        { text: 'Up to 100,000 sq ft', included: true },
        { text: 'Exterior pressure wash', included: true },
        { text: 'Concourse + restroom corridors', included: true },
        { text: 'Full seating bowl detail', included: true },
        { text: 'Graffiti removal', included: true },
        { text: 'Service report & photos', included: true },
        { text: 'Priority scheduling', included: false },
      ]
    },
    {
      name: 'Enterprise', price: 'Custom', unit: 'annual contract', featured: false,
      desc: 'Full-season partnership for major professional venues with ongoing needs.',
      features: [
        { text: 'Unlimited square footage', included: true },
        { text: 'Full exterior & interior', included: true },
        { text: 'Post-game rapid response', included: true },
        { text: 'Full seating bowl + field perimeter', included: true },
        { text: 'Unlimited graffiti response', included: true },
        { text: 'Monthly service reports', included: true },
        { text: 'Dedicated account manager', included: true },
      ]
    }
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.15 });
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  }
}
