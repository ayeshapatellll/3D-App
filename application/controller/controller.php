<?php
include 'application/debug/ChromePhp.php';

class Controller {
    public $load;
    public $model;

    // Constructor to load the view and connect to model, and run function under input 
    function __construct($pageURI = null) {
        $this->load = new Load();
        $this->model = new Model();
        $this->$pageURI();
    }

    function home() {
        // Gets the brands used and forwards the data to the view
        $data = $this->model->dbGetBrands();
        $this->load->view('viewIndex', $data);
    }

    function apiCreateTable() {
        // Creates model and forwards response to view
        $data = $this->model->dbCreateTable();
        $this->load->view('viewMessage', $data);
    }

    function apiInsertData() {
        // Inserts data and forwards response to view
        $data = $this->model->dbInsertData();
        $this->load->view('viewMessage', $data);
    }
}
?>
