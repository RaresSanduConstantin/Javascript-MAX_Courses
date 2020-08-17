const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector('#add-modal')
// const addMovieModal = document.body.children[1]

// console.log(addMovieModal)

const startAddMovieButton = document.querySelector("header button");
// console.log(startAddMovieButton);

const backdrop = document.getElementById("backdrop");
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  addBackrop();
};

const addBackrop = () => {
  backdrop.classList.toggle("visible");
};

const cancelAddMovie = () => {
  toggleMovieModal();
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovie);
