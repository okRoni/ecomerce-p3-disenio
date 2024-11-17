class DbRequest {
  static instance = null;

  constructor() {
    if (DbRequest.instance) {
      return DbRequest.instance;
    }

    this.url = 'http://localhost:3000';
    DbRequest.instance = this;
  }

  objectToQueryString(obj) {
    let queryString = '';
    for (const key in obj) {
      if (obj[key] === undefined || obj[key] === null) {
        continue;
      }
      queryString += `${key}=${obj[key]}&`;
    }
    if (queryString.length > 0) {
      queryString = '?' + queryString;
      queryString = queryString.slice(0, -1);
    }
  }

  async getAllCarsWithFilters(filters) {
    filters = filters || {};
    const requestUrl = `${this.url}/cars${this.objectToQueryString(filters)}`;
    console.log(requestUrl);

    const response = await fetch(requestUrl);
    console.log(response);
    const data = await response.json();
    console.log(data);

    return data;
  }
}

const instance = new DbRequest();
Object.freeze(instance);

export default instance;