import FavoriteMovieSearchPresenter from "../src/scripts/views/pages/liked-movies/favorite-movie-search-presenter";

describe('Search movies', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="movie-search-container">
        <input type="text" id="query">
        <div class="movie-result-container">
          <ul class="movies"></ul>
        </div>
      </div>
    `;
  });
  
  it('should be able to capture the query typed by the user', () => {
    const presenter = new FavoriteMovieSearchPresenter();
    const queryElement = document.getElementById('query');
    queryElement.value = 'film a';
    queryElement.dispatchEvent(new Event('change'));

    expect(presenter.userQuery).toEqual('film a');
  });
});
