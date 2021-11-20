import { datatype, date, internet, lorem } from 'faker';
import type { Comment, CommentPost, ServerCommentGet } from '../types/types';
import { LINE_BREAK } from '../constants';

const createMockComment = (): Comment  => ({
  id: datatype.number(),
  user: {
    id: datatype.number(),
    name: internet.userName(),
  },
  date: date.recent(),
  rating: datatype.number(),
  comment: lorem.paragraphs(3, LINE_BREAK),
});

const createMockComments = (): Comment[] => {
  const amount = datatype.number({
    min: 1,
    max: 10,
  });

  const mockComments = new Array(amount)
    .fill(null)
    .map(() => createMockComment())
    .map((comment, index) => ({
      ...comment,
      id: index + 1,
    }));

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
  comment: lorem.paragraphs(3, LINE_BREAK),
});

const createServerMockComments = (): ServerCommentGet[] => {
  const amount = datatype.number({
    min: 1,
    max: 10,
  });

  const mockComments = new Array(amount).fill(null).map(() => createMockServerComment());

  return mockComments;
};


export { createMockComment, createMockComments, createMockNewComment, createMockServerComment, createServerMockComments };
