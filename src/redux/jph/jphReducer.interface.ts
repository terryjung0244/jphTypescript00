import { JphUserModel } from 'service/type/model/jphUserModel';

export interface JPH_STATE_TYPE {
  loading: boolean;
  error: Error | null;
  result: JphUserModel[];
}
