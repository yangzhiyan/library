/**
 * 通用的session和local操作方法
 *
 * @summary 存储方法封装
 * @author yin hang
 *
 * Created at     : 2019-01-15 14:21:10 
 * Last modified  : 2019-01-15 18:44:45
 */

var storage = {
  setStorage: function (key, value, duration) {
    var data = {
      value: value,
      expiryTime: !duration || isNaN(duration) ? 0 : this.getCurrentTimeStamp() + parseInt(duration)
    };
    localStorage['_sf_' + key] = JSON.stringify(data);
  },
  getStorage: function (key) {
    var data = localStorage['_sf_' + key];
    if (!data || data === "null") {
      return null;
    }
    var now = this.getCurrentTimeStamp();
    var obj;
    try {
      obj = JSON.parse(data);
    } catch (e) {
      return null;
    }
    if (obj.expiryTime === 0 || obj.expiryTime > now) {
      return obj.value;
    }
    return null;
  },
  removeStorage: function (key) {
    localStorage.removeItem('_sf_' + key);
  },
  // removeStorage: function (key) {
  //   localStorage.removeItem(key);
  // },
  getSession: function (key) {
    var data = sessionStorage[key];
    if (!data || data === "null") {
      return null;
    }
    return JSON.parse(data).value;

  },
  setSession: function (key, value) {
    var data = {
      value: value
    }
    sessionStorage[key] = JSON.stringify(data);
  },
  getCurrentTimeStamp: function () {
    return Date.parse(new Date());
  }
};
export default storage;
