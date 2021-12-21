import {map, mergeMap, catchError, filter} from 'rxjs/operators';
import {of} from 'rxjs';
import {Epic, combineEpics} from 'redux-observable';
import {actions} from '../action/actions';
import GHNAPI from '../api';
import {AuthAction, LoginType} from '../types';
import {isOfType} from 'typesafe-actions';
import {IRootState} from 'stores';

const loginUserT62Epic: Epic<AuthAction, AuthAction, IRootState> = action$ =>
  action$.pipe(
    filter(isOfType(LoginType.start)),
    map(action => action.payload),
    mergeMap(({authorcode}) =>
      GHNAPI.loginApi(authorcode).pipe(
        map(({data}) => {
          const response = data;
          switch (response.status) {
            case 'OK': {
              const {userInfo, session = ''} = response.data[0];
              if (userInfo.hasOwnProperty('roles')) {
                let roles = userInfo.roles;
                const {
                  profile = {
                    email: '',
                    fullname: '',
                    phone: '',
                  },
                  ssoId = '',
                } = userInfo;
                return actions.loginSuccess({
                  email: profile.email,
                  hubId: '2294',
                  token: session ?? '',
                  username: profile.fullname,
                  roles: roles?.[0]?.permissionList ?? [],
                  ssoId: ssoId,
                });
              } else {
                return actions.loginError('Bạn không có quyền thao tác');
              }
            }
            case 'NOT_FOUND':
              return actions.loginError('SERVICE NOT FOUND');
            default:
              return actions.loginError(response.message);
          }
        }),
        catchError(error => of(actions.loginError(error.message))),
      ),
    ),
  );

export default combineEpics(loginUserT62Epic);
