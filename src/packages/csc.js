import { Country, State, City } from 'country-state-city'

const csc = {
  getStates() {
    return (
      State.getStatesOfCountry('US').map((state, index) => {
        return({
          id: index,
          name: state.name
        })
      })
    )
  },

  getState(item) {
    return (
      State.getStatesOfCountry('US')[item.id]
    )
  },

  getCities(city) {
    return (
      City.getCitiesOfState('US', city).map((city, index) => {
        return ({
          id: index,
          name: city.name
        })
      })
    )
  },

  getCity(item, city) {
    return (
      City.getCitiesOfState('US', city)[item.id]
    )
  }
}

export default csc
