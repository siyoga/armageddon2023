import { Asteroid } from '@/types/Astreroid';
import { makeAutoObservable } from 'mobx';

class Store {
  measure: 'km' | 'lunar' = 'km';
  cart: Asteroid[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  changeMeasure(newMeasure: 'km' | 'lunar') {
    this.measure = newMeasure;
  }

  addToCart(newAsteroid: Asteroid) {
    this.cart = [...this.cart, newAsteroid];
  }

  removeFromCart(asteroid: Asteroid) {
    this.cart = [
      ...this.cart.filter(
        (inCartAsteroid) => inCartAsteroid.id !== asteroid.id
      ),
    ];
  }
}

const store = new Store();
export default store;
