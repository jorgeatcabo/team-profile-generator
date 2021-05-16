
// TODO: Create a function to generate teaam profile HTML file
function generateHTML(answers) {
return   `<!DOCTYPE html>
<html lang="en">
    <head>
    
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <link rel="stylesheet" href="../dist/styles.css">
    
        <title>My Team</title>
    
      </head>
    
<body>
    <header id="grad" class="p-3 page-header text-center text-blue">
        <h1>My Team</h1>
    </header>
    <div class="row justify-content-around no-gutters">

        <div class="col-12 col-lg-2">

          <div class="card">
            <h5 class="card-header bg-info day-1-header">Type</h5>
            <div class="card-body">
              <div class="card-text">
                <p class="day-1-temp">Temp: 23.96° C</p>
                <p class="day-1-wind">Wind: 3.14 MPH</p>
                <p class="day-1-humidity">Humidity: 88 %</p>
              </div>                                
            </div>
          </div>

        </div>

        
      </div>
<!-- jQuery and Bootstrap Bundle JS Files -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
</body>
</html>
`
;
}

exports.generateHTML = generateHTML;