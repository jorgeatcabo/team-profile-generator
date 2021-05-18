function createEngineerCard(arrEngineer,arrEngineerCard){
  arrEngineer.map(item=>{
        arrEngineerCard.push(`
        <div class="col-12 col-lg-2">
        <div class="card">
        <h5 class="card-header bg-success">
        <p>${item.name}</p>
        <p>Engineer</p>
        </h5>
        <div class="card-body">
          <div class="card-text">
          <p>ID: ${item.id}</p>
          <p>Email: <a href='mailto:${item.email}'>${item.email}</a></p>
          <p>GitHub: <a href='https://github.com/${item.github}' target='_blank'>${item.github}</a></p> 
          </div>                                
        </div>
      </div>
      </div>
        `)
        
    })
}

module.exports=createEngineerCard