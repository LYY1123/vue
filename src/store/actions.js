import * as request from 'js/request.js';

// µÇÂ½×´Ì¬¼ì²â
export const checkLogin = function ({commit, state}) {
  return new Promise(function (resolve, reject) {
    request.checkLoginState().then(function (resp) {
      if (resp.data.userState == '1') {
        // ÒÑµÇÂ¼
        commit('UPDATE_LOGINSATE', 1);
      } else if (resp.data.userState != '1') {
        // Î´µÇÂ¼
        commit('UPDATE_LOGINSATE', 0);
      }
      resolve(resp);
    });
  });
};
