# UI/UX Design - Generic Data Viewing Application
> Website for viewing 

This project was created for the sake of giving me knowledge and hands-on experience with website/web application/mobile phone applications.

What this project is is a generic tamplate for users to view any kind of data that can be visualized by tabulating it. The programmer/designer would just need to fill in the tables with the appropriate data and they would be have a functional and practical solution to their business needs! The app also spans two different platforms, a website (or web application depending on what you want to call it) and a fully fledged out Android application meant to be released on the Google Play store. An iOS version is not planned at the moment, only because I myself don't have any Apple devices, thus am not able to submit iOS apps to the App Store.

This is the Android application version of the project. The data on this version is displayed differently because on a mobile device we have to take into account that there is less space on a screen to display such data. Thus, we need to fit every thing more close to each other, especially the tables full of data. As such there are no margins between tables, the font size was decreased and the navbar was replaced with a hamburger menu, of which it still shows what is going on in the screen for a better user experience.

![screenshot](images/documentation/homepage.jpg)

## Installation

Coming soon: download this project from the Google Play Store, search for Generic Table Data Viewing

## Features

-A homepage to choose the page you want to view, with each page being linked by a square on the grid. The homepage also includes buttons for 1) viewing an "About Me" section to be filled out by the developer (important for the user to be informed about the big picture idea of the app), 2) a key for the developer to explain how his tables are meant to be interpreted by the user as (important for the user to understand how the system works) and a button that takes the user to a note-taking section (important for the user to write his or her own notes about the data being displayed on the app). The note taking section was embedded from one of my other projects showcased in my portfolio where I talk more about how it works and why it's a useful tool in frontend web developping.
-Tables in each page with the data being neatly displayed and each entry is normalized. (Clean, neat and colorful styling enhances the users experience and in some cases ugly styling can totally ruin the user's experience of the app)
-A navbar for wide screens to navigate through the different pages (enhances user experience in giving him quick navigatibility)
-A hamburger icon and menu that accomplishes the same user experience goals for smaller devices. Both of these navigation tools complement the home page's grid menu.
-The three buttons below the navbar all display different UI's and pieces of information to convey to the user in a very neat and clean manner, there each displayed "on top" of the rest of the UI of each page, in small windows called modals.
-Lastly, in order for the note-taking system to work as intended you will have to use the root directory to save all of your pages and you will additionally have to name each file some name in which the first 5 characters that appear on the name are unique from every other first five characters that appear on every other page, ie "page1", "page2", "page3", "page4" are all valid (parsing and ID generating was easier this way)

## Stack
This is an entirely frontend project. There are no servers and there is no network transfers other than CDN's.
Frontend:
-jQuery
-Bootstrap
-HTML5+CSS3+Javascript

Mobile Frameworks:
-Android


## Release History

* 0.8 - We are here
    * Initial release - f

*0.81 - Upcoming First official update
	* FIXED - Clicking on a hamburger now removes the scroll down menu, like the rest of the pages. The issue was that I included jQuery twice by accident.
* 1.0
    * ADD: All of the features necessary for this web application to accomplish all of its pre-established goals.

## Meta

Ray Garcia – [@RayGarc7](https://twitter.com/RayGarc7) – rgarcia.7770@gmail.com

Distributed under the MIT license. You may not redistribute my code unless you credit me as the original author and acknowledge I'm not liable under any legal circumstances.


## Contributing

You may and are encouraged to take this project as a blank project and fill it the markup with your own data, as well as adding any additional functionality to it. In fact, let me know once you finished and I'll retweet/favorite your work!