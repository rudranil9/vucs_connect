import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkModeSubject = new BehaviorSubject<boolean>(false);
  darkMode$ = this.darkModeSubject.asObservable();

  constructor() {
    // Check if user has a preference saved in localStorage
    const savedPreference = localStorage.getItem('darkMode');
    if (savedPreference) {
      this.darkModeSubject.next(savedPreference === 'true');
    } else {
      // Check if user prefers dark mode in their OS settings
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.darkModeSubject.next(prefersDark);
    }
  }

  toggleDarkMode(): void {
    const newValue = !this.darkModeSubject.value;
    localStorage.setItem('darkMode', newValue.toString());
    this.darkModeSubject.next(newValue);
  }

  isDarkMode(): boolean {
    return this.darkModeSubject.value;
  }
}