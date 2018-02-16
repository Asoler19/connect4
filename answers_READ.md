How do we measure the length of the critical rendering path? (10 pts)

The number of server round trips your page must do in order to fully load and render

2)What are the events in the Timeline pane which show the DOM being built, the CSSOM being built, and the render tree being built? (10 pts)

Parse HTML, Parse CSS, Layout 
What is the render tree? (10 pts)

The CSSOM and DOM trees are combined into a render tree, which is then used to compute the layout of each visible element and serves as an input to the paint process that renders the pixels to screen. These nodes are required to render the page.

What are three things you can do in order to speed up a website's load time? (10 pts)

minify your files(css, js , html)
reduce server response time -Eliminate render-blocking JavaScript and CSS in above-the-fold content Show how to fix -Enable compression -Leverage browser caching
What is the name of the Google tool you can use to see a list of things you can do to improve your page's load speed? (10 pts)

timeline pagespeed tools

What is the purpose of including multiple elements within a single element?

The purpose of mutliple source elements within a single video is to ensure that the video plays in as many browsers as possible. Some browsers wont support specific formats.

Use webpack to bundle all the files in the following project: https://github.com/Swolebrain/connect4 Setup Steps:

Fork the project by going to the above link and clicking "Fork" near the top right of the screen The project will now have a copy in your own github page. Clone it from there. In your computer, initialize this folder as a node project. Install webpack, webpack dev server, and make sure they are saved as development dependencies in package.json Split out the code from the createTable function and the isLegitEdge function into separate files. Make sure each function has its own file. Back in your main file, require/import the contents of your two new files Create an npm script to use webpack to fire the dev server and create a javascript bundle (one single file containing all your JS). Do anything else you need to do in order to get the bundle working and test your site. Before submitting, ensure your code is bundled into one file. Commit and push to github Upload the game to yourname.fvi-grad.com Bonus points: Produce a minified bundle for the exercise above using an uglify plugin.