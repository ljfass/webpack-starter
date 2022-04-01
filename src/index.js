import genergateJoke from "./generateJoke";
import './styles/index.scss'
import code from './images/code.png'
genergateJoke();


function component() {
    const element = document.createElement('div');
 
    // Lodash, now imported by this script
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // element.classList.add('hello');
 
   // Add the image to our existing div.
   const myIcon = new Image();
   myIcon.src = code;
   myIcon.width = 100
 
   element.appendChild(myIcon);
 
    return element;
  }
 
  document.body.appendChild(component());