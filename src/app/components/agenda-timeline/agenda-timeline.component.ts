import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AgendaItem {
  id: string;
  title: string;
  description: string;
  speaker?: string;
  time?: string;
}

@Component({
  selector: 'app-agenda-timeline',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./agenda-timeline.component.scss'],
  templateUrl: './agenda-timeline.component.html'
})
export class AgendaTimelineComponent {
  agendaItems: AgendaItem[] = [
    {
      id: 'intro',
      title: 'IGNITE THE JOURNEY: INTRODUCTION & WELCOME',
      description: 'Opening remarks and welcome address to kickstart the event.',
      speaker: 'PRABHAS KUMAR SINGH',
      time: '5 mins'
    },
    {
      id: 'interview',
      title: 'MASTER THE GAME: HOW TO CRACK INTERVIEW',
      description: 'Learn effective strategies and techniques to ace your technical interviews.',
      speaker: 'DR. PRASENJIT BANERJEE',
      time: '20-30 mins'
    },
    {
      id: 'panel',
      title: 'UNLEASH THE POWER OF YOUR COMMUNITY: PANEL DISCUSSION',
      description: 'Industry experts share insights on leveraging community for career growth and opportunities about understanding the Interview Process, Resume building, Common Interview Questions, Red Flags and about the proper Etiquette',
      speaker: 'CHIRANJIT NATH, KUMARESH KAR, SUBRATA CHAKRABORTY',
      time: '20-25 mins'
    },
    {
      id: 'qa-community',
      title: 'BUILDING BRIDGES: COMMUNITY Q&A SESSION',
      description: 'Interactive Q&A with our panel to address your specific questions and concerns.',
      time: '10-15 mins'
    },
    {
      id: 'qa-open',
      title: 'VOICES OF THE FUTURE: OPEN FORUM Q&A',
      description: 'Open floor discussion where attendees can share their experiences and ask questions.',
      time: '10 mins'
    },
    {
      id: 'closing',
      title: 'TOGETHER WE RISE: CLOSING REMARKS',
      description: 'Summary of key takeaways and closing thoughts to end the event.',
      speaker: 'PRABHAS KUMAR SINGH',
      time: '5 mins'
    }
  ];
}