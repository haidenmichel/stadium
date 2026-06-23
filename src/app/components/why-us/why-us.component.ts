import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss']
})
export class WhyUsComponent implements AfterViewInit {
  features = [
    { icon: 'gear-wide-connected', title: 'Commercial-Grade Equipment', desc: 'We operate 4,000–6,000 PSI truck-mounted and trailer units — built for stadium-scale jobs, not residential use.' },
    { icon: 'patch-check', title: 'Certified Technicians', desc: 'Every crew member is OSHA-10 trained, background-checked, and certified in chemical handling and pressure equipment.' },
    { icon: 'moon-stars', title: 'Off-Hours Scheduling', desc: 'We work around your game calendar — nights, post-game, and off-season windows — with zero disruption to operations.' },
    { icon: 'leaf', title: 'Eco-Friendly Solutions', desc: 'EPA-compliant, biodegradable detergents that are tough on grime but safe for stormwater systems and turf.' },
    { icon: 'shield-lock', title: 'Fully Insured & Bonded', desc: '$5M commercial liability coverage, workers comp, and property damage protection on every job, every time.' },
    { icon: 'graph-up-arrow', title: 'Detailed Service Reports', desc: 'After every job you receive a digital report with before/after photos, square footage cleaned, and chemical usage logs.' },
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.15 });
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  }
}
