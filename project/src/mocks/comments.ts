import { datatype, date, internet, lorem } from 'faker';
import type { Comment, CommentPost, ServerCommentGet } from '../types/types';

const createMockComment = (): Comment  => ({
  id: datatype.number(),
  user: {
    id: datatype.number(),
    name: internet.userName(),
  },
  date: date.recent(),
  rating: datatype.number(),
  comment: lorem.paragraphs(),
});

const createMockComments = (): Comment[] => {
  const amount = datatype.number(10);

  const mockComments = new Array(amount).fill(null).map(() => createMockComment());

  return mockComments;
};

const createMockNewComment = (): CommentPost => ({
  rating: datatype.number(),
  comment: lorem.paragraphs(),
});

const createMockServerComment = (): ServerCommentGet  => ({
  id: datatype.number(),
  user: {
    id: datatype.number(),
    name: internet.userName(),
  },
  date: date.recent().toISOString(),
  rating: datatype.number(),
  comment: lorem.paragraphs(),
});

const createServerMockComments = (): ServerCommentGet[] => {
  const amount = datatype.number(10);

  const mockComments = new Array(amount).fill(null).map(() => createMockServerComment());

  return mockComments;
};


export { createMockComment, createMockComments, createMockNewComment, createMockServerComment, createServerMockComments };
