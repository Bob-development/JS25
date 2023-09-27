import { 
  Component,
  render
 } from "./components/index";

import './style.css'

const app = document.querySelector('#app');

const history = [];

//MAKE WRAPPER FOR ABOUT US, VIDEOS, MUSIC, HISTORY
const navWrapper = new Component({
  tagName: 'div',
  className: 'nav-wrapper'
}).toHtml()

render(navWrapper, app);

//MAKE TITLE ABOUT US
const titleAboutUs = new Component({
  tagName: 'div',
  id: 'about-us',
  textContent: 'About us'
}).toHtml()

render(titleAboutUs, navWrapper);

//MAKE TITLE VIDEOS
const titleVideos = new Component({
  tagName: 'div',
  id: 'videos',
  textContent: 'Videos'
}).toHtml()

render(titleVideos, navWrapper);

//MAKE TITLE MUSIC
const titleMusic = new Component({
  tagName: 'div',
  id: 'music',
  textContent: 'Music'
}).toHtml()

render(titleMusic, navWrapper);

//MAKE TITLE HISTORY
const titleHistory = new Component({
  tagName: 'div',
  id: 'history',
  textContent: 'History'
}).toHtml()

render(titleHistory, navWrapper);

titleHistory.addEventListener('click', (e)=>{
  console.log(...history);
})

for(const child of navWrapper.children){
  if(child !== titleHistory){
    child.addEventListener('click', (e)=>{
      const currentDate = new Date();
      const fullDate = currentDate.getMonth() + 1 + '.' + currentDate.getDate() + '(' + currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds() + ')';
      const childsInfoAboutClick = [child.textContent,', at',fullDate].join(' ');
      history.push(childsInfoAboutClick);
    })
  } 
}