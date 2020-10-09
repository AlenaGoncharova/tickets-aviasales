export default class AviasalesService {
  _apiBase = 'https://front-test.beta.aviasales.ru';

  getResource = async (url) => {
    const response = await fetch(`${this._apiBase}${url}`);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`);
    }
    const data = await response.json();
    return data;
  }

  getSearchId = async () => {
    const result = await this.getResource('/search');
    return result.searchId;
  }

  getChunkTickets = async (searchId) => {
    return this.getResource(`/tickets?searchId=${searchId}`);
  }

  getAllTickets = async () => {
    const result = [];
    const searchId = await this.getSearchId();
    let stop = false;

    while (!stop) {
      try {
        const data = await this.getChunkTickets(searchId);
        stop = data.stop;
        result.push(...data.tickets);
      } catch (e) {
        console.log(e);
      }
    }
    return result;
  }
}
