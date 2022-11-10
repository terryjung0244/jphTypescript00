import { JphUserAddress, JphUserResponse } from '../response/jphUserResponse';

export interface JphUserModel {
  id: number;
  name: string;
  username: string;
  email: string;
  address: JphUserAddress | string;
}

export const parsedJphUserData = (jphUserApi: JphUserResponse[]): JphUserModel[] => {
  return jphUserApi.map((jphUser: JphUserResponse) => {
    return {
      id: jphUser.id ?? 'No ID',
      name: jphUser.name ?? 'No Name',
      username: jphUser.username ?? 'No Username',
      email: jphUser.email ?? 'No email',
      address: jphUser.address ?? 'No address',
    };
  });
};
