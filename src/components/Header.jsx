import logoImage from '../assets/react-core-concepts.png';
import './headers.css';
const description = ['Fundamental', 'Crucial', 'Core'];

function getRandomDescription() {
    let index = Math.floor(Math.random() * 3);
    console.log(index);
    return description[index];
  }
  
  function Header() {
    return <header>
      <img src={logoImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {getRandomDescription()} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>;
  }

  export default Header;