import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { BASE_API_URL } from 'data/baseUrl';

const server = setupServer(
  
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
