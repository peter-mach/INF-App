# INF

Based on React Slingshot. Tech includes:

| **Tech** | **Description** |**Learn More**|
|----------|-------|---|
|  [React](https://facebook.github.io/react/)  |   Fast, composable client-side components.    | [Pluralsight Course](https://www.pluralsight.com/courses/react-flux-building-applications)  |
|  [Redux](http://redux.js.org) |  Enforces unidirectional data flows and immutable, hot reloadable store. Lean alternative to [Facebook's Flux](https://facebook.github.io/flux/docs/overview.html).| [Tutorial](https://egghead.io/series/getting-started-with-redux)    |
|  [Babel](http://babeljs.io) |  Compiles ES6 to ES5. Enjoy the new version of JavaScript today.     | [ES6 REPL](https://babeljs.io/repl/), [ES6 vs ES5](http://es6-features.org), [ES6 Katas](http://es6katas.org), [Pluralsight course](https://www.pluralsight.com/courses/javascript-fundamentals-es6)    |
| [Webpack](http://webpack.github.io) | Bundles npm packages and our JS into a single file. Includes hot reloading via [react-transform-hmr](https://www.npmjs.com/package/react-transform-hmr). | [Pluralsight Course](https://www.pluralsight.com/courses/webpack-fundamentals)|
| [Browsersync](https://www.browsersync.io/) | Lightweight development HTTP server that supports synchronized testing and debugging on multiple devices. | [Intro vid](https://www.youtube.com/watch?time_continue=1&v=heNWfzc7ufQ)|
| [Mocha](http://mochajs.org) | Automated tests with [Chai](http://chaijs.com/) for assertions and [Cheerio](https://www.npmjs.com/package/cheerio) for DOM testing without a browser using Node. | [Pluralsight Course](https://www.pluralsight.com/courses/testing-javascript) |
| [TrackJS](https://trackjs.com/) | JavaScript error tracking. | [Free trial](https://my.trackjs.com/signup)|
| [ESLint](http://eslint.org/)| Lint JS. Reports syntax and style issues. Using [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) for additional React specific linting rules. | |
| [SASS](http://sass-lang.com/) | Compiled CSS styles with variables, functions, and more. | [Pluralsight Course](https://www.pluralsight.com/courses/better-css)|
| [Editor Config](http://editorconfig.org) | Enforce consistent editor settings (spaces vs tabs, etc). | [IDE Plugins](http://editorconfig.org/#download) |
| [npm Scripts](https://docs.npmjs.com/misc/scripts)| Glues all this together in a handy automated build. | [Pluralsight course](https://www.pluralsight.com/courses/npm-build-tool-introduction)  |

The starter kit includes a working example app that puts all of the above to use.

## Get Started
1. **Initial Machine Setup**. First time running the starter kit? Then complete the [Initial Machine Setup](https://github.com/coryhouse/react-slingshot#initial-machine-setup).
2. **Clone the project**. `git clone https://github.com/coryhouse/react-slingshot.git`.
3. **Install Node packages**. `npm install`
4. **Run the example app**. `npm start -s`
This will run the automated build process, start up a webserver, and open the application in your default browser. When doing development with this kit, you'll want to keep the command line open at all times so that your code is rebuilt and tests run automatically every time you hit save. Note: The -s flag is optional. It enables silent mode which supresses unnecessary messages during the build.
5. **Review the example app.** This starter kit includes a working example app that calculates fuel savings. Note how all source code is placed under /src. Tests are placed alongside the file under test. The final built app is placed under /dist. These are the files you run in production.
6. **Delete the example app files.** Once you're comfortable with how the example app works, you can [delete those files and begin creating your own app](https://github.com/coryhouse/react-slingshot#i-just-want-an-empty-starter-kit). You can always refer to this repo for the example app code that you deleted.

| **Script** | **Description** |
|----------|-------|
| prestart | Runs automatically before start. Calls remove-dist script which deletes the dist folder. This helps remind you to run the build script before committing since the dist folder will be deleted if you dont. ;) |
| start | Runs tests, lints, starts dev webserver, and opens the app in your default browser. |
| open | Opens the app in your default browser. |
| lint | Runs ESLint. |
| lint:watch | Runs ESLint and watches all files so that they are automatically linted upon save. |
| clean-dist | Removes everything from the dist folder. |
| remove-dist | Deletes the dist folder. |
| create-dist | Creates the dist folder and the necessary subfolders. |
| build:html | Adds trackJS tracking script and copies to /dist. |
| build:sass | Compiles SASS, minifies, generates sourcemap, and stores in /dist. |
| prebuild | Runs automatically before build script (due to naming convention). Cleans dist folder, builds html, and builds sass. |
| build | Bundles all JavaScript using webpack and writes it to /dist. |
| build:verbose | Same as above, but verbose so you can see all the details happening including warnings. |
| test | Runs tests (files ending in .spec.js) using Mocha and outputs results to the command line. Watches all files so tests are re-run upon save. |
