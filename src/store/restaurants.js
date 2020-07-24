import { store } from 'react-easy-state'
// import { getRestaurants } from './services/query'
const restaurants = store({
  currentRestaurant: {},
  currentIndex: -1,
  restaurantsList: [],
  isListUpload: false,
  isDetailsActive: false,
  isDetailsHide: true,
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
  },
  setCurrentIndex(num) {
    restaurants.currentIndex = num
  },
  getDetails(bool) {
    if (bool) {
      restaurants.isDetailsVisible = bool
      setTimeout(() => {
        restaurants.isDetailsActive = bool
      }, 50)

    } else {
      setTimeout(() => {
        restaurants.isDetailsVisible = bool
      }, 600)
      restaurants.isDetailsActive = bool
    }
  }
})
export default restaurants