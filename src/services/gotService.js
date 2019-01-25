
export default class GotService {
  constructor() {
    this._apiBase = 'https://www.anapioficeandfire.com/api';
  }

  async getResourses(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, sttsus: ${res.status}`);
    }

    return await res.json();
  };

  getAllCaracters(page, pageSize=10) {
    return this.getResourses(`/characters?page=${page}&pageSize=${pageSize}`);
  }

  getCharacter(id) {
    return this.getResourses(`/characters/${id}`);
  }

  getAllBooks(page, pageSize=10) {
    return this.getResourses(`/books?page=${page}&pageSize=${pageSize}`);
  }

  getBook(id) {
    return this.getResourses(`/books/${id}`);
  }

  getAllHouses(page, pageSize=10) {
    return this.getResourses(`/houses?page=${page}&pageSize=${pageSize}`);
  }

  getHouse(id) {
    return this.getResourses(`/houses/${id}`);
  }
}
