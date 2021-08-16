# EngageTech Front End Coding Challenge

## Who is this for?

Occasionally we get to speak with wonderful engineers that would be a great addition to our super nice team. When this happens, we want to give them the chance to show what they can do, so we share this challenge with them.

We are not looking for random coding submissions, if you found this repository by yourself and just want to give it a go, that's fine, enjoy! But we probably won't be able to find the time to review it, or take things further.

## Overview

This coding challenge should allow you to show off your Angular (version 6 or later) and HTML/CSS abilities. Inside the `design` folder are four images which represent the various states of the table we would like you to build, with data supplied from a REST endpoint.

Two of the images show the initial default view of the data set, with the totals at the bottom of the table, Direct Contractors at the top, and the list of providers sorted alphabetically between them.

The remaining two images show how the table is represented when sorted by columns other than Payroll Provider.

You will need to create an Angular application that displays the data returned from a  REST endpoint provided by the included Java application.

For matching the visual aspect of the designs, you are free to use any CSS styles you like, with any methodology you prefer. The font family should be `Open Sans`.

We are not looking for extensive browser support, providing it works in recent versions of Chrome and Firefox, that's fine!

### Requirements

The following list contains the minimum requirements for this project:

* The completed page should accurately represent the design templates
* Clicking the column headings should sort the data from highest to lowest values, or alphabetical as appropriate
* When sorting by Payroll Provider, Direct Contractors should always appear as the first entry
* When sorting by any other column, Direct Contractors should appear sorted with the provider entries

### Extra credits

If you fancy doing a little extra, here are some things that might be nice to add:

* Clicking column headings should toggle sorting in forward and backward directions for that column
* Show the currently sorted column data in a darker colour
* Mobilise the table for small devices
* Animate the re-ordering of the table rows

### Things we are looking for

We want this to match the mocks, you'd be amazed (or maybe you wouldn't?) the percentage of submissions in the past that do not. A good eye for detail is important to us.

How you structure and name classes in your style sheets matters. Is there any methodology, is it scaleable? Can it be re-used for other design patterns? Or are you just hacking things together until they look right?

That things work as the requirements describe. It's okay to ask questions if you don't understand something, we collaborate regularly with other engineers, designers and product managers and always encourage discussions.

If we like the end result, we will want you to talk us through your code and any decisions you made.

### Running the back end

The back end requires Java 8, and can be run from the `backend` directory with the command `./run.sh`

If it launches correctly you should see the following in the console:

`INFO  [2015-10-29 13:17:10,166] org.eclipse.jetty.server.Server: Started @2126ms`

This should expose an endpoint on the following URL:
`http://localhost:6502/application/labourstats`

Authentication is not required, and we don't expect you to add any!


# Solution
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

