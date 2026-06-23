import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements AfterViewInit {
  filters = ['All', 'NFL', 'MLB', 'NBA', 'NCAA'];
  activeFilter = 'All';
  showAfter: boolean[] = [];

  projects = [
    { name: 'MetroSteel Arena', type: 'NFL', icon: 'trophy', color: '#0D1828', desc: 'Complete pre-season deep clean of 68,000-seat outdoor stadium.', sqft: '2.1M sq ft', time: '36 hrs' },
    { name: 'Riverside Ballpark', type: 'MLB', icon: 'dribbble', color: '#0A1C10', desc: 'Post-season concourse and seating bowl restoration.', sqft: '890K sq ft', time: '24 hrs' },
    { name: 'Apex Center', type: 'NBA', icon: 'star', color: '#130A22', desc: 'Monthly maintenance contract for indoor arena.', sqft: '520K sq ft', time: '18 hrs' },
    { name: 'Founders Stadium', type: 'NCAA', icon: 'mortarboard', color: '#1A1406', desc: 'Annual spring cleaning for 55,000-seat college football venue.', sqft: '1.6M sq ft', time: '42 hrs' },
    { name: 'Harbor Dome', type: 'NFL', icon: 'shield', color: '#061620', desc: 'Domed stadium full interior wash including roof support structures.', sqft: '3.2M sq ft', time: '72 hrs' },
    { name: 'Lakeside Diamond', type: 'MLB', icon: 'award', color: '#081A12', desc: 'Graffiti removal + full exterior pressure wash campaign.', sqft: '750K sq ft', time: '20 hrs' },
  ];

  ngOnInit() {
    this.showAfter = this.projects.map(() => false);
  }

  filteredProjects() {
    return this.activeFilter === 'All' ? this.projects : this.projects.filter(p => p.type === this.activeFilter);
  }

  setFilter(f: string) { this.activeFilter = f; }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.15 });
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  }
}
