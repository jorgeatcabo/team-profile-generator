
// TODO: Create a function to generate teaam profile HTML file
function generateHTML(answers) {
return   `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.managername}</h1>
    <p class="lead">I am from ${answers.managername}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.managername}</li>
      <li class="list-group-item">LinkedIn: ${answers.managername}</li>
    </ul>
  </div>
</div>
</body>
</html>`
;
}

exports.generateHTML = generateHTML;