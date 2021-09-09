import React from "react";

class SelectDropdown extends React.Component {
    renderData() {
        const findCities = this.props.cities.map((cities, idx) => {
            return (
                <option value={cities._id} key={idx}>
                    {cities.cityname}
                </option>
            )
        })
        return findCities;
    }

    render() {
        return (
            <>
                {this.renderData()}
            </>
        )
    }
}
export default SelectDropdown;