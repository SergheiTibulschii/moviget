export interface IMovie {
    popularity: number,
    vote_count: integer,
    video: boolean,
    poster_path: string | null,
    id: integer,
    adult: boolean,
    backdrop_path: string | null,
    original_language: string,
    original_title: string,
    genre_ids: number[],
    title: string,
    vote_average: number,
    overview: string,
    release_date: string
}
