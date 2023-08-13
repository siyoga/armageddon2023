import { makeAutoObservable } from 'mobx';

class Store {
  measure: 'km' | 'lunar' = 'km';

  constructor() {
    makeAutoObservable(this);
  }

  changeMeasure(newMeasure: 'km' | 'lunar') {
    this.measure = newMeasure;
  }
}

const store = new Store();
export default store;
