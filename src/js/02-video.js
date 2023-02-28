import Vimeo from '@vimeo/player';
import lodash from 'lodash.throttle';
/* HTML містить <iframe> з відео для Vimeo плеєра. 
Напиши скрипт, який буде зберігати поточний час відтворення 
відео у локальне сховище і, після перезавантаження сторінки, 
продовжувати відтворювати відео з цього часу. 
*/
const iframe = document.querySelector('iframe'); // вибрали тег з відео
const player = new Vimeo.Player(iframe); // передали тег відео в вімео плеєр створили плеєр
// плеєр увімкнутий
player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

// on(event: string, callback: function): void
// Add an event listener for the specified event. Will call
// the callback with a single parameter, data, that contains
// the data for that event.See events below for details.

const onPlay = function (data) {
  // data is an object containing properties specific to that event
};

player.on('play', onPlay);
