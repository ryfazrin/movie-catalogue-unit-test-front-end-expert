class FavoriteMovieShowPresenter {
  constructor({ view }) {
    this._view = view;
  }

  _displayMovies(movies) {
    this._view.showFavoriteMovies(movies);
  }
}

export default FavoriteMovieShowPresenter;
