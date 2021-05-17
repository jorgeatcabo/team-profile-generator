function createManagerCard(arrManager,arrManagerCard){
  arrManager.map(item=>{
        arrManagerCard.push(`
        <div class="col-12 col-lg-2">
        <div class="card">
        <h5 class="card-header bg-primary">
        <p>${item.name}</p>
        <p>Manager</p>
        </h5>
        <div class="card-body">
          <div class="card-text">
            <p>ID: ${item.id}</p>
            <p>Email: <a href='mailto:${item.email}'>${item.email}</a></p>
            <p>Office number: ${item.officenumber}</p>
          </div>                                
        </div>
      </div>
      </div>
        `)
        
    })
}

module.exports=createManagerCard