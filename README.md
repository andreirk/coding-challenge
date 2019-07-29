You are asked to complete the following coding problem, it is fairly open ended in how you can implement your solution but if you find it’s taking you more than 90 minutes, you might be overcomplicating things.  

1. Fork this repo into your own github account.  Clone a copy (from your fork) locally.

2. Install dependencies with `yarn install` (If yarn is not installed globally and this command fails, execute `npm -i -g yarn` and then repeat step 2).

2. You can run the project as it is in its initial state with `yarn start`, the project is configured for hot reload, such that changes to the source files should be instantly reflected in the rendered HTML.  Note that the webpack config is set to target Google Chrome, so use that browser if there are issues.

3. There is a CSV file called people.csv which has several columns, among them "first" and "last" to indicate the first and last name of a person.

4. Add a button on the page to load a CSV (I highly recommend your page use npm package `papaparse` to parse the file, don't code specifically to that exact file as I will use a different file during my evaluation, just code to the structure of that CSV).

5. Using a 3rd party autocomplete control of your choosing, add to the page an autocomplete to select a user (by first and last name).

6. Once someone selects a person through this control, in some label display the `JSON.stringify` of all properties of the selected person (meaning including email, phone, title, etc…).

You are absolutely not required to spend a lot of time on CSS (though the webpack config is set to support both CSS and SASS (SCSS)), we’re simply looking for the complete end to end flow.

Once you feel that you’ve completed the assignment, PR the fork back to me.