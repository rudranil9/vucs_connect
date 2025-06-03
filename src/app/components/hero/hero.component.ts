import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
declare var gsap: any; // Using GSAP from CDN

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, AfterViewInit {
  @ViewChild('binaryRainContainer') binaryRainContainer?: ElementRef;
  patternBackgroundStyle = `url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%221%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`;

  // Tech icons for the floating elements
  techIcons = [
    'fa-solid fa-microchip',
    'fa-solid fa-code',
    'fa-solid fa-laptop-code',
    'fa-solid fa-server',
    'fa-solid fa-database',
    'fa-solid fa-network-wired',
    'fa-solid fa-wifi',
    'fa-solid fa-robot',
    'fa-solid fa-terminal',
    'fa-solid fa-cog'
  ];

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    if (this.binaryRainContainer) {
      this.createBinaryRain();
    }

    // Initialize animations with GSAP if available
    if (typeof gsap !== 'undefined') {
      this.initGsapAnimations();
    }
  }

  // Get a random position for floating tech icons
  getRandomPosition(): number {
    return Math.floor(Math.random() * 80) + 10; // Keep within 10-90% of container
  }

  // Get a tech icon class based on index
  getTechIcon(index: number): string {
    return this.techIcons[index % this.techIcons.length];
  }

  // Create binary rain effect
  createBinaryRain() {
    if (!this.binaryRainContainer) return;
    
    const container = this.binaryRainContainer.nativeElement;
    const containerWidth = container.offsetWidth;
    const numColumns = Math.floor(containerWidth / 20); // One column every 20px
    
    for (let i = 0; i < numColumns; i++) {
      const column = document.createElement('div');
      column.className = 'binary-column';
      column.style.left = `${(i * 20) + Math.random() * 10}px`;
      column.style.animationDuration = `${Math.random() * 10 + 5}s`;
      column.style.animationDelay = `${Math.random() * 5}s`;
      column.style.position = 'absolute';
      column.style.top = '-100px';
      column.style.color = 'rgba(0, 247, 255, 0.3)';
      column.style.fontSize = '12px';
      column.style.fontFamily = 'monospace';
      column.style.textShadow = '0 0 5px rgba(0, 247, 255, 0.5)';
      column.style.userSelect = 'none';
      column.style.animation = 'binary-rain linear infinite';
      column.style.zIndex = '1';
      
      // Create binary content (0s and 1s)
      const length = Math.floor(Math.random() * 20) + 10;
      for (let j = 0; j < length; j++) {
        const binary = document.createElement('div');
        binary.textContent = Math.random() > 0.5 ? '1' : '0';
        binary.style.opacity = `${Math.random() * 0.5 + 0.3}`;
        column.appendChild(binary);
      }
      
      container.appendChild(column);
    }
    
    // Add binary rain animation to document
    const style = document.createElement('style');
    style.textContent = `
      @keyframes binary-rain {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(100vh); }
      }
    `;
    document.head.appendChild(style);
  }

  // Initialize GSAP animations if available
  initGsapAnimations() {
    // Staggered text animation for the title
    const titleText = document.querySelector('.tech-heading h1');
    if (titleText) {
      gsap.from(titleText, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out'
      });
    }
  }
}