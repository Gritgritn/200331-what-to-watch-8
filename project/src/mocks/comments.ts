import { datatype, date, internet, lorem } from 'faker';
import type { Comment } from '../types/types';

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

export { createMockComments };
