import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerLinks = [
    {
      title: 'Services', links: [
        { label: 'Pressure Washing', anchor: 'services' },
        { label: 'Seating Areas', anchor: 'services' },
        { label: 'Concourse', anchor: 'services' },
        { label: 'Graffiti Removal', anchor: 'services' },
        { label: 'Annual Contracts', anchor: 'services' },
      ]
    },
    {
      title: 'Company', links: [
        { label: 'About Us', anchor: 'about' },
        { label: 'Our Process', anchor: 'process' },
        { label: 'Portfolio', anchor: 'portfolio' },
        { label: 'Testimonials', anchor: 'testimonials' },
        { label: 'Pricing', anchor: 'pricing' },
      ]
    }
  ];

  certs = ['OSHA', 'EPA', 'ISSA', 'BBB A+'];
}
