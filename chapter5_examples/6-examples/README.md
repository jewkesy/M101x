# Questions

## Homework 4.1

* Which of the following best describes AngularJS directives?

1. A directive associates an AngularJS template with its corresponding JavaScript functionality, such as a controller
1. A directive is responsible for making HTTP requests to the server and displaying results
1. A directive is responsible for exposing JavaScript functions that a template accesses
1. A directive is the same thing as a view

## Homework 4.2

* Which of the following `$http` calls violates the same-origin policy for HTTP requests, assuming that
your server is running on `http://localhost:3000`?

1. `$http.get('http://localhost:8080/test')`
1. `$http.get('/test')`
1. `$http.get('http://localhost:3000/test')`
1. `$http.get('//localhost:3000/test')`
1. `$http.get('test')`

# Code Exercise

In this exercise, you will implement the home view for the MEAN retail
application, the first view that the user will see when they visit your
site. The view contains a single search bar that searches for products by
text, that is, using the `/api/v1/product/text/:query` REST API endpoint.

You will primarily be concerned with writing code that passes the mocha tests
specified in the `test.js` file. Once you implement code that passes the tests,
you should be able to run your server using `node index.js` from the `server`
directory and see the results in action (as long as you copy the `config.json`
from the REST API homework into the `server` directory). However, we recommend
you implement the searchBar directive using karma rather than eyeballing it
in the browser. The tests in `test.js` will provide you faster feedback, and
also will provide you an exact specification for what you need to do to complete
this exercise.

You will have to work in 2 files to complete the `searchBar` directive.

* You will have to modify `SearchBarController` in `controllers.js` to fill
out the `update()` function, which will make an HTTP request to the server and
expose the server's response to your HTML.
* You will have to modify the HTML in `templates/search_bar.html` to add an
input field that has a two-way data binding to the `searchText` variable,
and calls the `update()` function using the [ngChange directive](https://docs.angularjs.org/api/ng/directive/ngChange).
You will also need to `ngRepeat` a div element for each search result.

In order to run tests, you should:

1. Run `npm install` in the provided sample code
1. Start gulp using `./node_modules/gulp/bin/gulp watch`
1. Start karma using `./node_modules/karma/bin/karma start ./karma.local.conf.js`
1. Modify `controllers.js` and `templates/search_bar.html` until the tests pass
and karma gives you the below output:

```
LOG: 'Tests Succeeded! Copy/paste the below code to complete this assignment (10 hex digits, without quotes):'
LOG: '<secret code here 3451e463a6>'
Chrome 43.0.2357 (Linux): Executed 4 of 4 SUCCESS (0.21 secs / 0.126 secs)
```
