# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

## Fetching Data with Hooks in Functional Components

### Install JSON Server

```npm install -g json-server```

Create a `db.json` file with some data and a `'./data'` name folder and move de `db.json` file inside:

```json
{
  "items": [
    {
      "id": 0,
      "product": "Cheese",
      "price": "€52.00",
      "productName": "Generic Wooden Soap",
      "productAdjective": "Luxurious",
      "productDescription": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
      "department": "Baby"
    },
    {
      "id": 1,
      "product": "Pants",
      "price": "€113.00",
      "productName": "Handcrafted Metal Bike",
      "productAdjective": "Modern",
      "productDescription": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
      "department": "Jewelery"
    },
    {
      "id": 2,
      "product": "Shirt",
      "price": "€140.00",
      "productName": "Gorgeous Frozen Bike",
      "productAdjective": "Modern",
      "productDescription": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
      "department": "Jewelery"
    },
    {
      "id": 3,
      "product": "Towels",
      "price": "€156.00",
      "productName": "Oriental Soft Shoes",
      "productAdjective": "Refined",
      "productDescription": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
      "department": "Shoes"
    },
    {
      "id": 4,
      "product": "Chair",
      "price": "€67.00",
      "productName": "Tasty Rubber Ball",
      "productAdjective": "Ergonomic",
      "productDescription": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
      "department": "Grocery"
    }
  ]
}
```

### Run json-server

```json-server --watch data/db.json --port 3005```

### Run Application

`npm start`
