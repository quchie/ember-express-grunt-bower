ember-express-grunt-bower
=========================

Quick and dirty Boilerplate for EmberJS, ExpressJS, with grunt and bower. 

This project is heavily based on Yeoman Ember generator, so it comes with livereload.


## Current Configuration
* emberjs 1.0.0
* handlebars 1.0.0
* express 3.4.0


## Pre-reqs
* Dahl's Node duhh.
* [npm](http://nodejs.org/)
* `npm install -g grunt-contrib-compass`
 

## Usage
Clone this repo or download this repo. Then, cd into the folder and run these commands:

* `npm install`
* `bower install`
* `grunt server`

Now go to `http://localhost:9000` in your favourite browser.

## Livereload
To use livereload, you have to download the livereload [chrome extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei/)
. Then, with gods will, you can Simply click 'enable live reload' on top right corner in chrome to inject the script to the http://localhost:9000 page.

Well you can always inject it using grunt in dev mode. its in TODO of course.

## Commands available:

`grunt server`
Run the development server. After running this command simply go to localhost:9000

`grunt build`
This will create or update the dist folder for production

`grunt test`
Sorry i havent implement this well enough. You can however adjust the gruntfile to meet your Test needs.

`grunt` 
This will create or update the dist folder for production

## Todos
Make Yeoman generator?

## Thanks
Inspired by omkarpatil's Yeoman + Express + Angular = Full-Stack Workflow
[Excelent omkarpatil blog](http://blog.omkarpatil.com/2013/06/yeoman-express-angular-full-stack.html)








