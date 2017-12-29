(function(){

  /*creates a variable for the information to be entered into the HTML*/
  let thisData = document.getElementById("rolelist");


  /*Creates a variable obj to read the strings of information from the JSON file*/
  let obj = JSON.parse(jsonString);

  /*iterates over the array of strings printing assigning the information to the variables in theData to go into HTML*/
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

