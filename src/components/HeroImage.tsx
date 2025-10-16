import { useTheme } from '../context/ThemeContext.tsx'; // You'll need a theme context
import lightImage from '../assets/navbar-4.png';
import darkImage from '../assets/navbar-4-dark.png';

function HeroImage() {
  const { theme } = useTheme();
  
  return (
    <img
      src={theme === 'dark' ? darkImage : lightImage}
      id="hero-image"
      alt="Hero Image"
      className="hero-img"
    />
  );
}

export default HeroImage;