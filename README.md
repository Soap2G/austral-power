# Scott SRL website [![pages-build-deployment](https://github.com/Soap2G/scott-website/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/Soap2G/scott-website/actions/workflows/pages/pages-build-deployment)

https://soap2g.github.io/austral-power


### Getting the code
To download the repository, execute
```
git clone https://github.com/Soap2G/giocotta.git
```

### Compile it locally with Docker
As soon as you have docker installed, you can just do 
```
docker-compose up -d --build
```
To have the website pointing to [http://localhost:3000](http://localhost:3000/).

### Compile it locally without Docker
You need to install `npm`, you can get started from [this page](https://nodejs.org/en/download).
Then install `yarn` with:
```
npm install --global yarn
```
And build the website using 
```
yarn install
yarn start
```
