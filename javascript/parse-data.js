(function(){
  let thisData = document.getElementById("rolelist");

  let obj = JSON.parse(jsonString);

  for (var i = 0; i <= 4; i++) {
      let theData =  
      `<h3>${obj.rolelist[i].roleTitle}</h3>
        <strong>Date: </strong>${obj.rolelist[i].roleDurationDate}
        </br>
        <strong>Description: </strong>${obj.rolelist[i].roleDescription}
        </br>
        <strong>Responsibilities: </strong>
        </br>
          ${obj.rolelist[i].roleResponsibilities}
        `
        
      thisData.innerHTML += theData;
  }
 
}());

