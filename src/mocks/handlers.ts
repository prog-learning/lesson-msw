import { rest } from 'msw';

export const getBookHandler = rest.get('/books', (_req, res, ctx) => {
  return res(
    // Respond with a 200 status code
    ctx.status(200),
    ctx.json([
      {
        id: 1,
        title: 'Harry Potter and the Chamber of Secrets',
        description:
          'Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series.',
      },
      {
        id: 2,
        title: 'Jurassic Park',
        description:
          'Jurassic Park is a 1990 science fiction adventure film directed by Steven Spielberg. The screenplay was written by Michael Crichton from a story by Crichton and David Koepp.',
      },
    ]),
  );
});

export const postBookHandler = rest.post('/api/books', (_req, res, ctx) => {
  return res(
    // Respond with a 200 status code
    ctx.status(200),
    ctx.json({
      id: 3,
      title: 'Jurassic Park',
      description:
        'Jurassic Park is a 1990 science fiction adventure film directed by Steven Spielberg. The screenplay was written by Michael Crichton from a story by Crichton and David Koepp.',
    }),
  );
});

export const handlers = [getBookHandler, postBookHandler];
