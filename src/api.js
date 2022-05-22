import axios from 'axios'

export default axios.create({
  baseURL: 'https://movies-app1.p.rapidapi.com/api',
  headers: {
    'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
  }
})

export const movies = [
  {
    title: 'Shadowhunters: The Mortal Instruments',
    image: 'https://occ-0-1033-116.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABYr7FDhfqyE48iOKO273q0BXPh_CqsJfgigrx25yUNm2fEE46U2d6l8tjlEzI7iPBxXDcygKro4juRM1ONAcIY1Lv3eFMJ1lk6uCsqFflMo0fQBsm_XCu8jUZ8TYgjw7U_d0j7xxUiAj7bcB17EvkvyyltZilvcDTbgmeKE2uGL0N48thU5a5g.png?r=78c',
    cover: 'https://occ-0-1033-116.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfbfu7ozXjp1BxMA-JYnGxb1EcqGSCHotyMPJhpFw9w-TrlgQulM7ZXnax1RV4oauTrH7q7oXon-_ej19kDT1Oj6zaGRoareZERn.jpg?r=7c1',
    miniCover: 'https://occ-0-1033-116.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd-6ddaP1ZGim87ZiLa4HRmB5fPip8_LXAT06WYnHyRUr_tPmj9XVvHxXzE7sbw_9CLnsbaidDZI6uE87Kd8t8qWqxG6qvgc4hINnlAuOJzyEHrVvJC8xTPBStBz0zXt-jzF.jpg?r=298',
    description: "The life of typical teen Clary Fray is upended when she learns that she's part of a race of demon-hunting humans who have the blood of angels."
  }
]

export const api = {
  get: ( path ) => {
    return new Promise( (resolve, reject) => {
      switch (path) {
        case '/movies':
          resolve(movies)
          break;
        default:
          reject('cannot get ' + path)
          break;
      }
    })
  },
  post: ( path, data ) => {
    return new Promise( (resolve, reject) => {
      // here we process a post request
    })
  }
}