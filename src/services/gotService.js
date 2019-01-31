
export default class GotService {
  constructor() {
    this._apiBase = 'https://www.anapioficeandfire.com/api';
  }

  getResourses = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    
    if (!res.ok) {
      // throw new Error(`Could not fetch ${url}, statsus: ${res.status}`);
      throw res.status;
    }

    return await res.json();
  };

  getAllCaracters = async(page, pageSize=10) => {
    const res = await this.getResourses(`/characters?page=${page}&pageSize=${pageSize}`);
    if (res.length === 0) {
      throw res.status;
    }
    return res.map(this._transformCharacter);
  }

  getCharacter = async (id) => {
    const character = await this.getResourses(`/characters/${id}`);
    return this._transformCharacter(character);
  }

  getAllBooks = async (page, pageSize=10) => {
    const res = await this.getResourses(`/books?page=${page}&pageSize=${pageSize}`);
    if (res.length === 0) {
      throw res.status;
    }
    return res.map(this._transformBook);
  }

  getBook = async (id) => {
    const book = await this.getResourses(`/books/${id}`);
    return this._transformBook(book);
  }

  getAllHouses = async (page, pageSize=10) => {
    const res = await this.getResourses(`/houses?page=${page}&pageSize=${pageSize}`);
    if (res.length === 0) {
      throw res.status;
    }
    return res.map(this._transformHouse);
  }

  getHouse = async (id) => {
    const house = await this.getResourses(`/houses/${id}`);
    return this._transformHouse(house);
  }

  isSet = (data) => {
    const check = Array.isArray(data) ? data[0] : data;
    return (check) ? data : 'lost to history...';
  }

  _transformCharacter = (char) => {
    return {
      id: char.url.split('/').pop(),
      name: this.isSet(char.name),
      gender: this.isSet(char.gender),
      born: this.isSet(char.born),
      died: this.isSet(char.died),
      culture: this.isSet(char.culture)
    }
  }

  _transformHouse = (house) => {
    return {
      id: house.url.split('/').pop(),
      name: this.isSet(house.name),
      region: this.isSet(house.region),
      words: this.isSet(house.words),
      titles: this.isSet(house.titles),
      overlord: this.isSet(house.overlord.split('/').pop()),
      ancestralWeapons: this.isSet(house.ancestralWeapons)
    }
  }

  _transformBook = (book) => {
    return {
      id: book.url.split('/').pop(),
      name: this.isSet(book.name),
      numberOfPages: this.isSet(book.numberOfPages),
      publisher: this.isSet(book.publisher),
      released: this.isSet(new Date(book.released).toLocaleDateString())
    }
  }
}
