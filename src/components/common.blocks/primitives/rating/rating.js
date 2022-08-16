import './rating.scss';

const rating = () => {
  const ratings = document.querySelectorAll('.rating');

  ratings.forEach(rating => {
    const ratingActive = rating.querySelector('.rating__active');
    const ratingValue = rating.querySelector('.rating__value');
    const ratingstars = rating.querySelectorAll('.rating__star');
    let rank = ratingValue.textContent;

    function setRating(rank) {
      ratingActive.style.width = `${rank / 0.05}%`;
    }

    setRating(rank);

    ratingstars.forEach((star, i) => {
      star.addEventListener('mouseenter', () => {
        setRating(star.value);
      });

      star.addEventListener('mouseleave', () => {
        setRating(rank);
      });

      star.addEventListener('click', () => {
        rank = i + 1;
        ratingValue.textContent = rank;
        setRating(rank);
      });
    });
  });
};

export default rating;
