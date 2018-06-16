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
    let stackRequests = [];
    for (let index = 1; index <= sendReuests; index++) {
        (function (index) {
            stackRequests.push(function (callback) {
                getRecepes(callback, foodName, index)
            });
        })(index);
    }
    return stackRequests;
}

const promise = function (foodName, cbSuccess, cbError) {
    async.parallel(requests(foodName), function (error, results) {
        if (error) {
            cbError();
        } else {
            if (results !== null && results !== undefined) {
                cbSuccess([].concat.apply([], results));
            } else {
                cbError();
            }
        }
    });
}

export default promise;