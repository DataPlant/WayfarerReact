const url = 'http://localhost:4000/cities'

class CityModel {
   static all() {
       return fetch(url)
       .then((response) => {
           return response.json()
       })
       .catch((err) => {
           console.log(err);
       })
   }
   static show(cityId) {
    return fetch(`${url}/${cityId}`)
        .then((response) => {
            return response.json()
        })
    }
}

export default CityModel