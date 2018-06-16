* Recipe searcher

A react client web app for the [[http://www.recipepuppy.com/][Recipe Puppy API]].

Queries the API for the given search term, displaying the first 20 results found

** Run in local enviroment
   - npm install
   - npm run

** Demo

** Project structure
![image2](https://user-images.githubusercontent.com/6817073/41499327-7cbad6f4-717e-11e8-9e84-b67f8607a60b.PNG)

** Libraries
   - [[https://github.com/facebook/create-react-app][React]] used to create the web client with no build configuration 
   - [[https://github.com/lodash/lodash/tree/4.1.1-npm-packages/lodash.throttle][lodash.throttle]] to throttle the user´s 
   - [[https://github.com/teamcapybara/capybara][jsonp]] to call the Recipe Puppy API and bypass the API's CORS protocol
   - [[https://github.com/caolan/async][async]] to facilitate asynchronous JavaScript
