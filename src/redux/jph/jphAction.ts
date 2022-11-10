import { JPH_ACTION } from 'service/const/actionConst';
import { JphUserModel } from 'service/type/model/jphUserModel';
import { JPH_REQUEST_TYPE, JPH_SUCCESS_TYPE, JPH_FAILURE_TYPE } from './jphAction.interface';

const { JPH_ACTION_REQUEST, JPH_ACTION_SUCCESS, JPH_ACTION_FAILURE } = JPH_ACTION;

export const jphRequest = (): JPH_REQUEST_TYPE => {
  return {
    type: JPH_ACTION_REQUEST,
    payload: null,
  };
};

export const jphSuccess = (dataFromServer: JphUserModel[]): JPH_SUCCESS_TYPE => {
  return {
    type: JPH_ACTION_SUCCESS,
    payload: dataFromServer,
  };
};

export const jphFailure = (dataFromServer: Error): JPH_FAILURE_TYPE => {
  return {
    type: JPH_ACTION_FAILURE,
    payload: dataFromServer,
  };
};
