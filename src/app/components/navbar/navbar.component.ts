import { Component, Output, EventEmitter, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() themeToggled = new EventEmitter<void>();
  isScrolled = false;
  isMobileMenuOpen = false;
  isDarkMode = true; // Always use dark mode
  activeSection = '';
  
  navItems = [
    { 
      label: 'Home', 
      link: 'home',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>'
    },
    { 
      label: 'Event Countdown', 
      link: 'countdown',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
    },
    { 
      label: 'Event Schedule', 
      link: 'agenda',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>'
    },
 
    { 
      label: 'Guest Speakers', 
      link: 'speakers',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>'
    },
    { 
      label: 'Join In', 
      link: 'join',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>'
    }
  ];
  
  constructor(private router: Router) {}
  
  ngOnInit() {
    document.body.classList.add('dark-mode'); // Always use dark mode
    this.setActiveBasedOnScroll();
  }
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
    this.setActiveBasedOnScroll();
  }
  
  setActiveBasedOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    
    let currentSection = '';
    const scrollPosition = window.scrollY + 200; // Adding offset for better UX
    
    sections.forEach((section) => {
      const sectionTop = (section as HTMLElement).offsetTop;
      const sectionHeight = (section as HTMLElement).offsetHeight;
      const sectionId = section.getAttribute('id') || '';
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = sectionId;
      }
    });
    
    this.activeSection = currentSection;
  }
  
  setActive(section: string, event?: Event) {
    if (event) {
      event.preventDefault(); // Prevent default navigation
    }
    
    this.activeSection = section;
    
    // Smooth scroll to the section
    const targetElement = document.getElementById(section);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  // Theme toggle removed - site permanently in dark mode
  toggleTheme() {
    // No action needed as we're always in dark mode
    return;
  }
  
  toggleMobileMenu() {
    // Force a delay to ensure the DOM has time to process previous actions
    setTimeout(() => {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      console.log('Mobile menu toggled:', this.isMobileMenuOpen);
      
      // Add a class to the body for better styling control
      if (this.isMobileMenuOpen) {
        document.body.classList.add('mobile-menu-open');
        document.body.style.overflow = 'hidden';
      } else {
        document.body.classList.remove('mobile-menu-open');
        document.body.style.overflow = '';
      }
      
      // Force a redraw to ensure the menu visibility changes are applied
      document.body.style.display = 'none';
      document.body.offsetHeight; // This line forces a reflow
      document.body.style.display = '';
    }, 10);
  }
  
  closeMobileMenu() {
    if (this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
      document.body.classList.remove('mobile-menu-open');
      document.body.style.overflow = '';
    }
  }
  
  handleMobileNavClick(section: string, event?: Event) {
    if (event) {
      event.preventDefault();
    }
    
    this.setActive(section);
    this.closeMobileMenu();
    
    // Smooth scroll to the section
    const targetElement = document.getElementById(section);
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }, 300); // Small delay to allow mobile menu to close first
    }
  }
  
  // Method removed as it was a duplicate of the one above
}