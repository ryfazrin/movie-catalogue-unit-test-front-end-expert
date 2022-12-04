import FavoriteMovieShowPresenter from '../src/scripts/views/pages/liked-movies/favorite-movie-show-presenter';

describe('Showing all favorite movies', () => {
  let view;

  const rendertemplate = () => {
    view = new FavoriteMovieSearchView();
    document.body.innerHTML = view.getFavoriteMovieTemplate();
  };

  beforeEach(() => {
    rendertemplate();
  });

  describe('When no movies have been liked', () => {
    it('should render the information that no movies have been liked', () => {
      const presenter = new FavoriteMovieShowPresenter({
        view,
      });

      const movies = [];
      presenter._displayMovies(movies);

      expect(document.querySelectorAll('.movie-item__not__found').length)
        .toEqual(1);
    });
  });
});
