function createEngineerCard(arrEngineer,arrEngineerCard){
  arrEngineer.map(item=>{
        arrEngineerCard.push(`
        <div class="col-12 col-lg-2">
        <div class="card">
        <h5 class="card-header bg-info day-1-header">
        <p>${item.name}</p>
        <p>Engineer</p>
        </h5>
        <div class="card-body">
          <div class="card-text">
            <p>${item.id}</p>
            <p><a href='mailto:${item.email}'>${item.email}</a></p>
            <p><a href='https://github.com/${item.github}'>${item.github}</a></p> 
          </div>                                
        </div>
      </div>
      </div>
        `)
        
    })
}

module.exports=createEngineerCard