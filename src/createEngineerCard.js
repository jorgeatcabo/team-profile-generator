function createEngineerCard(arrEngineer,arrEngineerCard){
  arrEngineer.map(item=>{
        arrEngineerCard.push(`
        <div class="card">
        <h5 class="card-header bg-info day-1-header">
        <p>${item.name}</p>
        <p>Engineer</p>
        </h5>
        <div class="card-body">
          <div class="card-text">
            <p>${item.id}</p>
            <p>${item.email}</p>
            <p>${item.github}</p>
          </div>                                
        </div>
      </div>
        `)
        
    })
}

module.exports=createEngineerCard