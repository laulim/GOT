
export default class GotService {
  constructor() {
    this._apiBase = 'https://www.anapioficeandfire.com/api';
  }

  async getResourses(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    
    if (!res.ok) {
      // throw new Error(`Could not fetch ${url}, statsus: ${res.status}`);
      throw res.status;
    }

    return await res.json();
  };

  async getAllCaracters(page, pageSize=10) {
    const res = await this.getResourses(`/characters?page=${page}&pageSize=${pageSize}`);
    if (res.length == 0) {
      throw res.status;
    }
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
      url: char.url,
      name: char.name || 'lost to history...',
      gender: char.gender || 'lost to history...',
      born: char.born || 'lost to history...',
      died: char.died || 'lost to history...',
      culture: char.culture || 'lost to history...'
    }
  }

  _transformHouse(house) {
    return {
      name: house.name || 'lost to history...',
      region: house.region || 'lost to history...',
      words: house.words || 'lost to history...',
      titles: house.titles || 'lost to history...',
      overload: house.overload || 'lost to history...',
      ancestralWeapons: house.ancestralWeapons || 'lost to history...'
    }
  }

  _transformBook(book) {
    return {
      name: book.name || 'lost to history...',
      numberOfPages: book.numberOfPages || 'lost to history...',
      publisher: book.publisher || 'lost to history...',
      released: book.released || 'lost to history...'
    }
  }
}
