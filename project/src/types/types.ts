type Film = {
    id: number,
    name: string,
    posterImage: string,
    previewImage: string,
    backgroundImage: string,
    backgroundColor: string,
    videoLink: string,
    previewVideoLink: string,
    description: string,
    rating: number,
    scoresCount: number,
    director: string,
    actors: string[],
    runTime: number,
    genre: string,
    released: number,
  isFavorite: boolean,
}

type CommentPost = {
  rating: number,
  comment: string,
}

type CommentGet = CommentPost & {
  id: number,
  user: {
    id: number,
    name: string,
  },
  date: Date,
}

type ParamsWithId = {
  id: string
}

export type ValuesOf<T> = T[keyof T]

export type {ParamsWithId, CommentGet, Film};
