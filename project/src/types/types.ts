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

type CommentCreatePayload = {
  rating: number,
  comment: string,
}

type Comment = CommentCreatePayload & {
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

type ValuesOf<T> = T[keyof T]

export type {ParamsWithId, Comment, Film, ValuesOf};
