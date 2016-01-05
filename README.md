#Project 5 - Instagram Searcher
![Imgur](http://i.imgur.com/P71EYPE.png)


##Do Now 
Begin this session by completing the [Do Now](doNow.md) activity.

##Scope
You have just been hired by Social Media, But Better! LLC. For your first project you will be creating a webapp that uses the Instagram API to display photos tagged with anything the user types in. Your manager would like to test your skills. She has given you starter code with plenty of comments for completion. You have been given one week to make a fully functioning webapp.  

##Project Criteria
Your Manager has laid out the following requirements for the project: 

* The webapp will display 9 thumbnails of photos related to anything the user types in
* The user must be able to click the search button to display related thumbnails
* On any subsequent search, the system shall clear the prior results and show images reflecting results from the new search query.
* If the user clicks a "reset" button, the system shall clear the results of all thumbnails and clear the search bar of any text
* On mouseover, the instagram username shall display over the thumbnail image


##Learning Objectives
By the end of this project the employee will be able to...

* Register their application with Instagram to obtain a client id
* Get information from Instagram using its API
* Append images to and HTML page
* Empty content from a selected div

##References/Tools
* [Instagram Developers Guide](https://instagram.com/developer/)

 
##Vocabulary

* Append
* Empty
* Index
* Mouseover 
* Endpoint
* Callback

***
##Instructions

You are given Starter Code for this project which you must clone into your own workspace.
You will notice there are two js files. `instragram_client.js` is the work provided to you and `script.js` is the work you must complete. In order to understand what components you must build in script.js you must carefully read and understand the contents of instagram_client.js. 

####In order to make this webapp functional to the standards set out by your manager, you will need to complete the tasks below:

###1) Clone this repo into your own Cloud9 workspace


###2) Authentication
Authenticate your webapp by placing the client id you acquired in the [Do Now](doNow.md) into your code. Guidance on the process can be found in the [Instagram Developers Guide](https://instagram.com/developer/).

###2) script.js
In this file you will need to ready your document in order make the API call based on user input. 10 images will appear as thumbnails as a result of evaluating the results of the user input. 

###3) Reset!
Add a button named "reset" to your webapp. This button shall clear all thumbnail images and the search bar of any text from the previous search.

###Bonus) 
Your Manager has offered a stipend of $500 for each of the bonus requirements listed below: 

* On mouseover, the Instagram username shall display over the thumbnail image
* If the user clicks on a thumbnail, an overlay shall show with a larger version of the image, as well as the caption and the number of “likes” (if any) the image has received.
***

##Grading Criteria
Your manager will be grading your capability on this project based on [this rubric](/assessment.md).

##How to Submit
The final code for this project must be pushed back up to your repo on GitHub. **Then share the link to your repo at the project submission link found in the header of the Daily Session Document (bit.ly/ScriptEd).**  

To push to GitHub run the following commands in your terminal:  
`git status`  
`git add .`  
`git commit -m "example comment"`  
`git push origin master`

##Homework
Instructor will assign homework based on progress in class.



