const url = 'http://localhost:4000'

class CityModel {
   static all() {
       return fetch(url)
       .then((response) => {
           return response.json()
       })
    //    .then((data) => {
    //        console.log(data);
    //    })
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