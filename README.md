# Tech
Was built using the following tech and packages
- `node =>14.17`
- `Typescript 4.5`
- `prettier`
- `eslint`
- `jest`
- `yarn`



## Assumptions and Additional Informations
- I assumed we would have an API to fetch the deployment, project, etc data
- I created the class to encapsulate the releases data and the retention behaviour
- I assmed the shape of the data to be flattened / denormalized
 - I also made a big assumption that the data that I'm working with would not exist by itself (Releases+Project+Environment only) if there is no deployment for associated with it. Therefore I couldn't create test scenarios for only releases or projects as they don't exist.

### Run Tests

Intall modules first, `yarn install` (you might need to install `yarn` if you don't have it already installed `npm i -g yarn`)

To run test, run the command line `yarn test`. 

To run test in watch mode, run the command line `yarn test:watch`. 


## License

👩🏻‍💻 Acknolegement: This project was based on [Jakub Synowiec Node &Typescript Template](https://github.com/jsynowiec/node-typescript-boilerplate) template.

Licensed under the APLv2.