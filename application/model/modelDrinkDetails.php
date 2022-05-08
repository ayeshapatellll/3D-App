<?php
    include '../debug/ChromePhp.php';

    // Gets brand name from request
    $brandName = $_GET['brand'];
    
    try {
        // Connect to db
        $dbhandle = new PDO('sqlite:../../db/data.db', 'user', 'password', array(
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_EMULATE_PREPARES => false,
        ));

        // Get model data where the brand is the one requested
        $sql = 'SELECT * FROM Model3D WHERE brand = "' . filter_var($brandName) .'";';
        $stmt = $dbhandle->query($sql);
        $result = null;
        $i = 0;

        # Gets all the instances where the brand occurs and creates an array to return
        while ($data = $stmt->fetch()) {
            $result[$i]['brand'] = $data['brand'];
            $result[$i]['x3dModelTitle'] = $data['x3dModelTitle'];
            $result[$i]['x3dCreationMethod'] = $data['x3dCreationMethod'];
            $result[$i]['modelTitle'] = $data['modelTitle'];
            $result[$i]['modelSubtitle'] = $data['modelSubtitle'];
            $result[$i]['modelDescription'] = $data['modelDescription'];

            $i++;
        }
    } catch (PDOException $e) {
        echo $e->getMessage() . "\n";
    }

    // Return json
    $dbhandle = NULL;
    echo json_encode($result);
