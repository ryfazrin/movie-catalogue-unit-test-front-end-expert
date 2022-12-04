describe('Showing all favorite movies', () => {
  describe('When no movies have been liked', () => {
    it('should render the information that no movies have been liked', () => {
      const presenter = new FavoriteMovieShowPresenter({
        view,
      });

      const movies = [];
      presenter._displayMovies(movies);
    });
  });
});
