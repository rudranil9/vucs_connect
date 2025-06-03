import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { CountdownTimerComponent } from '../../components/countdown-timer/countdown-timer.component';
import { AgendaTimelineComponent } from '../../components/agenda-timeline/agenda-timeline.component';
import { SpeakersComponent } from '../../components/speakers/speakers.component';
import { JoinMeetingComponent } from '../../components/join-meeting/join-meeting.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    CountdownTimerComponent,
    AgendaTimelineComponent,
    SpeakersComponent,
    JoinMeetingComponent
  ],
  template: `
    <div class="home-container">
      <!-- Tech background elements -->
      <div class="tech-bg-elements">
        <div class="circuit-lines"></div>
        <div class="digital-particles"></div>
      </div>
      
      <app-hero></app-hero>
      <app-countdown-timer></app-countdown-timer>
      <app-agenda-timeline></app-agenda-timeline>
      <app-speakers></app-speakers>
      <app-join-meeting></app-join-meeting>
    </div>
  `,
  styles: [`
    .home-container {
      overflow-x: hidden;
      position: relative;
      width: 100%;
      max-width: 100vw;
    }
    
    .tech-bg-elements {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
      opacity: 0.07;
    }
    
    .circuit-lines {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      /* Modified pattern to avoid vertical line artifacts */
      background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDM1KSI+PHBhdGggZD0iTTAgMCBMIDAgNTAgTSAwIDI1IEwgMjUgMjUgTSA3NSAyNSBMIDEwMCAyNSIgc3Ryb2tlPSIjMDA4NGZmIiBzdHJva2Utd2lkdGg9IjAuNSIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjI1IiBjeT0iMjUiIHI9IjIiIGZpbGw9IiMwMDg0ZmYiLz48Y2lyY2xlIGN4PSI3NSIgY3k9IjI1IiByPSIyIiBmaWxsPSIjMDA4NGZmIi8+PC9wYXR0ZXJuPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=');
      background-repeat: repeat;
      background-size: 100px 100px;
      animation: circuit-pulse 10s linear infinite;
    }
    
    .digital-particles {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: radial-gradient(circle, #00a8ff 1px, transparent 1px);
      background-size: 50px 50px;
      animation: particle-float 20s linear infinite;
    }
    
    @keyframes circuit-pulse {
      0% { opacity: 0.1; }
      50% { opacity: 0.3; }
      100% { opacity: 0.1; }
    }
    
    @keyframes particle-float {
      0% { background-position: 0 0; }
      100% { background-position: 50px 50px; }
    }
  `]
})
export class HomeComponent {}