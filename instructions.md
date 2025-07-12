## Project Instructions

You will be building an API that can be used in two different ways. As a simple placeholder API, the first allows you to place images into your frontend with the size set via URL parameters (and additional stylization if you choose) for rapid prototyping. The second use case is as a library to serve properly scaled versions of your images to the front end to reduce page load size. Rather than needing to resize and upload multiple copies of the same image to be used throughout your site, the API you create will handle resizing and serving stored images for you.

You will set up your Node.js project from scratch, install all dependencies, and write all necessary configurations to make your dependencies work together. Even though the project being built is quite simple, the way you set up this project will be scalable enough to move to an enterprise-level solution in the future. Imagine needing to process hundreds of images with multiple thumbnail sizes for an eCommerce solution. This project provides the building blocks for that level of functionality.

In addition to setting up and creating the functionality, you will use industry best practices to ensure that your code is as scalable as your architecture. Using TypeScript, unit testing, linting, and formatting, you will write code that is easy to read, maintainable, less error-prone, and easier to debug. At the enterprise level, it becomes possible that hundreds of people may need to interact with your code, so being able to work within standards is imperative to your success.

## Project Summary

This project aims to give you a real-world scenario in which you would read and write to your disk via a Node.js express server rather than a database. The project you create serves two purposes: to prepare you for setting up scalable code and architecture for real-world projects and tie together some of the most popular middleware and utilities found in Node.js projects. This project barely touches the surface of what is possible but will prove your ability to use what you’ve learned in real-world scenarios.

For this project, refactor and test as much as possible while you are building. Since you are using TypeScript and an unfamiliar library, it is sometimes easier to write and build in plain JS to see what your functions return; remember your submission needs to be in TypeScript. As your skills improve, typing in TypeScript will feel more intuitive. Make sure to remove any debugging code from your final submission.

## Project Instructions

1. Initialize your project. Add the dependencies required for this project, including Express, TypeScript, Jasmine, Eslint, and Prettier. Complete your package.json file.
   Where should your dependencies be placed?
   What scripts should you create to take advantage of the dependencies you've added?
   Are there other dependencies you would like to add or know you will need to improve your workflow?
2. Set up your project structure. Create folders and files for what you anticipate you will need for the project.
   How do you plan to keep your source code and build code separately?
   Where will you keep your tests?
   How do you plan to name your routes? Utilities?
3. Configure your middleware and dependencies. You have quite a few dependencies that all need to work together. Sometimes it's easiest to write some simple js functions to test that all of your dependencies work together before you begin adding any functionality.
   Does your TypeScript compile?
   Do your Eslint and Prettier scripts work?
   Are you able to write and pass a basic unit test?
4. Set up your server and create an API endpoint. Even though this application is fairly straightforward, you still want to set it up in a scalable way. How can you set up your server and route so that your project remains scalable? Only one endpoint is required. It's best to create this and test that it is working before you move on.
5. Install Sharp(opens in a new tab) and configure endpoint. Documentation for Sharp can be found here(opens in a new tab). It is required that you create a separate module for your processing functionality and import it into your route. It is only required that you add resizing, but you may add additional processing if you choose to extend your application. It is also only required that you work with jpg files, so keep that in mind if you choose to use your own images and they are other formats.
   Pay close attention to if you need to use asynchronous code or not. If you do, make sure you stay consistent throughout your application.
   There is limited information on using Sharp with TypeScript, but don't let that be a blocker. Think about what type the Sharp constructor would return. Have a look at the complete documentation(opens in a new tab) and the examples it provides.
6. Write your tests. If you haven't already been writing unit tests, now would be the time to start. Think about what you should test? At a minimum, you should have at least one test for your endpoint and at least one test for your image processing, but there are many different tests you could create.
7. Add caching. Add caching to your application so that repeated requests to your endpoint use pre-stored images rather than regenerating a new image each time.
8. Test, Debug, and Refactor. Think of edge-cases for your project and how someone may access your project. Should they get different error messages based on what's wrong? Make certain that your user isn't left in the dark when something goes wrong.
   Do all of your tests still pass?
   Does stopping and restarting your server cause any issues?
   Does your user get feedback when something goes wrong?
   Is your code easy to follow? Comments?
   Is your API production-ready?
9. Build, Document, and Submit. If everything else has gone well, you should be able to compile your typescript and start up your production server to test that everything still works as expected. Make sure you've provided all necessary information in your readme file, so your reviewer knows how to test your API. If everything works and your documentation is complete, you're ready to submit! Congratulations!
