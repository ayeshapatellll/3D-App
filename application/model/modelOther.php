<?php 
    include '../debug/ChromePhp.php';
    
    try {
        // Connect to db
        $dbhandle = new PDO('sqlite:../../db/data.db', 'user', 'password', array(
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_EMULATE_PREPARES => false,
        ));

        // Gets all the other information from the database
        $sql = 'SELECT * FROM OtherInformation;';
        $stmt = $dbhandle->query($sql);
        $result = null;
        $i = 0;

        while ($data = $stmt->fetch()) {
            $result[$i]['controlType'] = $data['controlType'];
            $result[$i]['title'] = $data['title'];
            $result[$i]['subTitle'] = $data['subTitle'];

            $i++;
        }
    } catch (PDOException $e) {
        echo $e->getMessage() . "\n";
    }

    // Return as json
    $dbhandle = NULL;
    echo json_encode($result);
