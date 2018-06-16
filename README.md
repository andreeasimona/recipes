# Recipe searcher

A react client web app for the [Recipe Puppy API](http://www.recipepuppy.com/).

Queries the API for the given search term, displaying the first 20 results found

## Run in local enviroment
   - npm install
   - npm run

## Demo
![recipes](https://user-images.githubusercontent.com/6817073/41499401-15725326-7180-11e8-8f6b-6dfbf9dbcb24.gif)

## Project structure
![structure](https://user-images.githubusercontent.com/6817073/41499615-1676c90c-7183-11e8-9bed-58417424fdbe.PNG)

## Libraries
   - [Create React App](https://github.com/facebook/create-react-app) used to create the web client with no build configuration 
   - [lodash.throttle](https://github.com/lodash/lodash/tree/4.1.1-npm-packages/lodash.throttle) to throttle the user´s speed typing and improve the overall performance
   - [jsonp](https://github.com/teamcapybara/capybara) to call the Recipe Puppy API and bypass the API's CORS protocol
   - [async](https://github.com/caolan/async) to facilitate asynchronous JavaScript