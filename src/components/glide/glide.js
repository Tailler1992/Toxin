import Glide from '@glidejs/glide';

const glide = () => {
  new Glide('.glide',{
    type: 'carousel',
    gap : 0,
    animationDuration: 300
  }).mount();
};

export default glide;
