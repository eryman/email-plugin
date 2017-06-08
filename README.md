# Email Plugin

## Using the Email Plugin

This application is designed to add an email contact form to your website.

## Directions:

Copy/Paste the following files/folders into your page's home directory: css, js, emailform.php

In the head of the HTML, insert the following: 

    <link href="css/email.css" rel="stylesheet">

In the body of the HTML, insert the following line wherever you'd like your email form to show up:

    <div id="contact"></div>

At the bottom of the body of the HTML, insert the following lines:


    <script src="js/jQuery.js"></script>

    <script src="js/emailplugin.js"></script>

Lastly, all you need to do is edit a few lines in emailform.php with the destination email address

### emailplugin.php:

* line 2 => Set the variable "destination" to the email address of the recipient
