## Getting Started
Skiff development and testing requires [Node.js](https://nodejs.org/). 

Install all the dependencies:

    `npm install`

### Setting up a dev environment

    `npm run setup:mock`

Requires Docker Engine and Docker Compose.  See the [mock/README.md](mock/README.md) for more information.

    `npm run build`

The result will be a bundled js file that will include all dependencies for use in a single html script tag.

    `npm start`

Start a server at project root to use the app.

##### For development
    `npm run dev`

## Architecture/Design
Tools
* React.js
* Redux
* Typescript2
* Webpack2

Business logic predominantly lives in the *reducers/*.  The one exception is validation in *actions/* due to asynchronous server-side calls and different action emitting per outcome (https://github.com/reactjs/redux/issues/1165#issuecomment-228102314). 

Service delegations are abstracted using the factory pattern and default to using the local mock.  The mock is a ReST API wrapping a PostgreSQL database using a dump of development data. 

## TODO
* Update LICENSE.md
* Update to Typescript 2.0 
* "postbuild": "cp build/lib/bundle.js dist/skiff-$npm_package_version.js && cp .env dist && sed -i -- 's/{env}/'\"$npm_package_config_env\"'/g' dist/.env",



