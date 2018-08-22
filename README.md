This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Testing React 16 Portals with enzyme

This is a repo with an example of a working modal, using React 16 Portals.

This is the solution for the question and answer that I posted on [stackoverflow](https://stackoverflow.com/questions/48094581/testing-react-portals-with-enzyme)


## Running the project

Install dependencies

```
yarn|npm install
```

Start the project

```
yarn|npm start
```

Run the tests

```
yarn|npm test
```

## Testing portals

So basically the idea is that for us to test portals we need to modify our `jsdom` so when we use `enzyme` to mount our components, we have the desired div.
To modify the default jsdom html all we need to do before running our tests is this:

```javascript
const modalRoot = global.document.createElement('div');
modalRoot.setAttribute('id', 'modal-root');
const body = global.document.querySelector('body');
body.appendChild(modalRoot);
```


the code and the tests are self explanatory.

