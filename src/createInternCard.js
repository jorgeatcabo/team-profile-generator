function createInternCard(arrIntern,arrInternCard){
  arrIntern.map(item=>{
        arrInternCard.push(`
        <div class="col-12 col-lg-2">
        <div class="card">
        <h5 class="card-header bg-info">
        <p>${item.name}</p>
        <p>Intern</p>
        </h5>
        <div class="card-body">
          <div class="card-text">
          <p>ID: ${item.id}</p>
          <p>Email: <a href='mailto:${item.email}'>${item.email}</a></p>
            <p>School: ${item.school}</p>
          </div>                                
        </div>
      </div>
      </div>
        `)
        
    })
}

module.exports=createInternCard