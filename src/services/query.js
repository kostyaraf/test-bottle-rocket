export const getRestaurants = () => {
  return fetch(
    'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json'
  )
}

// export const getRestaurants = async () => {
//   let response = await fetch(
//     'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json'
//   )
//     .then(r => r.json())
//     .then(r => {
//       console.log(r.restaurants)
//       return r.restaurants
//     })
//     .catch(e => {
//       console.log(`Something went wrong! Error: ${e}`)
//       return []
//     })
//   let jsonResponse = await response
//   return jsonResponse.restaurants
// }




export const Restaurants = [
  {
    name: 'Hopdoddy Burger Bar',
    backgroundImageURL:
      'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/Images/hopdoddy.png',
    category: 'Burgers',
    contact: {
      phone: '9723872337',
      formattedPhone: '(972) 387-2337',
      twitter: 'hopdoddy',
    },
    location: {
      address: '5100 Belt Line Road, STE 502',
      crossStreet: 'Dallas North Tollway',
      lat: 32.950787,
      lng: -96.821118,
      postalCode: '75254',
      cc: 'US',
      city: 'Addison',
      state: 'TX',
      country: 'United States',
      formattedAddress: [
        '5100 Belt Line Road, STE 502 (Dallas North Tollway)',
        'Addison, TX 75254',
        'United States',
      ],
    },
  },
  {
    name: 'Pappadeaux Seafood Kitchen',
    backgroundImageURL:
      'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/Images/pappadeaux.png',
    category: 'Seafood',
    contact: {
      phone: '9724479616',
      formattedPhone: '(972) 447-9616',
      twitter: 'pappadeaux',
    },
    location: {
      address: '18349 Dallas Pkwy',
      crossStreet: 'at Frankford Rd.',
      lat: 32.99908456526653,
      lng: -96.83018780592823,
      postalCode: '75287',
      cc: 'US',
      city: 'Dallas',
      state: 'TX',
      country: 'United States',
      formattedAddress: [
        '18349 Dallas Pkwy (at Frankford Rd.)',
        'Dallas, TX 75287',
        'United States',
      ],
    },
  },
  {
    name: 'Yard House',
    backgroundImageURL:
      'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/Images/yardhouse.png',
    category: 'Tap House',
    contact: {
      phone: '9727164004',
      formattedPhone: '(972) 716-4004',
      twitter: 'yardhouse',
      facebook: '92873089221',
      facebookUsername: 'YardHouse',
      facebookName: 'Yard House',
    },
    location: {
      address: '5100 Belt Line Rd',
      lat: 32.95061646,
      lng: -96.81974196,
      postalCode: '75254',
      cc: 'US',
      city: 'Dallas',
      state: 'TX',
      country: 'United States',
      formattedAddress: [
        '5100 Belt Line Rd',
        'Dallas, TX 75254',
        'United States',
      ],
    },
  },
  {
    name: 'Pluckers Wing Bar',
    backgroundImageURL:
      'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/Images/pluckers.png',
    category: 'Wing Joint',
    contact: null,
    location: {
      address: '5100 Beltline Rd',
      lat: 32.95097877918451,
      lng: -96.82020769859702,
      cc: 'US',
      city: 'Addison',
      state: 'TX',
      country: 'United States',
      formattedAddress: ['5100 Beltline Rd', 'Addison, TX', 'United States'],
    },
  },
  {
    name: 'Ramen Hakata',
    backgroundImageURL:
      'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/Images/ramen_hakata.png',
    category: 'Japanese',
    contact: {
      phone: '9722472401',
      formattedPhone: '(972) 247-2401',
      twitter: 'ramenhakata',
    },
    location: {
      address: '3714 Belt Line Rd',
      crossStreet: 'Marsh',
      lat: 32.95270483276971,
      lng: -96.85424159312772,
      postalCode: '75001',
      cc: 'US',
      city: 'Addison',
      state: 'TX',
      country: 'United States',
      formattedAddress: [
        '3714 Belt Line Rd (Marsh)',
        'Addison, TX 75001',
        'United States',
      ],
    },
  },
  {
    name: "Gloria's",
    backgroundImageURL:
      'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/Images/glorias.png',
    category: 'Mexican',
    contact: {
      phone: '9723878442',
      formattedPhone: '(972) 387-8442',
      twitter: 'gloriasdfw',
      facebook: '37663492804',
      facebookUsername: 'GloriasAddison',
    },
    location: {
      address: '5100 Belt Line Rd, #864',
      crossStreet: 'btwn Dallas Pkwy & Montfort Dr',
      lat: 32.95233983087431,
      lng: -96.8217200548765,
      postalCode: '75254',
      cc: 'US',
      city: 'Dallas',
      state: 'TX',
      country: 'United States',
      formattedAddress: [
        '5100 Belt Line Rd, #864 (btwn Dallas Pkwy & Montfort Dr)',
        'Dallas, TX 75254',
        'United States',
      ],
    },
  },
  {
    name: 'The Social House',
    backgroundImageURL:
      'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/Images/social_house.png',
    category: 'Bar and Grill',
    contact: { phone: '9723924300', formattedPhone: '(972) 392-4300' },
    location: {
      address: '5100 Belt Line Rd, Ste 410',
      lat: 32.951435866666664,
      lng: -96.81982755661011,
      postalCode: '75254',
      cc: 'US',
      city: 'Addison',
      state: 'TX',
      country: 'United States',
      formattedAddress: [
        '5100 Belt Line Rd, Ste 410',
        'Addison, TX 75254',
        'United States',
      ],
    },
  },
  {
    name: "Chuy's",
    backgroundImageURL:
      'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/Images/chuys.png',
    category: 'Tex Mex',
    contact: null,
    location: {
      address: '4440 Belt Line Rd',
      lat: 32.95374271930925,
      lng: -96.83582486129093,
      postalCode: '75001',
      cc: 'US',
      city: 'Addison',
      state: 'TX',
      country: 'United States',
      formattedAddress: [
        '4440 Belt Line Rd',
        'Addison, TX 75001',
        'United States',
      ],
    },
  },
  {
    name: 'Flying Saucer Draught Emporium',
    backgroundImageURL:
      'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/Images/flying_saucer.png',
    category: 'Tap House',
    contact: { phone: '9729917093', formattedPhone: '(972) 991-7093' },
    location: {
      address: '14999 Montfort Dr',
      crossStreet: 'at Sakowitz Dr.',
      lat: 32.95293601457525,
      lng: -96.81884050369263,
      postalCode: '75254',
      cc: 'US',
      city: 'Dallas',
      state: 'TX',
      country: 'United States',
      formattedAddress: [
        '14999 Montfort Dr (at Sakowitz Dr.)',
        'Dallas, TX 75254',
        'United States',
      ],
    },
  },
  {
    name: 'Whole Foods Market',
    backgroundImageURL:
      'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/Images/whole_foods.png',
    category: 'Prepared Eats',
    contact: {
      phone: '2148543334',
      formattedPhone: '(214) 854-3334',
      twitter: 'wholefoodsdfw',
    },
    location: {
      address: '5100 Belt Line Rd., Suite 1012',
      crossStreet: 'at Dallas North Twy.',
      lat: 32.95285141460555,
      lng: -96.8211496464768,
      postalCode: '75254',
      cc: 'US',
      city: 'Addison',
      state: 'TX',
      country: 'United States',
      formattedAddress: [
        '5100 Belt Line Rd., Suite 1012 (at Dallas North Twy.)',
        'Addison, TX 75254',
        'United States',
      ],
    },
  },
  {
    name: 'The Londoner',
    backgroundImageURL:
      'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/Images/the_londoner.png',
    category: 'Pub',
    contact: { phone: '9724582444', formattedPhone: '(972) 458-2444' },
    location: {
      address: '14930 Midway Rd',
      crossStreet: 'at Beltway Dr',
      lat: 32.952423,
      lng: -96.83843538333333,
      postalCode: '75001',
      cc: 'US',
      city: 'Addison',
      state: 'TX',
      country: 'United States',
      formattedAddress: [
        '14930 Midway Rd (at Beltway Dr)',
        'Addison, TX 75001',
        'United States',
      ],
    },
  },
  {
    name: 'The Original Pancake House',
    backgroundImageURL:
      'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/Images/original_pancake_house.png',
    category: 'Coffee and Breakfast',
    contact: { phone: '9723856468', formattedPhone: '(972) 385-6468' },
    location: {
      address: '5220 Belt Line Rd',
      crossStreet: 'at Dallas North Tollway',
      lat: 32.953633,
      lng: -96.81984901428223,
      postalCode: '75254',
      cc: 'US',
      city: 'Dallas',
      state: 'TX',
      country: 'United States',
      formattedAddress: [
        '5220 Belt Line Rd (at Dallas North Tollway)',
        'Dallas, TX 75254',
        'United States',
      ],
    },
  },
  {
    name: 'Thai Star',
    backgroundImageURL:
      'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/Images/thai_star.png',
    category: 'Thai',
    contact: { phone: '9729916334', formattedPhone: '(972) 991-6334' },
    location: {
      address: '14833 Midway Rd',
      crossStreet: 'at Beltway Dr',
      lat: 32.95027115867483,
      lng: -96.8406629562378,
      postalCode: '75001',
      cc: 'US',
      city: 'Addison',
      state: 'TX',
      country: 'United States',
      formattedAddress: [
        '14833 Midway Rd (at Beltway Dr)',
        'Addison, TX 75001',
        'United States',
      ],
    },
  },
  {
    name: 'In-N-Out Burger',
    backgroundImageURL:
      'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/Images/in_n_out_burger.png',
    category: 'Fast Food Burgers',
    contact: {
      phone: '8007861000',
      formattedPhone: '(800) 786-1000',
      twitter: 'innoutburger',
    },
    location: {
      address: '15260 Dallas Pkwy',
      crossStreet: 'at Prestonwood Town Center',
      lat: 32.95703457542545,
      lng: -96.82081996316793,
      postalCode: '75248',
      cc: 'US',
      city: 'Dallas',
      state: 'TX',
      country: 'United States',
      formattedAddress: [
        '15260 Dallas Pkwy (at Prestonwood Town Center)',
        'Dallas, TX 75248',
        'United States',
      ],
    },
  },
  {
    name: 'Buffalo Wild Wings',
    backgroundImageURL:
      'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/Images/buffalo_wild_wings.png',
    category: 'Wing Joint',
    contact: {
      phone: '9727019464',
      formattedPhone: '(972) 701-9464',
      twitter: 'bwwings',
    },
    location: {
      address: '5000 Belt Line Rd Ste 100',
      crossStreet: 'at Quorum Dr',
      lat: 32.95347617827522,
      lng: -96.82554602622986,
      postalCode: '75254-6752',
      cc: 'US',
      city: 'Dallas',
      state: 'TX',
      country: 'United States',
      formattedAddress: [
        '5000 Belt Line Rd Ste 100 (at Quorum Dr)',
        'Dallas, TX 75254-6752',
        'United States',
      ],
    },
  },
]
