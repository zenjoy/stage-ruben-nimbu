# Nimbu website

## Usage

### Development server

```sh
npm start
```

Runs the app in the development mode with hot reloading enabled. \
Open [http://localhost:8080](http://localhost:8080) or server port specified in your `.env` file to view
it in your browser.

### Pages

To create new pages add an html template in the `src` folder \
and add it to `webpack/pages.js`

### Production build

```sh
npm run build
```

Builds the app for production to the `dist` folder.\
The build is minified and the filenames include hashes.

## Requirements

- `node`: `>=18`
- `npm`: `>=8`
