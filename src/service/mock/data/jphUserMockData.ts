import { JphUserModel } from 'service/type/model/jphUserModel';

export const mockJphUserData: JphUserModel[] = [
  {
    id: 0,
    name: 'ABC',
    username: 'abc',
    email: 'abc@abc.com',
    address: {
      city: 'abc city',
      geo: {
        lat: '23',
        lng: '30',
      },
      street: 'abc street',
      suite: 'abc suite',
      zipcode: 'abc cba',
    },
  },
  {
    id: 1,
    name: 'DEF',
    username: 'def',
    email: 'def@def.com',
    address: {
      city: 'def city',
      geo: {
        lat: '22',
        lng: '35',
      },
      street: 'def street',
      suite: 'def suite',
      zipcode: 'def fed',
    },
  },
];
