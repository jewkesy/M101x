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
LOG: 'Tests Succeeded! Copy/paste the below code to complete this assignment:'
LOG: '<secret code here>'
Chrome 43.0.2357 (Linux): Executed 4 of 4 SUCCESS (0.21 secs / 0.126 secs)
```
