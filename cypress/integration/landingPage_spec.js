describe('Landing page view', () => {

  beforeEach(() => {
    cy.intercept("https://chibi-be.herokuapp.com/api/v1/top_five",
      {
        "data": [
          {
            "id": 1,
            "type": "item",
            "attributes": {
              "name": "remote",
              "description": "plastic",
              "toxicity": 5,
              "treatment": "big surgery",
              "image": "https://cdn.vox-cdn.com/thumbor/pQ8yv3BoiduWTWBU8oE-8htJLao=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69149145/DSCF3621_Edited.0.jpg"
            }
          },
          {
            "id": 4,
            "type": "item",
            "attributes": {
              "name": "onion",
              "description": "vegetable, it will be a slow kill",
              "toxicity": 5,
              "treatment": "stomach pump and prayer if you believe",
              "image": "https://thesmartcanine.com/wp-content/uploads/2016/11/can-dogs-eat-onion-rings.jpg"
            }
          },
          {
            "id": 7,
            "type": "item",
            "attributes": {
              "name": "grapes",
              "description": "fruit, if you drop it on the floor, catch it before they do",
              "toxicity": 3,
              "treatment": "induce vomiting",
              "image": "https://i.pinimg.com/564x/bd/fd/74/bdfd742863ae216d6a9c8061d7991cd6.jpg"
            }
          },
          {
            "id": 8,
            "type": "item",
            "attributes": {
              "name": "chocolate",
              "description": "opposite of vanilla",
              "toxicity": 2,
              "treatment": "wait it out, my pup ate a candy bar and survived, JUST DON't LET IT HAPPEN AGAIN",
              "image": "https://images.wagwalkingweb.com/media/daily_wag/sense_guides/can-dogs-live-after-eating-chocolate/intro/Chocolate2.jpg"
            }
          },
          {
            "id": 10,
            "type": "item",
            "attributes": {
              "name": "tequila",
              "description": "alcohol",
              "toxicity": 2,
              "treatment": "pour peroxide down their throat and make them run in circles and watch a miracle happen",
              "image": "https://media.istockphoto.com/photos/dog-having-fun-and-drinking-alcohol-picture-id543473028"
            }
          }
        ]
      }

    ).visit("http://localhost:3000/")
  })

  it('should display the page title', () => {
    cy.get(".landing-form-container").contains("What did your pet eat?")
  })

  it('should return onion if onion is searched for', () => {
    cy.get('input[type="text"]').type("onion")
    cy.get('.item-card').contains('onions')
  })

  it('should retain the value of onion in search bar', () => {
    cy.get('input[type="text"]').type("onion")
    cy.get('input').should("have.value", "onion")
  })

  it('should return garlic if garlic is searched for', () => {
    cy.get('input[type="text"]').type("garlic")
    cy.get('.item-card').contains("garlic")
  })

  it('should retain the value of garlic in search bar', () => {
    cy.get('input[type="text"]').type("garlic")
    cy.get('input').should("have.value", "garlic")
  })

  it('should display a message if no search results found', () => {
    cy.get('input[type="text"]').type("f")
    cy.get('.landing-form-container').contains("We couldn't find that item")
  })

});