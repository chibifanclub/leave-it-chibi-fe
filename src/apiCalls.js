const apiCalls = {
  searchItems(query) {
    return fetch(`https://chibi-be.herokuapp.com/api/v1/items?name=${query}`)
      .then(response => {
        this.checkResponse(response)
        return response.json()
      })
      .catch(error => {
        console.error(error, 'error with searchItems')
        return error.message
      })
  },

  findVet(query) {
    return fetch(`https://chibi-be.herokuapp.com/api/v1/veterinarians?location=${query}`)
      .then(response => {
        this.checkResponse(response)
        return response.json()
      })
      .catch(error => {
        console.error(error, 'error with findVet')
        return error.message
      })
  },

  checkResponse(response) {
    if (!response.ok) {
      if (response.status === 422 || response.status === 403) {
        throw new Error('Sorry, we can\'t find an account with these credentials. Please try again.')
      } else if (response.status === 404) {
        throw new Error('The page you are looking for doesn\'t exist')
      } else if (response.status >= 500) {
        throw new Error('We\'re having issues on our end. Please try again later.')
      } else {
        throw new Error('Please check your network connection')
      }
    }
  }
}

export default apiCalls
