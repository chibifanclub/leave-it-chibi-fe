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

  submitSuggestion(suggestion) {
    return fetch(`https://chibi-be.herokuapp.com/api/v1/suggest`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(suggestion)
    })
      .then(response => {
        this.checkResponse(response)
        return response.json()
      })
      .catch(error => {
        console.error(error, 'error with submitSuggestion')
        return error.message
      })
  },

  getTopFiveItems() {
    return fetch('https://chibi-be.herokuapp.com/api/v1/top_five')
      .then(response => {
        this.checkResponse(response)
        return response.json()
      })
      .catch(error => {
        console.error(error, 'error with top five')
        return error.message
      })
  },

<<<<<<< HEAD
  sendSearchCount(id) {
    return fetch(`https://chibi-be.herokuapp.com/api/v1/searches?item_id=${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => {
        this.checkResponse(response)
        return response.json()
      })
      .catch(error => {
        console.error(error, 'error with sendSearchCount')
        return error.message
      })
  },

=======
>>>>>>> 7e82098650c98bad33e7240e5af97dc47fb88465
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
