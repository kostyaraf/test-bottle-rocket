// actions type
export const SET_CURRENT_RESTAURANT = 'SET_CURRENT_RESTAURANT'
export const SET_RESTAURANTS_LIST = 'SET_RESTAURANTS_LIST'
export const DETAILS_ACTIVATE = 'DETAILS_ACTIVATE'

export const restaurantsInfo = {
  currentRestaurant: {},
  restaurantsList: [],
  detailsActivate: false,
} 

// actions generators
export function setCurrentRestaurant(obj) {
  return {
    type: SET_CURRENT_RESTAURANT,
    obj
  }
}
export function setRestaurantsList(list) {
  return {
    type: SET_RESTAURANTS_LIST ,
    list
  }
}
export function detailsActivate(bool) {
  return {
    type: DETAILS_ACTIVATE,
    bool
  }
}

export const GET_RESTAURANT_REQUEST = 'SET_CURRENT_REQUEST'
export const GET_RESTAURANT_FAILURE = 'SET_CURRENT_FAILURE'
export const GET_RESTAURANT_SUCCESS = 'SET_CURRENT_SUCCESS'
