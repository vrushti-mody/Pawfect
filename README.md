<p align="center">
    <img src="https://media2.giphy.com/media/VtslywgwNos5a/giphy.gif" width="200" alt="Corgi">
  <h1 align="center">Pawfect</h1>

  <p align="center">
    Beware of the dog, he will steal your heart.
  </p>
</p>

[![PR's Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](https://github.com/vrushti-mody/Pawfect/pulls)
[![Issues](https://img.shields.io/github/issues-raw/vrushti-mody/Pawfect)](https://github.com/vrushti-mody/Pawfect/issues)
[![Contributors](https://img.shields.io/github/contributors/vrushti-mody/Pawfect)]()
![Languages](https://img.shields.io/github/languages/count/vrushti-mody/Pawfect)
[![License](https://img.shields.io/:License-MIT-blue.svg?style=flat-square)](http://badges.mit-license.org)

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Why Pawfect?](#why-pawfect)
  - [About the Project](#about-the-project)
- [Built With](#built-with)
- [Development](#development)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## Why Pawfect?

In a world marred by 'Tyranny of choice', unsustainable discounts, similar looking mass produced products, and mechanical shopping, Pawfect is like a breath of fresh air. We bring the joy, emotions, and serendipity back in your shopping.

Adapting to the perpetually changing technological and dimensional needs of the customers, Pawfect is meant to celebrate the love for dogs and our respect for those who treat their dogs well. At Pawfect, we believe that pets are family. And family deserves only the best.

Our E-Commerce platform includes specialty items like treats and toys, shampoos and grooming accessories; we are also heavy into health products which include multi-vitamins and supplements for all aspects of your furry friend's health and well-being from teeth to tail. Sniff around and you'll find what you're after! Our goal has been and will continue to be to provide top quality, non prescription vet products while engaging our customers with the best customer service and prices!

## About The Project

### Features

Users can do the following:

- Create an account, login or logout
- Browse available products added by the admin
- Add products to the shopping cart
- Delete products from the shopping cart
- Display the shopping cart
- To checkout, a user must be logged in
- Checkout information is processed using stripe and the payment is send to the admin
- The profile contains all the orders a user has made

Admins can do the following:

- Login or logout to the admin panel
- View all the information stored in the database. They can view/add/edit/delete orders, users, products and categories. The cart model cannot be modified by an admin because a cart is either modified by the logged in user before the purchase or deleted after the purchase.
### Built With

This project would never have been possible without these wonderful frameworks and project.

- [Node.js](https://nodejs.org)
- [EJS](https://ejs.co)
- [Socket.io](https://www.npmjs.com/package/socket.io)
- [MongoDB](https://www.mongodb.com/)
- [Stripe](https://stripe.com/)
- [Nodemailer](https://nodemailer.com/about/)
- [Mapbox API](https://docs.mapbox.com/api/overview/)
- [Passport.js](http://www.passportjs.org/)

<!-- GETTING STARTED -->

## Development

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

Clone the repo and hit npm install.

- npm

```sh
npm install
```

### Startup

1. Clone the repo

```sh
git clone https://github.com/vrushti-mody/Pawfect.git
```

2. Install the packages

```sh
npm install
```

3. Create a .env file in home directory with valid credentials as follows

```
MONGO_URI = "YOUR MONGO URI"
SESSION_SECRET = "YOUR SESSION SECRET"
STRIPE_PRIVATE_KEY = "YOUR STRIPE PRIVATE KEY"
GMAIL_EMAIL = "YOUR EMAIL"
GMAIL_PASSWORD = "YOUR PASSWORD"
ADMIN_EMAIL = "YOUR EMAIL"
ADMIN_PASSWORD =  "YOUR PASSWORD"
ADMIN_COOKIE_NAME = "YOUR RANDOM NAME"
ADMIN_COOKIE_PASSWORD = "YOUR PASSWORD"
```

4. Start the project

```JS
npm start
```

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/vrushti-mody/Pawfect/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

> *Make sure to go through the [Code of Conduct](CODE_OF_CONDUCT.md) before contributing!*


<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.md` for more information.

- Copyright 2020 © [Vrushti Mody](https://github.com/vrushti-mody)

<!-- CONTACT -->

## Contact

- Vidhi Mody <[@vidhi-mody](https://github.com/vidhi-mody), vidhimody6@gmail.com>
- Vrushti Mody <[@vrushti-mody](https://github.com/vrushti-mody), vrushtimody6@gmail.com>
- Soham Parekh <[@und3fined-v01d](https://github.com/und3fined-v01d), soham.parekh1998@gmail.com>

Project Link: [https://github.com/vrushti-mody/Pawfect](https://github.com/vrushti-mody/Pawfect)

Try out our project [`here`](https://thepawfectlife.herokuapp.com/)

[`Video Demo`](https://www.youtube.com/watch?v=MR3VBKC2m58)
