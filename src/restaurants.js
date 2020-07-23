import { store } from 'react-easy-state'
import { getRestaurants } from './services/query'
const restaurants = store({
  currentRestaurant: {},
  restaurantsList: [],
  isListUpload: false,
  async getRestaurants() {
    fetch('http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json')
      .then(r => r.json())
      .then(r => {
        restaurants.restaurantsList = r.restaurants;
        restaurants.isListUpload = true
      })
      .catch(err => {
        console.error('Rrrrr')
        restaurants.isListUpload = true})
  }
})
export default restaurants