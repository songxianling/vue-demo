/**
 * api集成管理
 */
import axios from 'axios';

export default {
  /**
   * 通用api方法
   */
  apiCommunication(apiname, param, callback, type) {
    // if(apiname === '/test/test1') {
    //     callback(testjason)
    //     return false
    // }
    axios.post(apiname, param)
      .then(response => {
        callback(response.data);
      });
  },
  apiCommunicationGet(apiname, callback, type) {
    axios.get(apiname)
      .then(response => {
        callback(response.data);
      });
  }
};
