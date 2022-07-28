import axios from "axios";


export default class SearchRequire {
  constructor() {
    this.searchQuey = '';
    this.page = 1;
    this.loading = false;
  }

  async fetchArticles() {
    this.loading = true;
    const BASE_URL = 'https://pixabay.com/api/';
    const response =
      await axios(`${BASE_URL}?key=28849807-1f9f2c838f4100310a08c3c07&q=${this.searchQuey}&image_type=photo&orientation=horizontal
      &safesearch=true&per_page=20&page=${this.page}`);
    this.incrementPage()
    return response.data;
  }

  incrementPage(){
    this.page +=1;
  }

  resetPage(){
    this.page = 1
  }

  get query(){
    return this.searchQuey;
  }

  set query (newQuery){
    this.searchQuey = newQuery;
  }

}


