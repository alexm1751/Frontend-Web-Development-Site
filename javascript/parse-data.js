(function(){
  let thisData = document.getElementById("rolelist");

  let obj = JSON.parse(jsonString);

  for (var i = 0; i <= 2; i++) {
      let theData =  
      `<h4>${obj.rolelist[i].roleTitle}</h4>
        <h4>Date: </h4>${obj.rolelist[i].roleDurationDate}
        <br><br>
        <h4>Description: </h4>${obj.rolelist[i].roleDescription}
        <br><br>
        <h4>Responsibilities: </h4>
        <br>
          ${obj.rolelist[i].roleResponsibilities}
          <br>
          <hr>
        `
        
      thisData.innerHTML += theData;
  }
 
}());

