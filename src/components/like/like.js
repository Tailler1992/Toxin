const like = () => {
  const likes = document.querySelectorAll('.like');

  likes.forEach(like => {
    const heart = like.querySelector('.like__heart');
    const count = like.querySelector('.like__quantity')

    like.addEventListener('click', () => {

      if (like.classList.contains('like_active')) {
        heart.textContent = "favorite_border";
        count.textContent--;
        like.classList.remove('like_active');
      } else {
        heart.textContent = "favorite";
        count.textContent++;
        like.classList.add('like_active');
      }
    });
  });
};

export default like;
