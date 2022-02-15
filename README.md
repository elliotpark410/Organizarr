# Organizarr

We built this application with the busy student in mind. As students, we find ourselves overwhelmed with the amount of things we must keep track of. We realized that having our to-do items, notes, and access to study groups in one place would be a minor detail that would make a major difference!


<br>


## Links

Deployed App on Heroku
> [https://dry-badlands-77030.herokuapp.com/](https://dry-badlands-77030.herokuapp.com/)
<br>

<br>

Github Repository
> [https://github.com/lesliejpatino/Organizarr](https://github.com/lesliejpatino/Organizarr)
<br>

<br>
GIF of Application - Sign Up 
<img src="public\images\gifs\signup.gif" title="Sign Up Feature gif" width = 720px>
<br>

<br>
GIF of Application - Create To Do 
<img src="public\images\gifs\Dashboard.gif" title="Create To Do Feature gif" width = 720px>
<br>


<br>
GIF of Application - Create Note 
<img src="public\images\gifs\save_note.gif" title="Create Note Feature gif" width = 720px>
<br>


<br>
GIF of Application - Create Study Group 
<img src="public\images\gifs\studygroupdemo.gif" title="Create Study Group Feature gif" width = 720px>
<br>

<br>


## Table of Contents
  * [Getting-Started](#getting-started)
  * [Installation](#installation)
  * [Technologies-Used](#technologies-used)
  * [Contribution-Guidelines](#contribution-guidelines)
  * [Cloning-Guidelines](#cloning-guidelines)
  * [Code-Snippets](#code-snippets)
  * [Learning-Points](#learning-points)
  * [Authors](#authors)
  * [License-and-Acknowledgements](#license-and-acknowledgements)
<br>


## Getting-Started

Open your favorite web browser and enter the following web address to access. 

>https://dry-badlands-77030.herokuapp.com/
<br>

* Compatible with these internet browsers
<br>
<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/main-desktop-browser-logos.png" title="Browser Icons image" width = 200 >


* To see code HTML, any of these Text editors will work
<br>
<img src="https://miro.medium.com/max/1400/0*MyAfggJM7yH40Sdx." title="Text Editor Icons image" width = 200px>


## Installation

To run this application, you will need Node and other dependencies: 

1. You will need to install Node.js. Here is a link below:

>https://nodejs.org/en/download/

<br>

2. Once you have downloaded Node.js, you will want to download node package manager (npm). In command line, you can enter:

`npm install -g npm
`

<br>

3. After installing npm, you have to initialize npm. In command line, you can enter:

`npm init -y
`

<br>

4. Next, install all the dependencies in the package.json. In command line, you can enter:

`npm install 
`

5. Additionally, you will need to download mysql database to store and access data:

>https://www.mysql.com/downloads/

<br>


6. Lastly, you will need to download Insomnia for testing API routes:

>https://insomnia.rest/download

<br>


<!-- ## Prerequisites
Requires node.js, npm inquirer, and npm jest (optional)

<br> -->


<!-- ## Test-Instructions

To test the API, I recommend downloading [Insomnia's API Platform](https://insomnia.rest/) and enter the following in Insomnia's URL:

>GET http://localhost:3000/api/notes

<br>

>POST http://localhost:3000/api/notes

Example POST body: 
```bash
{
  "title":"Notes Title",
  "text":"notes text content"
}
```
*id is automatically generated so you do not need to enter id

<br>
<br>

>DELETE http://localhost:3000/api/notes/:id

<br>

Example DELETE: The API request below will delete note with id = "1"
>DELETE http://localhost:3000/api/notes/1

<br> -->


## Technologies-Used
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node.js](https://nodejs.org/en/) 
* [Express](https://www.npmjs.com/package/express) 
* [Express Session](https://www.npmjs.com/package/express-session) 
* [Express Handlebars](https://www.npmjs.com/package/express-handlebars) 
* [MySQL2](https://www.npmjs.com/package/mysql2)
* [Sequelize](https://www.npmjs.com/package/sequelize) 
* [Connect Session Sequelize](https://www.npmjs.com/package/connect-session-sequelize) 
* [dotEnv](https://www.npmjs.com/package/dotenv)
* [bcrypt](https://www.npmjs.com/package/bcrypt) 
* [Day.js](https://www.npmjs.com/package/dayjs) 
* [MySQL](https://www.mysql.com/downloads/)
* [Insomnia](https://insomnia.rest/download)


<br>


## Contribution-Guidelines
To contribute, please follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

<br>


## Cloning-Guidelines

To install this code, please use [Github's guidlines to clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

<br>

Github repository:
>https://github.com/lesliejpatino/Organizarr

<br>


<!-- ## Screenshots 

<br>
Initializing MySQL database
<img src="Images\Initializing MySQL database screenshot.png" title="Initializing MySQL database screenshot" width = 650px>

<br>
<br>
Adding seed file to MySQL database
<img src="Images\Adding seed file to MySQL database screenshot.png" title="Adding seed file to MySQL database screenshot" width = 650px>

<br>
<br>
Starting Application
<img src="Images\Starting Application screenshot.png" title="Starting Application screenshot" width = 650px>

<br>
<br>
Insomnia GET route for http://localhost:3001/api/categories
<img src="Images\Insomnia GET route screenshot.png" title="Insomnia GET route screenshot" width = 650px>
<br>

<br> -->

<!-- 
## GIF-of-Application

<img src="Images\E-Commerce-GET-routes.gif" title="E-Commerce-GET-routes gif" width = 400px>

Link to E-Commerce-GET-routes GIF 
> [https://drive.google.com/file/d/1-b9sKZIA8Pz4-CW6Co4tmYjEoUNh0QbL/view](https://drive.google.com/file/d/1-b9sKZIA8Pz4-CW6Co4tmYjEoUNh0QbL/view)
<br>

<br>

<img src="Images\E-Commerce-PUT-POST-DELETE-routes.gif" title="E-Commerce-PUT-POST-DELETE-routes gif" width = 400px>

Link to E-Commerce-PUT-POST-DELETE-routes GIF 
> [https://drive.google.com/file/d/1XVZE1bDq4WX2pvvH1lN1NoJW8ohasovM/view](https://drive.google.com/file/d/1XVZE1bDq4WX2pvvH1lN1NoJW8ohasovM/view)
<br>

<br> -->

## Code-Snippets

This code snippet shows our client side JavaScript executing a fetch request that hits the user login API and stores a user's username and password to the database

* Async / await syntax is used to make promises easier to write

* document.querySelector used to collect user-generated input from the login form

* If statement is used to verify an email and password have been entered

* Fetch() method used to do a POST method to api/user/login 

* document.location.replace to redirect the browser to a handlebar template

```
const loginFormHandler = async (event) => {
  event.preventDefault();
  
    const email = document.querySelector('#userEmail').value.trim();
    const password = document.querySelector('#userPassword').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log("login successful")
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
        console.log("login failed")
      }
    }
};
```

 <br>


## Learning-Points

* How to use Sequelize ORM

* How to use handlebar templates

* How to deploy on Heroku with MySQL

* How to create API routes and models 

* How to work with a team to resolve git conflicts

* How to create sessions to capture cookies and user information

* How to use MySQL Workbench and Insomnia for testing API routes


<br>


## Authors

 **1. Leslie Patino** 

[Github](https://github.com/lesliejpatino)
<br>

[LinkedIn](https://www.linkedin.com/in/lesliejpatino/)
<br>
<br>

 **2. Joshua Meza** 

[Github](https://github.com/705h-S)
<br>

[LinkedIn](https://www.linkedin.com/in/joshua-meza-sinai/)
<br>
<br>

 **3. Elliot Park** 

[Github](https://github.com/elliotpark410)
<br>

[LinkedIn](https://www.linkedin.com/in/elliot-park/)

<br>


## License-and-Acknowledgements
[![license](https://img.shields.io/github/license/DAVFoundation/captain-n3m0.svg?style=flat-square)](https://github.com/DAVFoundation/captain-n3m0/blob/master/LICENSE)

This project is licensed under the MIT license via UC Berkeley's Extension Program

<br>

Big acknowledgements and thank you to Jerome Chenette, Manuel Nunes, Vince Lee, Jeh-Yun Jung, and Hannah Folk for their support and guidance!

<br>


<!-- ## Contact
If you'd like to learn more about my projects, check out my Github profile: [https://github.com/elliotpark410](https://github.com/elliotpark410)

<br>

If you have any questions, please don't hesitate to email me at [elliotpark410@gmail.com](mailto:elliotpark410@gmail.com)

<br> -->





 
  

 



 



