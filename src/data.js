import _ from 'lodash';
import sound0 from './assets/0.wav';
import sound1 from './assets/1.wav';
import sound2 from './assets/2.wav';
import sound3 from './assets/3.wav';
import sound4 from './assets/4.wav';
import sound5 from './assets/5.wav';
import sound6 from './assets/6.wav';
import sound7 from './assets/7.wav';
import sound8 from './assets/8.wav';
import sound9 from './assets/9.wav';
import sound10 from './assets/10.wav';
import sound11 from './assets/11.wav';
import sound12 from './assets/12.wav';
import sound13 from './assets/13.wav';
import sound14 from './assets/14.wav';
import sound15 from './assets/15.wav';
import sound16 from './assets/16.wav';
import sound17 from './assets/17.wav';
import sound18 from './assets/18.wav';
import sound19 from './assets/19.wav';
import sound20 from './assets/20.wav';
import sound21 from './assets/21.wav';
import sound22 from './assets/22.wav';
import sound23 from './assets/23.wav';
import sound24 from './assets/24.wav';

export const sounds = [
  { sound: sound0 },
  { sound: sound1 },
  { sound: sound2 },
  { sound: sound3 },
  { sound: sound4 },
  { sound: sound5 },
  { sound: sound6 },
  { sound: sound7 },
  { sound: sound8 },
  { sound: sound9 },
  { sound: sound10 },
  { sound: sound11 },
  { sound: sound12 },
  { sound: sound13 },
  { sound: sound14 },
  { sound: sound15 },
  { sound: sound16 },
  { sound: sound17 },
  { sound: sound18 },
  { sound: sound19 },
  { sound: sound20 },
  { sound: sound21 },
  { sound: sound22 },
  { sound: sound23 },
  { sound: sound24 },
];

export const winningCombinations = _.concat(
  _.range(5).map((i) => _.range(5).map((j) => i * 5 + j)),
  _.range(5).map((i) => _.range(5).map((j) => i + 5 * j)),
  [
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20],
  ] // diagonals
);

export const ticketNames = [
  '(child noises in the background)',
  'hello, hello?',
  'I need to jump into another call',
  'can everyone go on mute?',
  'could you please get closer to the mic?',
  '(load painful echo / feedback)',
  'next slide, please.',
  'can we take this offline?',
  'is __ on the call?',
  'could you share these slides afterwards?',
  'can somebody grant presenter rights?',
  'can you email that to everyone?',
  'sorry, I had problems logging in',
  '(animal noises in the background)',
  "sorry, I didn't find the conference id",
  'I was having connection issues',
  "I'll have to get back to you",
  'who just joined?',
  'sorry something __ with my calendar',
  'do you see my screen?',
  "let's wait for __!",
  'will you send the minutes?',
  'sorry, I was on mute',
  'can you repeat, please?',
];
