# EngageTech Front End Coding Challenge Solution

Challenge solved

## Prerequisites
Angular CLI: 12.2.1
Node: 12.22.1
Package Manager: npm 6.14.12
Docker: 20.10.8

## Getting start backend
* Go to directory backend project backend
* Generate the image
```
docker build -t frontend-coding-challenge .
```
* Run the container
```
docker run -d -p 6502:6502 frontend-coding-challenge
```

## Getting start frontend
* Go to directory backend project frontend
* Intall dependencies of the project
```
npm i
```
* Run the frontend application
```
npm run start
```
* Test the web application http://localhost:4200/
