# Cordant-challenge
Coding challenge for Cordant

## Once you have cloned the repo you may run the program by running
- npm install
## in the command line. Then navigate to localhost:8000 in your browser of choice.

### Experience
Unfortunately I could not complete this challenge in the two days that I attempted it. I initially planned to import the given data into a database, before building a back-end to support it with Node.js and a front-end in Angular to display the results. While this was a success initially, I did not have enough experience in Angular to build the front end in the framework. Thus I was not able to complete it, and what little front-end I have was created in ejs and is a basic table of links where a user may select a client.

### How I would Continue
I would create some JS logic to serve a html page that uses jQuery and ajax requests to collect the users click request and send the specific postcode to the google maps api (or parse it straight into an api link). Then the candidate postcode would be iterated through and compared via the api to the client postcode. The closest route would be displayed on the web page, preferably on a map.
