<?php 
    include '../debug/ChromePhp.php';
    
    try {
        // Connect to db
        $dbhandle = new PDO('sqlite:../../db/data.db', 'user', 'password', array(
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_EMULATE_PREPARES => false,
        ));

        // Gets all the Frontpage information from the database
        $sql = 'SELECT * FROM FrontpageInformation;';
        $stmt = $dbhandle->query($sql);
        $result = null;
        $i = 0;

        while ($data = $stmt->fetch()) {
            $result[$i]['title'] = $data['title'];
            $result[$i]['brand'] = $data['brand'];
            $result[$i]['subTitle'] = $data['subTitle'];
            $result[$i]['descriptionInfo'] = $data['descriptionInfo'];

            $i++;
        }
    } catch (PDOException $e) {
        echo $e->getMessage() . "\n";
    }

    // Return json data
    $dbhandle = NULL;
    echo json_encode($result);
