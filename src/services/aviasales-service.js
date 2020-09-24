export default class AviasalesService {
  _apiBase = 'https://front-test.beta.aviasales.ru';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  }

  async getSearchId() {
    const res = await this.getResource('/search');
    return res.searchId;
  }

  async getChunkTickets(searchId) {
    return this.getResource(`/tickets?searchId=${searchId}`);
  }

  async getAllTickets() {
    let stop = false;
    const result = [];

    const searchId = await this.getSearchId();

    while (!stop) {
      try {
        const body = await this.getChunkTickets(searchId);
        stop = body.stop;
        result.push(...body.tickets);
        console.log(body, stop);
      } catch (e) {
        console.log(e);
      }
    }
    return result;
  }
}
