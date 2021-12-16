#### [🐶 Leave it, Chibi! 🤮 Deployed App](https://main.dzaswu99pr3fh.amplifyapp.com/)

## Table of contents
- [Overview](#overview)
- [Setup](#setup)
- [Screenshots](#screenshots)
- [Project Board](#project-board)
- [API](#api)
- [Endpoints](#endpoints)
- [Technologies](#technologies)
- [Contributors](#contributors)

## <ins>Overview</ins>

# Leave It, Chibi!
🦴 still need description

This project was based off Turing's capstone project. More details can be found [here](https://mod4.turing.edu/projects/capstone/)

### <ins>Setup</ins>
1. Fork and Clone the repo


### <ins>Screenshots</ins>
![Welcome Screenshot](<img width="1399" alt="Welcome screen" src="https://user-images.githubusercontent.com/79122599/146440322-021d1682-d194-49fc-99b2-29a12b8d7d97.png">)

![Detail view](<img width="708" alt="Detail view screen" src="https://user-images.githubusercontent.com/79122599/146440884-dbb46f8d-9a52-4b84-a55d-9fbd102edbd2.png">)

![Find a vet](<img width="1402" alt="Find a vet screen" src="https://user-images.githubusercontent.com/79122599/146440396-dc5d3c5a-e69a-4be8-bbfa-8f9d451cfbcb.png">)

![Make a suggestion](<img width="1411" alt="Make a suggestion screen" src="https://user-images.githubusercontent.com/79122599/146440571-415404d9-c7eb-4977-8750-25918033643f.png">)

### <ins>Project Board</ins>
![Project-Board](https://github.com/orgs/chibifanclub/projects/1)

### <ins>API</ins>
![Schema Screenshot]()

### <ins>Endpoints</ins>
<details>
  <summary>Get all items</summary>
  
  * Method: GET
 
  * Endpoint: api/v1/items
```json
  {
    "data": [
      {
        "id": 1,
        "type": "items",
        "attributes": {
          "name": "remote",
          "description": "plastic",
          "toxicity": 5,
          "treatment": "big surgery", 
          "image": "https://cdn.vox-cdn.com/thumbor/pQ8yv3BoiduWTWBU8oE-8htJLao=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69149145/DSCF3621_Edited.0.jpg"
        }
      } 
    ]
  }

```
</details>

<details>
  <summary>Get top five items</summary>
  
  * Method: GET
 
  * Endpoint: api/v1/top_five
```json
  {
    "data": [
      {
        "id": 1,
        "type": "items",
        "attributes": {
          "name": "remote",
          "description": "plastic",
          "toxicity": 5,
          "treatment": "big surgery", 
          "image": "https://cdn.vox-cdn.com/thumbor/pQ8yv3BoiduWTWBU8oE-8htJLao=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69149145/DSCF3621_Edited.0.jpg"
        }
      },
    {
      "id": 2,
        "type": "items",
        "attributes": {
          "name": "onion",
          "description": "vegetable, it will be a slow kill",
          "toxicity": 5,
          "treatment": "stomach pump and prayer if you believe", 
          "image": "https://thesmartcanine.com/wp-content/uploads/2016/11/can-dogs-eat-onion-rings.jpg"
        }
      },
    {
      "id": 3,
        "type": "items",
        "attributes": {
          "name": "grapes",
          "description": "fruit, if you drop it on the floor, catch it before they do",
          "toxicity": 3,
          "treatment": "induce vomiting", 
          "image": "https://i.pinimg.com/564x/bd/fd/74/bdfd742863ae216d6a9c8061d7991cd6.jpg"
        }
      },
    {
      "id": 4,
        "type": "items",
        "attributes": {
          "name": "chocolate",
          "description": "opposite of vanilla",
          "toxicity": 2,
          "treatment": "wait it out, my pup ate a candy bar and survived, JUST DON't LET IT HAPPEN AGAIN", 
          "image": "https://images.wagwalkingweb.com/media/daily_wag/sense_guides/can-dogs-live-after-eating-chocolate/intro/Chocolate2.jpg"
        }
      },
    {
      "id": 5,
        "type": "items",
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

```
</details>

<details>
  <summary>Suggestions</summary>
  
  * Method: POST
 
  * Endpoint: api/v1/suggestions
```json
  {
    "name": "raisin"
    "description": "shriveled up grapes"
  }
```
</details>

### <ins>Technologies</ins>

#### Versions
- bootstrap 5.1.3
- react 17.0.2
- redux 4.1.2
 
#### Development
![Atom][Atom-img]
![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Git][Git-img]
![Github][Github-img]
![Markdown][Markdown-img]
![Postman][Postman-img]
![VS Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

#### Languages and Frameworks
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![React](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

#### Deployment
![Heroku][Heroku-img]
![AWS](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)

#### Testing
![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)

#### Development Principles
![OOP][OOP-img]
![REST][REST-img]

### <ins>Contributors</ins>
![LinkedIn][LinkedIn-img]
- [Eric Sergeant](https://www.linkedin.com/in/ericsergeant)
- [Jessica Jones](https://www.linkedin.com/in/justjj/)
- [Joshua Benefield](https://www.linkedin.com/in/joshua-benefield-033898206/)
- [Pretty Boi Khoi](https://www.linkedin.com/in/khoifishpond/)
- [Ida Olson](https://www.linkedin.com/in/idaolson/)

![Github][Github-img]
- [Eric Sergeant](https://github.com/EricSergeant)
- [Jessica Jones](https://github.com/JeJones21)
- [Joshua Benefield](https://github.com/Jabene)
- [Pretty Boi Khoi](https://github.com/khoifishpond)
- [Ida Olson](https://github.com/idaolson)



<!-- Markdown link & img dfn's -->
[travis-image]: https://app.travis-ci.com/TannerDale/bones-be.svg?branch=main
[travis-url]: https://app.travis-ci.com/TannerDale/bones-be
[Github-img]: https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white

<!-- #### Development -->
[Atom-img]: https://img.shields.io/badge/Atom-66595C.svg?&style=flaste&logo=atom&logoColor=white
[Bootstrap-img]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Figaro-img]: https://img.shields.io/badge/figaro-b81818.svg?&style=flaste&logo=rubygems&logoColor=white
[Git-img]: https://img.shields.io/badge/Git-F05032.svg?&style=flaste&logo=git&logoColor=white
[Github-img]: https://img.shields.io/badge/GitHub-181717.svg?&style=flaste&logo=github&logoColor=white
[Markdown-img]: https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white
[PostgreSQL-img]: https://img.shields.io/badge/PostgreSQL-4169E1.svg?&style=flaste&logo=postgresql&logoColor=white
[Postman-img]: https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white
[Rubocop-img]: https://img.shields.io/badge/rubocop-b81818.svg?&style=flaste&logo=rubygems&logoColor=white
[Ruby on Rails-img]: https://img.shields.io/badge/Ruby%20On%20Rails-b81818.svg?&style=flat&logo=rubyonrails&logoColor=white

<!-- #### Languages -->
[ActiveRecord-img]: https://img.shields.io/badge/ActiveRecord-CC0000.svg?&style=flaste&logo=rubyonrails&logoColor=white
[CSS3-img]: https://img.shields.io/badge/CSS3-1572B6.svg?&style=flaste&logo=css3&logoColor=white
[HTML5-img]: https://img.shields.io/badge/HTML5-0EB201.svg?&style=flaste&logo=html5&logoColor=white
[Ruby-img]: https://img.shields.io/badge/Ruby-CC0000.svg?&style=flaste&logo=ruby&logoColor=white

<!-- #### Deployment -->
[Heroku-img]: https://img.shields.io/badge/Heroku-430098.svg?&style=flaste&logo=heroku&logoColor=white
[Travis CI-img]: https://badgen.net/badge/icon/travis?icon=travis&label
[Faraday-img]: https://img.shields.io/badge/faraday-b81818.svg?&style=flaste&logo=rubygems&logoColor=white

<!-- #### Testing -->
[Capybara-img]: https://img.shields.io/badge/capybara-b81818.svg?&style=flaste&logo=rubygems&logoColor=white
[Launchy-img]: https://img.shields.io/badge/launchy-b81818.svg?&style=flaste&logo=rubygems&logoColor=white
[Pry-img]: https://img.shields.io/badge/pry-b81818.svg?&style=flaste&logo=rubygems&logoColor=white
[RSPEC-img]: https://img.shields.io/badge/rspec-b81818.svg?&style=flaste&logo=rubygems&logoColor=white
[Shoulda Matchers-img]: https://img.shields.io/badge/shoulda--matchers-b81818.svg?&style=flaste&logo=rubygems&logoColor=white
[Simplecov-img]: https://img.shields.io/badge/simplecov-b81818.svg?&style=flaste&logo=rubygems&logoColor=white
[VCR-img]: https://img.shields.io/badge/vcr-b81818.svg?&style=flaste&logo=rubygems&logoColor=white
[Webmock-img]: https://img.shields.io/badge/webmock-b81818.svg?&style=flaste&logo=rubygems&logoColor=white

<!-- #### Development Principles -->
[OOP-img]: https://img.shields.io/badge/OOP-b81818.svg?&style=flaste&logo=OOP&logoColor=white
[TDD-img]: https://img.shields.io/badge/TDD-b87818.svg?&style=flaste&logo=TDD&logoColor=white
[MVC-img]: https://img.shields.io/badge/MVC-b8b018.svg?&style=flaste&logo=MVC&logoColor=white
[REST-img]: https://img.shields.io/badge/REST-33b818.svg?&style=flaste&logo=REST&logoColor=white

<!-- ### <ins>Contributors</ins> -->
[LinkedIn-img]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
