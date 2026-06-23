import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements AfterViewInit {
  testimonials = [
    {
      quote: "StadiumShine came in after our playoff run and had the entire 72,000-seat venue spotless in under 40 hours. The concourse detail alone was worth the contract.",
      name: "Derek Hollis", role: "Director of Stadium Operations", venue: "MetroSteel Arena — NFL",
      initials: "DH"
    },
    {
      quote: "We've tried four different vendors over the years. Nobody matches StadiumShine's consistency. The crew shows up, does the work, and leaves the place looking brand new.",
      name: "Sandra Kim", role: "VP of Facilities", venue: "Riverside Ballpark — MLB",
      initials: "SK"
    },
    {
      quote: "Their eco-friendly chemical approach was the deciding factor for us. We're a LEED-certified venue and they're one of the only vendors who can meet our environmental standards.",
      name: "James Okafor", role: "General Manager", venue: "Apex Center — NBA",
      initials: "JO"
    },
    {
      quote: "Post-game cleanup used to be a nightmare. Since switching to StadiumShine on a monthly contract, our facility inspection scores have gone from average to top-tier in the conference.",
      name: "Rachel Torres", role: "Athletic Director", venue: "Founders Stadium — NCAA",
      initials: "RT"
    },
    {
      quote: "The before/after photo reports they provide are incredibly helpful for justifying our maintenance budget to ownership. Transparent, professional, and excellent work.",
      name: "Marcus Webb", role: "COO", venue: "Harbor Dome — NFL",
      initials: "MW"
    },
    {
      quote: "We had a graffiti incident 3 days before opening day. StadiumShine had a crew out overnight and there was zero trace by morning. Absolutely clutch.",
      name: "Christine Park", role: "Stadium Manager", venue: "Lakeside Diamond — MLB",
      initials: "CP"
    }
  ];

  logos = ['NFL Venue Network', 'MLB Facilities Council', 'NBA Operations Group', 'NCAA Facilities Assoc.', 'MLS Stadium Alliance'];

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.15 });
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  }
}
