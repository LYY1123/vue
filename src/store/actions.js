import * as request from 'js/request.js';

// ��½״̬���
export const checkLogin = function ({commit, state}) {
  return new Promise(function (resolve, reject) {
    request.checkLoginState().then(function (resp) {
      if (resp.data.userState == '1') {
        // �ѵ�¼
        commit('UPDATE_LOGINSATE', 1);
      } else if (resp.data.userState != '1') {
        // δ��¼
        commit('UPDATE_LOGINSATE', 0);
      }
      resolve(resp);
    });
  });
};
