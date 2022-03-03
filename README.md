# Tech
Was built using the following tech and packages
- `node =>14.17`
- `Typescript 4.5`
- `prettier`
- `eslint`
- `jest`
- `yarn`



## Future improvements
- I would run a feature experimentation first to collect data to prove if it is what the user really need. 
- I would change at least accept the Project and Environment for the retention rule, as the current implementation has the potential to wipe out all the company deployments.
- Maybe archive for a period of time before completely remove it?
- [NoCode] An option could be looking for a better storage retention policy? 
- Not allow zero deployments to keep or have a proper discussion with the bisuness if it is what they really intend. Also run some experiments to see if that is what the customer needs.


## Assumptions and Additional Informations
- I assumed we would have an API to fetch the deployment, project, etc data.
- I assumed we would have an API to post the releases to be removed/archived.
- I assumed we would have an API to push the log information to.
- I assumed the shape of the data to be flattened / denormalized.
- I assumed that you could pass zero as keep param and it would wipe out all the deployments (not recommended).
-I also made a big assumption that the data that I'm working with would not exist by itself (Releases+Project+Environment only) if there is no deployment for associated with it. Therefore I couldn't create test scenarios for only releases or projects as they don't exist.


### Run Tests

Intall modules first, `yarn install` (you might need to install `yarn` if you don't have it already installed `npm i -g yarn`)

To run test, run the command line `yarn test`. 

To run test in watch mode, run the command line `yarn test:watch`. 


## Jest tests and test Coverage
![image](https://user-images.githubusercontent.com/8757288/156473042-ba6943b8-e594-4102-af24-bdcaa24f255f.png)


## Performance
Performance is a concern as the releases run for the whole company and it is ever increasing
I run some performance against `10k` releases.
It is currently running ~27 milliseconds
[jsFiddle](http://jsfiddle.net/EwertonRSilveira/3cz5n1y7/50)
![image](https://user-images.githubusercontent.com/8757288/156473486-435631b6-b787-4879-9b05-966abc0216af.png)



## License

👩🏻‍💻 Acknolegement: This project was based on [Jakub Synowiec Node &Typescript Template](https://github.com/jsynowiec/node-typescript-boilerplate) template.

Licensed under the APLv2.
