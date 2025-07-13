# udacity-image-processing-api

Udacity project for learning purposes, image processing api.
The project uses:

- TypeScript
- Jasmine for automated testing
- Express server
- Sharp library for image processing

# Installation

```
npm install
```

# Most important Scripts

## Build and test

```
npm run test:build
```

## Start the server

```
npm run start
```

## Usage

To reszie an image, place it in the images folder.
Then, visit the following endpoint `api/resize` and specify the following paramters:

- imageName
- width
- height

for example:

```
http://localhost:3000/api/resize?imageName=wildefire.jpeg&width=125&height=150
```
