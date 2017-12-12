(function(){
  let thisData = document.getElementById("roles");

  let obj = JSON.parse(jsonString);

  for (var i = 0; i <= 4; i++) {
      let theData =  
      `<h3>${obj.roles[i].roleTitle}</h3>
        <strong>Date: </strong>${obj.roles[i].roleDurationDate}
        </br>
        <strong>Description: </strong>${obj.roles[i].roleDescription}
        </br>
        <strong>Responsibilities: </strong>
        </br>
          ${obj.roles[i].roleResponsibilities}
        `
        
      thisData.innerHTML += theData;
  }
 
}());

