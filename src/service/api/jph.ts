import axios, { AxiosResponse } from 'axios';
import { JphUserModel, parsedJphUserData } from 'service/type/model/jphUserModel';

export const getUsers = async (): Promise<JphUserModel[] | Error> => {
  try {
    const response: JphUserModel[] = await axios
      .get<Promise<AxiosResponse>>('https://jsonplaceholder.typicode.com/users')
      .then((response: AxiosResponse) => parsedJphUserData(response.data));
    return response;
  } catch (err) {
    return err as Error;
  }
};
