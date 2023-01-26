Yelp Camp Project :

1) do npm init -y
2) npm i express mongoose ejs
3) open in VS code and create app.js as the main file.
4) In app.js include all the requires, add basic app.listen and app.get then start the node server using <nodemon app.js> and check.
5) Then create views folder and in that create a simple home.ejs file
6) then in our app.js to be able to render the home.ejs we have to add these below 3 lines
   const path = require("path");
   app.set("view engine", "ejs");
   app.set("views", path.join(__dirname, "views"));

--> Now we will create our first campground model.
1) Create a basic campground schema in the models/campground.js
    the schema will have title, price, location, description.
2) Connect it to our app.js , we have already exported our model from campground.js
3) Now we can try to create a route in app.js to display a staically created campground info
4) this campground is created and then saved inside a app.get call and is rendered on route
   /makecampground.

--> Now we will create a seed data
1) we will create a new folder and will have 3 files cities.js , seedhelper.js and index.js
2) this seeds folder will act independently to populate data in the yelp-camp database
3) its anchor file will be index.js, to run we need to use node index.js

1) Now we will set up a route where we will show all the campgrounds.
2) and then we will set up a show route for each of the campgrounds.

--> for edit a campground we can not use post, we will need to use put/patch in the form submitted
    values, for that we will use method-override
stop the node server and install method-override npm i method-override

