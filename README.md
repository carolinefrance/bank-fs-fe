# Bank-Full-Stack-App - Front End
The original code for this full-stack MERN app was created by faculty for MiT xPro's Professional Certificate in Coding: Full Stack Development with MERN course (August 2022 cohort). This respository is the backend of the app, which connects to the Express web server and MongoDB (the name of the front-end repository is bank-fs-fe). I modified the appearance of the app with CSS, Bootstrap, PhotoShop, and Adobe Stock images. I combined the Deposit/Withdraw components into a Transactions component. I created a Transactions page, so a user can transfer money from their account into another user's account. I created a Resources page to address the needs of my ideal users, who are low-income individuals in crisis. I created an employee user type; employees can be added through Postman. I added more fields and delete functionality to the AllData page, so employees can delete a customer.
##### Caroline J. France
Last updated on 14 June 2023
### Project Description
This full-stack MERN banking app is modified from the course's Module 27 exercise: Tiered Bad Bank, and it is a capstone project. Viewers will see a single-page create React app that is an interface for a bank. The previous banking app (bank repo is available in my profile) focused on the front-end and simulated a backend. In contrast, this app incorporates the front end, middleware, and back end. Specifically, React is connected to an Express/Node web server, and MongoDB. Upon loading, the user needs to create an account and log in before being able to access the transaction page. Only users who are employees can view the all data/account information page. Users can test employee user functionality when they login with e-mail: username = Employee, password = password123.
### Refactored from Previous Version
* Upon logging in with e-mail or Google, the user's name appears in the top-right corner
* Log-in now incorporates OAuth2, so users can log in with their Google account
* Banking balance persists across log-ins
* Data are passed to a Mongo database instead of being written to a local file
* Data persists after a user logs out and logs back in
Additional features include the following:
* User role: employee, client
* Employees can see more user fields and delete a user from AllData
* User profile updates are persistent
* Users can transfer money from their account to another account
* Users can access external resources through the Resources component
### Future Improvements
Here are some redesign/reconfigure ideas for this project:
* Add stricter ES6 validation for form fields.
* Add options: currency, language,
* Use useEffect and buttons to switch between dark and light mode stylesheets.
* Add more employee functionality to edit user data
* Add an employee form, so employees can add resources to the Resources component
* Redesign front-end layout (Tailwind, Midjourney)
* Integrate an external financial API
* Integrate an AI chatbot

### View the Live App
* View the front-end only version's live build on Netlify at [https://carolinefrancebankingapp.netlify.app/](https://carolinefrancebankingapp.netlify.app/)
* View the current version's live build (https://bank-fs-fe.onrender.com/)

### Locally Run the App
Download all files in both the bank-fs-fe repository and bank-fs repository into a directory on your computer. Open the directory in your code editor. You should have Node version 16 or higher installed. 

In the terminal / command prompt, run the following commands:

Open the directory with the front end app files in your code editor.
* cd/bank-fs-fe

Install the following dependencies:
*	npm install bootstrap
> bootstrap navigation and cards are used in this app

* npm install react-router-dom
> enables navigation between pages

* npm install react-bootstrap
> enables bootstrap functionality in react

* npm install react-hook-form
> enables functionality of forms in react

*	npm start
> app is now visible on your local computer in the browser at [http://localhost:3000/](http://localhost:3000/)

Open the directory with the front end app files in your code editor.
* cd/bank-fs

Install the following dependencies:
*	npm install express, mongoose
> enables connection to the Express web server and mongo database

To run:
* npm start

### Technologies Used
# Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Images
Free licensed images from Adobe Stock [https://stock.adobe.com/Library/urn:aaid:sc:US:c6e64467-4274-4b77-8709-13f30cddf20e](https://stock.adobe.com/Library/urn:aaid:sc:US:c6e64467-4274-4b77-8709-13f30cddf20e)

### Author of the Revised Project
Caroline J. France

### License: Starter Code
MIT License

Copyright (c) 2020 John Williams

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
