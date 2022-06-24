import Glide from '@glidejs/glide';
import './glide.scss';

const glide = () => {
  const glideCarousel = document.querySelectorAll('.glide');

  glideCarousel.forEach(glide => {
    new Glide(glide, {
      type: 'carousel',
      gap: 0,
      animationDuration: 300
    }).mount();
  });
};

export default glide;
