import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Speaker {
  id: string;
  name: string;
  designation?: string;
  bio: string;
  imageUrl?: string;
}

@Component({
  selector: 'app-speakers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent {
  speakers: Speaker[] = [
    {
      id: 'prabhas',
      name: 'PRABHAS KUMAR SINGH',
      designation: 'Panel Member',
      bio: 'Event host and community leader with extensive experience in organizing technical events and fostering collaboration.'
    },
    {
      id: 'prasenjit',
      name: 'DR. PRASENJIT BANERJEE',
      designation: 'Panel Member',
      bio: 'Expert in technical interview preparation with years of experience helping candidates secure positions at top tech companies.'
    },
    {
      id: 'chiranjit',
      name: 'CHIRANJIT NATH',
      designation: 'Panel Member',
      bio: 'Industry veteran with insights on career development and technical leadership in modern tech organizations.'
    },
    {
      id: 'kumaresh',
      name: 'KUMARESH KAR',
      designation: 'Panel Member',
      bio: 'Experienced professional specializing in community building and networking strategies for career advancement.'
    },
    {
      id: 'subrata',
      name: 'SUBRATA CHAKRABORTY',
      designation: 'Panel Member',
      bio: 'Tech leader with expertise in mentoring and guiding early-career professionals through industry transitions.'
    },
    {
      id: 'anjan',
      name: 'ANJAN DUTTA',
      designation: 'Panel Member',
      bio: 'Accomplished alumnus with extensive experience in bridging academic knowledge with industry requirements.'
    }
  ];
  
  getInitials(name: string): string {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .substring(0, 3);
  }
}