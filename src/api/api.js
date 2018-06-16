const jsonp = require('jsonp');
const async = require('async');

const maximumRecipes = 20;
const receivedRecipesPerRequests = 10;
const sendReuest = maximumRecipes / receivedRecipesPerRequests;
const getRecepes = function (callback, foodName, index) {
    return jsonp(`http://www.recipepuppy.com/api/?q=${foodName}&p=${index}`, {
        name: `cb${index}`
    }, (err, data) => {
        callback(err, data.results);
    });
};

const requests = function (foodName) {
    let stackRequests = [];
    for (var index = 1; index <= sendReuest; index++) {
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
            cbSuccess([].concat.apply([], results));
        }
    });
}

export default promise;