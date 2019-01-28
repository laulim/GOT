
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

  async getAllCaracters(page, pageSize=10) {
    const res = await this.getResourses(`/characters?page=${page}&pageSize=${pageSize}`);
    return res.map(this._transformCharacter);
  }

  async getCharacter(id) {
    const character = await this.getResourses(`/characters/${id}`);
    return this._transformCharacter(character);
  }

  async getAllBooks(page, pageSize=10) {
    const res = await this.getResourses(`/books?page=${page}&pageSize=${pageSize}`);
    return res.map(this._transformBook);
  }

  async getBook(id) {
    const book = await this.getResourses(`/books/${id}`);
    return this._transformBook(book);
  }

  async getAllHouses(page, pageSize=10) {
    const res = await this.getResourses(`/houses?page=${page}&pageSize=${pageSize}`);
    return res.map(this._transformHouse);
  }

  async getHouse(id) {
    const house = await this.getResourses(`/houses/${id}`);
    return this._transformHouse(house);
  }

  _transformCharacter(char){
    return {
      name: char.name,
      gender: char.gender,
      born: char.born,
      died: char.died,
      culture: char.culture
    }
  }

  _transformHouse(house) {
    return {
      name: house.name,
      region: house.region,
      words: house.words,
      titles: house.titles,
      overload: house.overload,
      ancestralWeapons: house.ancestralWeapons
    }
  }

  _transformBook(book) {
    return {
      name: book.name,
      numberOfPages: book.numberOfPages,
      publisher: book.publisher,
      released: book.released
    }
  }
}
