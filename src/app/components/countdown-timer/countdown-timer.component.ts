import { Component, OnInit, OnDestroy, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

type TimeUnit = 'days' | 'hours' | 'minutes' | 'seconds';

@Component({
  selector: 'app-countdown-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChildren('flipCards') flipCards!: QueryList<ElementRef>;
  
  private subscription?: Subscription;
  private readonly eventDate = new Date('June 7, 2025 20:00:00 GMT+0530');
  private previousValues: TimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  
  timeUnits: TimeUnit[] = ['days', 'hours', 'minutes', 'seconds'];
  
  timeLeft: TimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  
  ngOnInit() {
    this.calculateTimeLeft();
    this.subscription = interval(1000).subscribe(() => {
      this.calculateTimeLeft();
      this.checkForFlip();
    });
  }
  
  ngAfterViewInit() {
    // Initial setup of flip cards
    this.previousValues = {...this.timeLeft};
  }
  
  private checkForFlip() {
    // Check which values changed and animate those cards
    this.timeUnits.forEach((unit, index) => {
      if (this.timeLeft[unit] !== this.previousValues[unit] && this.flipCards) {
        const element = this.flipCards.toArray()[index]?.nativeElement;
        if (element) {
          const inner = element.querySelector('.flip-card-inner');
          if (inner) {
            inner.classList.add('flip');
            setTimeout(() => {
              inner.classList.remove('flip');
            }, 800);
          }
        }
      }
    });
    
    // Update previous values
    this.previousValues = {...this.timeLeft};
  }
  
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  
  private calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = this.eventDate.getTime() - now;
    
    if (difference > 0) {
      this.timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    } else {
      this.timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }
}