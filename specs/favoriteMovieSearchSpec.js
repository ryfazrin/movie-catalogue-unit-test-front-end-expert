import FavoriteMovieSearchPresenter from '../src/scripts/views/pages/liked-movies/favorite-movie-search-presenter';
import FavoriteMovieIdb from '../src/scripts/data/favorite-movie-idb';

describe('Search movies', () => {
  let presenter;

  const searchMovies = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setMovieSearchContainer = () => {
    document.body.innerHTML = `
      <div id="movie-search-container">
        <input type="text" id="query">
        <div class="movie-result-container">
          <ul class="movies"></ul>
        </div>
      </div>
    `;
  };

  const constructPresenter = () => {
    spyOn(FavoriteMovieIdb, 'searchMovies');
    presenter = new FavoriteMovieSearchPresenter({
      favoriteMovies: FavoriteMovieIdb,
    });
  };

  beforeEach(() => {
    setMovieSearchContainer();
    constructPresenter();
  });

  it('should be able to capture the query typed by the user', () => {
    searchMovies('film a');

    expect(presenter.latestQuery).toEqual('film a');
  });

  it('should ask the model to search for liked movies', () => {
    searchMovies('film a');

    expect(FavoriteMovieIdb.searchMovies).toHaveBeenCalledWith('film a');
  });

  it('should show the found movies', () => {
    presenter._showFoundMovies([
      { id: 1, title: 'Film Satu' },
    ]);

    const foundMovies = document.querySelectorAll('.movie');

    expect(foundMovies.length).toEqual(1);
  });
});
