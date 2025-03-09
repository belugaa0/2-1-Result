function validatehtno() {
    let htno = document.getElementById("htno").value.trim().toUpperCase(); 
    let validHTNOs = new Set(); 

    
    for (let i = 3301; i <= 3364; i++) {
        validHTNOs.add(`23J41A${i}`);
    }
    for (let i = 3301; i <= 3307; i++) {
        validHTNOs.add(`24J45A${i}`);
    }

    if (validHTNOs.has(htno)) {
        document.querySelector(".result-page").style.display = "block";
        document.getElementById("error-message").style.display = "none";
        document.getElementsByClassName("no")[0].innerHTML = htno;
        
    } else {
        document.querySelector(".result-page").style.display = "none";
        document.getElementById("error-message").style.display = "block";
        
    }
}


