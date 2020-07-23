import {
  SET_CURRENT_RESTAURANT,
  SET_RESTAURANTS_LIST,
  DETAILS_ACTIVATE,
  restaurantsInfo,
} from './actions.js'

const initialState = {
  ...restaurantsInfo,
}

export default function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_RESTAURANT:
      return { ...state, currentRestaurant: action.obj }
    case SET_RESTAURANTS_LIST:
      return { ...state, restaurantsList: action.list }
    case DETAILS_ACTIVATE:
      return { ...state, detailsActivate: action.bool }
    default:
      return state
  }
}
