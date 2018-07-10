# Store Locator by Vishal Sakaria

First of all apologies for not submitting a read me before hand, I was eager to submit the test to you in a timely fashion. I did download the run the normal instructions from the dropbox link I provided and all worked fine.

I am currently running this project using `webpack 1.13.0` as a dev dependency since this is my own boiler plate project that I have been using for a few months.

I know that you are having some problems running the application, I can only think that the node version needs changing. Also I know that this app breaks when the webpack version changes, however the webpack version is locked to version `1.13.0` as a dev dependency so this shouldn't be the case. You could try using `nvm` to change you node version to the one below. Otherwise please give me an error message so I can help you debug.

## To run the project

With in the ssl folder

```
npm install
npm start
```

## To run the tests

With in the ssl folder

```
npm run test
```

All test run on a watcher using `npm start`
There are currently 31 passing tests covering, smart & dumb components, actions, thunks, reducers and selectors.
(I've missed some minor dumb components due to time)

## Versioning

I've run the project using `nvm` on a number of different `node` version and they all work fine.

Node version the project was built on is `8.11.1`

Node versions tested on `6.0.0` and `10.4.0`

I've even deleted all global `npm` packages to eliminating that possibility.

## Running localhost

The app runs on port `3000` click the link to run the app if a broswer window doesn't open on `npm start`

http://localhost:3000

Sometimes you may have another app run on `3000` in which case the follow command will kill the process on that port.

```
sudo lsof -i tcp:3000
```

or

```
netstat -vanp tcp | grep 3000
```

## Other caveats

The search button includes the SVG via a import statement allowing SVG's to be written to an image src attribute directly, unfortunately this import system doesn't work with the Mocha test environment and needs to be configured. I've just included a data encoding for the SVG.

I'd setup within webpack alias for example `@components` which would refer to the components folder from any location. These alais break within the mocha test and need to be configured. So alot of place goes back to `../..` convention :(

The `App.js` componenet is partialy tested. This is because of the session storage which is mocked using `mock-local-storage` however the test need tear downs added in order to aviod the first test, testing init state, from being set to a new state based on session storage changes. This needs a little extra time.

## Warning and Errors

You'll probably see this warning in the console or the tests

`warning.js?8a56:33 Warning: Failed propType: Calling PropTypes validators directly is not supported by the`prop-types`package. Use`PropTypes.checkPropTypes()`to call them. Read more at http://fb.me/use-check-prop-types Check the render method of App`.

I've looked into this and it's a React issue regarding the versioning. I suspect I could partially be fixed with react version `15.5.8`, however it's not a total fix so I decided to leave it.

Also as you may know `prototypes` do not get included in production builds for performance reasons.

Please see:
https://github.com/reduxjs/react-redux/issues/669
