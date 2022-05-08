<?php
require 'view/load.php';
require 'model/model.php';
require 'controller/controller.php';
$pageURI = $_SERVER['REQUEST_URI'];

// Get URI end of the requested URI
$pageURI = substr($pageURI, strrpos($pageURI, 'index.php') + 10);

    // Load controller response depending if index or other
    if (!$pageURI) {
        new Controller('home');
    } else {
        new Controller($pageURI);
    }
