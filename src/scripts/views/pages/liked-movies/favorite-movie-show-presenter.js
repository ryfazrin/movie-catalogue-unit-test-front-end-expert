class FavoriteMovieShowPresenter {
  constructor({ view, favoriteMovies }) {
    this._view = view;
    this._favoriteMovies = favoriteMovies;

    this._favoriteMovies.getAllMovies();
  }

  _displayMovies(movies) {
    this._view.showFavoriteMovies(movies);
  }
}

export default FavoriteMovieShowPresenter;
