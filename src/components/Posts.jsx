import React from "react";

class Posts extends React.Component {
    render() {
        let postItems = this.props.cities.map(city => {
            return city.cityname
        })
        return postItems;
    }
}

export default Posts