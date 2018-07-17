import axios from 'axios';

class REST {
  constructor(endPointURL, config = {}) {
    const axiosConfig = Object.assign({
      baseURL: endPointURL,
    }, config);
    this.endPointURL = endPointURL;
    this.rest = axios.create(axiosConfig);
  }

  /**
   * export original axios request function.
   * @param config see https://github.com/axios/axios#axiosrequestconfig-1
   */
  request(config) {
    return this.rest.request(config);
  }

  /**
   * HTTP METHOD GET
   * @param {String} url
   * @param {Object} params
   * @param {Object} config
   */
  get(url, params, config) {
    const getConfig = {};
    if (params) Object.assign(getConfig, { params });
    if (config) Object.assign(getConfig, config);

    return this.rest.get(url, getConfig);
  }

  /**
   * HTTP METHOD POST
   * @param {String} url
   * @param {Object} data
   * @param {Object} config
   */
  post(url, data, config) {
    return this.rest.post(url, data, config);
  }

  /**
   * HTTP METHOD DELETE
   * @param {String} url
   * @param {Object} config
   */
  delete(url, params, config) {
    const delConfig = {};
    if (params) Object.assign(delConfig, { params });
    if (config) Object.assign(delConfig, config);

    return this.rest.delete(url, delConfig);
  }

  /**
   * HTTP MEHTOD PUT
   * @param {String} url
   * @param {Object} data
   * @param {Object} config
   */
  put(url, data, config) {
    return this.rest.put(url, data, config);
  }

  /**
   * HTTP MEHTOD PATCH
   * @param {String} url
   * @param {Object} data
   * @param {Object} config
   */
  patch(url, data, config) {
    return this.rest.patch(url, data, config);
  }

  createCancelSource() {
    return axios.CancelToken.source();
  }
}

export default REST;
