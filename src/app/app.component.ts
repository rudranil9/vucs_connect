import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './fix-vertical-strip.css']
})
export class AppComponent {
  isDarkMode = false;

  constructor(private themeService: ThemeService) {
    this.isDarkMode = this.themeService.isDarkMode();
    this.themeService.darkMode$.subscribe(isDark => {
      this.isDarkMode = isDark;
    });
  }

  toggleTheme() {
    // Add a smooth body class transition before toggling the theme
    document.body.classList.add('theme-transition');
    
    // Toggle the theme
    this.themeService.toggleDarkMode();
    
    // Remove the transition class after the transition completes
    setTimeout(() => {
      document.body.classList.remove('theme-transition');
    }, 1000);
  }
}