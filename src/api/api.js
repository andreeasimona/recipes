const jsonp = require('jsonp');
const async = require('async');

const maximumRecipes = 20;
const receivedRecipesPerRequests = 10;
const sendReuests = maximumRecipes / receivedRecipesPerRequests;
const getRecepes = function (callback, foodName, index) {
    return jsonp(`http://www.recipepuppy.com/api/?q=${foodName}&p=${index}`, {
        name: `cb${index}`
    }, (err, data) => {
        callback(err, data.results);
    });
};

const requests = function (foodName) {
    let stackRequests = Array.apply(null, Array(2));

    stackRequests.forEach(function (el, index) {
        stackRequests[index] = function (callback) {
            getRecepes(callback, foodName, index + 1)
        };
    });
    return stackRequests;
}

const promise = function (foodName, callback) {
    async.parallel(requests(foodName), function (error, results) {
        if (error) {
            callback();
        } else {
            if (results !== null && results !== undefined) {
                callback([].concat.apply([], results));
            } else {
                callback();
            }
        }
    });
}

export default promise;