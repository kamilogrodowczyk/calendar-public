import { rest } from 'msw';
import { BASE_API_URL } from 'data/baseUrl';

const eventElements = [
  {
    comment: '',
    company: '',
    creationDate: '01.10.2021',
    creationHour: '12:14',
    day: '07',
    description: '',
    eventDate: '07 pażdziernika 2021',
    formattedDateToSort: '20211007115318',
    image: '',
    time: '',
    title: 'Spotkanie',
  },
  {
    comment: '',
    company: '',
    creationDate: '01.10.2021',
    creationHour: '12:14',
    day: '14',
    description: '',
    eventDate: '14 pażdziernika 2021',
    formattedDateToSort: '20211007115418',
    image: '',
    time: '',
    title: 'Zebranie',
  },
];

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxM…IwMX0.dlrkoxYHa9RISiVkEfypurFAUAdp4N3y9IIqVhERgkw';

const userData = {
  token,
  user: {
    _id: '610ab8e305a18b06fe10dd32',
    company: 'admin',
    firstName: 't',
    lastName: 't',
    email: 'tt@tt.com',
    password: '$2a$08$jp9EpeAgwsnvKus8twZlYuYyNYdtsxWYVB0R0mRoxjO7uI.OhE8bW',
    createdAt: '2021-08-04T15:57:23.816Z',
    updatedAt: '2021-08-04T15:57:23.816Z',
    __v: 0,
  },
};

const companyElements = [
  { createdAt: '2021-10-12T09:35:28.207Z', _id: '616556e0d6a779061edf0ed0', company: 'Krispol', modificatedName: 'krispol', __v: 0 },
  { createdAt: '2021-10-12T09:35:28.207Z', _id: '616556e0d6a779061edf0ed1', company: 'Binstudio', modificatedName: 'binstudio', __v: 0 },
];

export const handlers = [
  // ---------------EVENTS--------------
  rest.get(`${BASE_API_URL}/event`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ eventElements }));
  }),
  rest.post(`${BASE_API_URL}/create-event`, (req, res, ctx) => {
    const newEvent = req.body;
    return res(ctx.status(200), ctx.json({ newEvent }));
  }),
  rest.put(`${BASE_API_URL}/event/:formattedDateToSort`, (req, res, ctx) => {
    const newEvent = req.body;
    return res(ctx.status(200), ctx.json({ newEvent }));
  }),
  rest.delete(`${BASE_API_URL}/event/:formattedDateToSort`, (req, res, ctx) => {
    const { formattedDateToSort } = req.params;
    const deletedEvent = eventElements.filter((event) => event.formattedDateToSort === formattedDateToSort);
    return res(ctx.status(200), ctx.json({ deletedEvent }));
  }),
  // ---------------COMPANY--------------
  rest.get(`${BASE_API_URL}/company`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ companyElements }));
  }),
  rest.post(`${BASE_API_URL}/create-company`, (req, res, ctx) => {
    let newCompany = req.body;
    if (companyElements[0].company === newCompany.company) {
      return res(ctx.status(400), ctx.json('Firma o tej nazwie już istnieje.'));
    }
    return res(ctx.status(200), ctx.json({ newCompany }));
  }),
  rest.delete(`${BASE_API_URL}/company/:company`, (req, res, ctx) => {
    const newCompany = companyElements.filter((company) => company.company !== company);
    return res(ctx.status(200), ctx.json({ newCompany }));
  }),
  // ---------------AUTHENTICATION--------------
  rest.post(`${BASE_API_URL}/tokenIsValid`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.set('x-auth-token', token));
  }),
  rest.get(`${BASE_API_URL}/user`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.set('x-auth-token', token), ctx.json(userData));
  }),
];
