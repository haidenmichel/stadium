import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements AfterViewInit {
  faqs = [
    { question: 'How long does a full stadium cleaning take?', answer: 'Depending on the size and scope, most full-stadium pressure washing jobs take between 24 and 72 hours. We deploy multiple crews simultaneously to maximize efficiency while working around your schedule.' },
    { question: 'Can you work during the off-season only?', answer: 'We work any time — off-season deep cleans, post-game rapid cleanups, monthly maintenance sessions, or emergency response. We coordinate directly with your ops team to ensure zero conflict with events.' },
    { question: 'Are your chemicals safe for the playing surface?', answer: 'Yes. We use EPA-compliant, biodegradable detergents and our field perimeter work is done with surface-specific products and water pressure settings to protect turf, warning tracks, and field-level surfaces.' },
    { question: 'Do you carry insurance?', answer: 'Absolutely. Every job is covered by $5M in commercial general liability, workers compensation, and property damage insurance. We provide full certificates of insurance before any work begins.' },
    { question: 'What is your service area?', answer: 'We are a national company with crews and equipment staged across 14 major markets including the Northeast, Southeast, Midwest, Southwest, and West Coast. We can mobilize to any US venue within 48-72 hours.' },
    { question: 'How do you handle large venues with multiple tiers?', answer: 'We use a systematic top-to-bottom, section-by-section approach with crews working in parallel across the venue. Our project managers coordinate crew placement to ensure efficient coverage of all levels including upper decks, club levels, and lower bowl.' },
    { question: 'Can we get a recurring contract?', answer: 'Yes — our Enterprise tier is built for organizations that need ongoing maintenance. We custom-build a service calendar around your season schedule, providing consistent, reliable cleaning throughout the year with a dedicated account team.' },
    { question: 'What information do you need for a quote?', answer: 'Typically: venue size (square footage or seating capacity), services needed, preferred service windows, and any known problem areas. We can often provide a ballpark estimate from this information and then refine it after a free on-site walkthrough.' },
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.15 });
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  }
}
