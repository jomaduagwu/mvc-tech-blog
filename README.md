# E-commerce Back End

## User Story
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

## Acceptance Criteria
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts



## Description
  Internet retail, also known as e-commerce, is the largest sector of the electronics industry, having generated an estimated US$29 trillion in 2017 (Source: United Nations Conference on Trade and Development). E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to the prevalence of these platforms, developers should understand the fundamental architecture of e-commerce sites.

  This is a back-end application for an e-commerce site where all CRUD operations can be tested using Insomnia Core. I configured a working Express.js API to use Sequelize to interact with a MySQL database.


## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Features](#features)
  - [Tests](#tests)
  - [License](#license)


  ## Installation
  Clone the respository from the repo in GitHub. Make sure you install Node.js and NPM on your computer. You will need to use MySQL2, Sequelize, Express and dotenv. Run `npm install` to install the required dependencies.

  ## Usage
  You can find the walkthrough video here - [ecommerce walkthrough video](https://drive.google.com/file/d/1fOZdtjZeqITRBuBOR-3y7jsqdmeZeHza/view?usp=share_link)

  ![ecommerce gif](./assets/ecommerce-back-end-application.gif)
  
  ![ecommerce screenshot](./assets/get-tags-screenshot.png)
  ![ecommerce screenshot](./assets/get-categories-screenshot.png)

  Start by opening the file in the terminal. Make sure you use the environment to update your MySQL username and password. Run `mysql -u root -p` to initialize MySQL, then type your password to login. Run `source db/schema.sql` to load the database and then `npm run seed` to seed data to your database. Run `npm start` to start the server and use Insomnia Core to test the API routes. 

  ![ecommerce back end](./assets/employee_tracker.gif)



## Credits

  

## Features
* Node.js
* Express.js
* MySQL2
* dotenv
* Sequelize
* Insomnia Core
* Handlebars.js


## Tests 



## License
The project is licensed under MIT. For more information, please refer to the LICENSE in the repo.
  



