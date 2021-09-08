import React from "react";

class Posts extends React.Component {
    render(){
        let postItems = this.props.cities.map(city => {
            return city.cityname
        })
        return postItems;
    }
}
// map function pulling from DB 
// nested within each city
export default Posts 