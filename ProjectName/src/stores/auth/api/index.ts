import instance from '../../../network';
import {API} from '../../../constants';
import {from} from 'rxjs';
const loginApi = (authorcode: string) => {
  const url = `${API.URL}`;
  const param = {
    authorCode: authorcode,
  };
  const config = {
    headers: {},
  };
  return from(instance.post(url, param, config));
};

const logoutApi = () => {
  const url = API.URL;
  return from(instance.get(url));
};

export default {
  loginApi,
  logoutApi,
};
