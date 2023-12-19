# Project Overview

A Proof of Concept of a haircut catalogue. This project connects to a MongoDB database of haircuts containing haircut type, price, image, and description, and allows a user to search the catalogue by haircut type as well as sort by price and sort alphabetically. Haircuts are displayed as cards and are filtered automatically as the user types in the searchbar. This method of search is intuitive, quick, and grants the user an easy mode of navigation.
<br></br>

# Installation Instructions

This project is broken into 2 separate pieces, one containing clientside logic and the other containing the serverside code. Each contain their own package.json. To run the application,

1. Navigate to the `server` directory.
   1. Copy `.env.sample` and name it `.env`. This contains the database connection details.
   2. Run `npm install` to install the required packages.
   3. Run the server using `node server.js`
2. Navigate to the `app` directory.
   1. Run `npm install` to install the required packages.
   2. While the server is running, run `npm start` to run the client.
   3. The app will launch on a browser window on localhost.
      <br></br>

# Usage Guide

1. **Searchbar:** A mechanism to find haircuts by name based on user input.
   1. When there is no input in the searchbar, all haircuts will be displayed.
   2. When typing in the search bar, all haircuts containing the typed text in their name will display.
   3. This search is **case insensitive** for ease of use, while proper casing is maintained in the resulting haircuts.
2. **Dropdown Menu:** Allows the user an easy way to see which haircuts match their search and to pick a single haircut in the list as their selection if they choose. Only that haircut will be displayed.
   1. _Example:_ If I enter "braid" into the searchbar I will see that the dropdown as well as the haircuts displayed in the catalogue show "braids", "braid out", "braided crown", "fishtail braid", and "french braid." These are all the haircuts containing the substring "braid" in their name.
3. **Sort Price Button:** Toggles whether haircuts will be displayed in order of ascending or descending price.
4. **Sort Name Button:** Toggles whether haircuts will be displayed in order of alphabetical or reverse alphabetical order.
5. **Haircut Card:** Displays an image of the haircut so they user knows what it looks like, the name of the hairstyle, a description, the price of the haircut, and a button for more info. This button does nothing at the moment - see **Additional Notes** below for potential uses.
   <br></br>

## Additional Notes

1. **Haircut data:** This is a PoC, so the data is very unrealistic. Prices were copy-pasted from the prompt and are unrealistic. Descriptions were programmatically generated and are not very useful. Only a few haircuts actually have an associated image - the rest are placeholders.
2. The More Info button on the haircut cards does nothing as of now. Could potentially be used to show different barbershops nearby offering the hairstyle, a map showing where the hairstyle is offered, differing prices, or any other additional details a user may find helpful.
3. `data.js`: This file was used to populate the database with haircut data.
4. `test.js`: This file was used to test server and DB functionality. Specifically, it handled the request to populate the database and also test that fetching the haircuts worked properly.
   <br></br>

## Opportunities for Improvement

### Server

1. TypeScript is not currently used on the server. In past projects other users had trouble installing `ts-node` and using `ts-node <server>`, to run the server so I kept things simple and used regular JavaScript, whereas the client does use TS.
2. A more useful server. Right now, the only use of the server is to get all the haircuts from the DB and send them to the client. After implementing the project, I noticed very late that the directions said to handle search on the serverside. Oops! This will be a todo.
3. Responses are not very descriptive. The bare minimum is sent to the client.

### Client

1. As mentioned above, currently, the client handles all search logic. This works great for this example, but this approach wouldn't be very scalable as it is now.
2. Sorting
   1. Sorting is undone when the user changes their input. It would better to have it persist until the user intentionally disables it.
   2. It would look nicer if some kind of svg or icon were used on the sort buttons.
   3. More sophisticated sorting logic needed. Also a way to unsort (this doesn't matter much since the data is received in alphabetical order to begin with, but would be nice in other scenarios).
3. The code could be neater and modularized.
4. Error alerts and error handling could be more user friendly.
5. Designs could always be better! I just improvised the design and colors as I moved along with functionality.

### Testing

So far there is no automated testing. This is in progress...
