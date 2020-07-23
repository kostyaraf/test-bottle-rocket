export const getRestaurants = () => {
  fetch(
    'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json'
  )
    .then(r => r.json())
    .then(r => {
      console.log(r.restaurants)
      return r.restaurants
    })
    .catch(e => {
      console.log(`Something went wrong! Error: ${e}`)
      return []
    })
}
