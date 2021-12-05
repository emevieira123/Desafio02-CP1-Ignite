import { MovieCard } from "./MovieCard";
import '../styles/content.scss';
import { Header } from "./Header";

interface ContentProps {
  selectedGenre: { title: string };
  movies: Array<{
    Title: string;
    Poster: string;
    Runtime: string;
    imdbID: string;
    Ratings: Array<{ Value: string; }>;
  }>
}

export function Content({ movies, selectedGenre }: ContentProps) {
  return (
    <div className="container">
      
      <Header selectedGenre={selectedGenre} />

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}