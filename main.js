document.addEventListener("DOMContentLoaded", () => {
  const hamburgerEl = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navItems = document.querySelectorAll(".nav-link");

  hamburgerEl.addEventListener("click", () => {
    hamburgerEl.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
      hamburgerEl.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  const backupEl = document.querySelector(".ctn");
  const openModelEl = document.querySelector(".modal-open");
  const updatesAmount = document.getElementById("total_amount");
  const updatedBackedUp = document.getElementById("total_backedup");
  const rewardBamboosEl = document.querySelector(".about__ctn");
  const BlackEl = document.querySelector(".black__ctn");
  const closeModalEl = document.querySelector(".close-modal");
  const rewardcheckbox1 = document.getElementById("rewardCheckbox1");
  const modalSelection2 = document.querySelector(".modal-selection2");
  const rewardcheckbox2 = document.getElementById("rewardCheckbox2");
  const modalSelection3 = document.querySelector(".modal-selection3");

  const inputChoice = document.querySelector(".input-choice");
  const inputChoice2 = document.querySelector(".input-choice2");
  const modalSelection2Pledge = document.getElementById("pledge");
  const modalSelection3Pledge = document.getElementById("pledge1");
  const errorMessage = document.querySelector(".error1");
  const errorMsg = document.querySelector(".error");
  const submitBtn = document.getElementById("submit");
  const confirmationMsg = document.querySelector(".confirmation_message");
  const confirmBtn = document.querySelector(".confirm");
  const submitCtn = document.getElementById("submmit");
  const [decrementBamboo, decrementBamboo1] = document.querySelectorAll(".bamboo_value span, .bamboo_value1 span");
  const [decrementBlack, decrementBlack1] = document.querySelectorAll(".decrement_Black span, .decrement_Black1 span");
  const updateBookmarkEl = document.querySelector(".update-bookmark");

  const noRewardCheckbox = document.getElementById("noRewardCheckbox");
  const outStockEl = document.getElementById("myCheckbox4");
  const rangerT = document.querySelector(".ranger--t");
  const rangerFill = rangerT.querySelector(".ranger__fill");
  const changeOnclick = document.querySelector(".about");
 /*  changeOnclick.style.backgroundColor = "hsl(0, 11%, 77%)" */

  let widthValue = 76;
  rangerFill.style.width = widthValue + "%"; 

  var svgElement = document.getElementById("mySvg");


  var circleElement = svgElement.getElementById("circleElement");
  var pathElement = svgElement.getElementById("pathElement");


  outStockEl.disabled = true;
  rewardBamboosEl.disabled = false;
  BlackEl.disabled = false;


  noRewardCheckbox.addEventListener("change", () => {
    if (noRewardCheckbox.checked) {
      updateBookmarkEl.innerText = "Bookmarked";
      updateBookmarkEl.style.color = `hsl(176, 50%, 47%)`



      circleElement.setAttribute("fill", "#30cfd0");

      pathElement.setAttribute("fill", "#fff");


    } else {
      updateBookmarkEl.innerText = 'Bookmark';
      updateBookmarkEl.style.color = `hsl(0, 0%, 48%)`;
      circleElement.setAttribute("fill", "#2F2F2F");

      pathElement.setAttribute("fill", "#B1B1B1");
    }
  });

  function openModel() {
    openModelEl.style.display = 'block';
    changeOnclick.style.backgroundColor = "hsl(0, 11%, 77%)"
    rewardBamboosEl.disabled = true;
    BlackEl.disabled = true;
    setTimeout(() => {
      BlackEl.disable = false;
    }, 500);
   
  }
  function openModelMaster() {
  
    setTimeout(() => {
      openModelEl.style.display = 'block';
      rewardBamboosEl.disabled = true;
      BlackEl.disabled = true;
      rewardcheckbox1.disabled = true;
      rewardcheckbox2.disabled = true;
      changeOnclick.style.backgroundColor = "hsl(0, 11%, 77%)"
      BlackEl.disable = false;


    }, 500);
  }

  function openModelBlackEdition() {
    
    setTimeout(() => {
      if (noRewardCheckbox.disabled === false) {
        noRewardCheckbox.disabled = true;
      }
      openModelEl.style.display = 'block';
      rewardBamboosEl.disabled = true;
      BlackEl.disabled = true;
      rewardcheckbox1.disabled = true;
      noRewardCheckbox.disabled = true;
      changeOnclick.style.backgroundColor = "hsl(0, 11%, 77%)"
      BlackEl.disable = false;
    }, 500);
  }
  function openModelBambooStand() {
  
    setTimeout(() => {
      if (noRewardCheckbox.disabled === false) {
        noRewardCheckbox.disabled = true;
      }
      openModelEl.style.display = 'block';
      rewardBamboosEl.disabled = true;
      BlackEl.disabled = true;
      rewardcheckbox2.disabled = true;
      noRewardCheckbox.disabled = true;
      changeOnclick.style.backgroundColor = "hsl(0, 11%, 77%)"
      BlackEl.disable = false;
    }, 500);
  }





  function validateInput1() {
    let userinput = modalSelection2Pledge.value;
    let userinput1 = modalSelection3Pledge.value;
    const pledge1 = Number(userinput1);

    
  // Check if the input field is empty
  if (userinput.trim() === '') {
    // Display error message or perform any other necessary action
    errorMessage.textContent = "Please enter a valid input";
    return; // Exit the function without updating the values
  }
    if (isNaN(pledge1) || pledge1 <= 0 || pledge1 === "") {
    
      errorMsg.textContent = "invalid input";
      
    }
    const actualAmount = Number(userinput);
    if (isNaN(actualAmount) || actualAmount <= 0 || actualAmount === '') {
      errorMessage.textContent = "invalid input";
    } else {
      errorMessage.textContent = " ";
    

      setTimeout(() => {
        confirmationMsg.style.display = 'block';
        openModelEl.style.display = 'none';
      }, 1000);
    }
  }
  function validateInputBamboo() {
    let userinput = modalSelection2Pledge.value;
    const actualAmount = Number(userinput);

    
  // Check if the input field is empty
  if (userinput.trim() === '') {
    // Display error message or perform any other necessary action
    errorMessage.textContent = "Please enter a valid input";
    return; // Exit the function without updating the values
  }
    if (isNaN(actualAmount) || actualAmount <= 0 || actualAmount === '') {
      errorMessage.textContent = "invalid input";
    } else {
      errorMessage.textContent = " ";
      const backup = updatedBackedUp.textContent;
      const backupWithoutSymbol = backup.replace(",", "");
      const numericBackup = Number(backupWithoutSymbol);
      const incrementBackup = numericBackup + 1;
      updatedBackedUp.textContent = incrementBackup.toLocaleString();

      const amount = updatesAmount.textContent;
      let valueWithoutSymbol = amount.replace("$", "").replace(",", "");
      let numericValue = parseInt(valueWithoutSymbol);
      let incrementedValue = numericValue + actualAmount;
      updatesAmount.textContent = `$ ${incrementedValue.toLocaleString()}`;

      setTimeout(() => {
        confirmationMsg.style.display = 'block';
        openModelEl.style.display = 'none';
        const decrementValue = Number(decrementBamboo.textContent);
        const currentDecrement = decrementValue - 1;
        decrementBamboo.textContent = currentDecrement;

        const openNumeric = Number(decrementBamboo1.textContent);
        const decrementOpenNumeric = openNumeric - 1;
        decrementBamboo1.textContent = decrementOpenNumeric;

      }, 1000);
    }
  }


  function validateInputBlack() {


    let userinput = modalSelection2Pledge.value;
    let userinput1 = modalSelection3Pledge.value;
    const pledge1 = Number(userinput1);
    
  // Check if the input field is empty
  if (userinput.trim() === '') {
    // Display error message or perform any other necessary action
    errorMessage.textContent = "Please enter a valid input";
    return; // Exit the function without updating the values
  }
    const actualAmount = Number(userinput);
    if (isNaN(pledge1) || pledge1 <= 0 || pledge1 === "") {
      errorMsg.textContent = "invalid input";
    }
    else {
      errorMessage.textContent = " ";
      const backup = updatedBackedUp.textContent;
      const backupWithoutSymbol = backup.replace(",", "");
      const numericBackup = Number(backupWithoutSymbol);
      const incrementBackup = numericBackup + 1;
      updatedBackedUp.textContent = incrementBackup.toLocaleString();

      const amount = updatesAmount.textContent;
      let valueWithoutSymbol = amount.replace("$", "").replace(",", "");
      let numericValue = parseInt(valueWithoutSymbol);
      let incrementedValue = numericValue + actualAmount;
      updatesAmount.textContent = `$ ${incrementedValue.toLocaleString()}`;

      setTimeout(() => {
        confirmationMsg.style.display = 'block';
        openModelEl.style.display = 'none';
        const decrementBlackValue = decrementBlack.textContent;
        const decrementNumeric = Number(decrementBlackValue)
        const decrementOperation = decrementNumeric - 1;
        decrementBlack.textContent = decrementOperation;

        const decrementBlackValue1 = decrementBlack1.textContent;
        const decrementNumeric1 = Number(decrementBlackValue1)
        const decrementOperation1 = decrementNumeric - 1;
        decrementBlack1.textContent = decrementOperation1;

      }, 1000);
    }
  }
  function checksInn2() {
    if (rewardcheckbox2.checked) {
      modalSelection3.style.border = "1px solid  #30cfd0 ";
      inputChoice2.style.display = "block";
    } else {
      modalSelection3.style.border = "";
      inputChoice2.style.display = "none";
      updatedBackedUp.textContent = "5,007";
    
    }
  }
  function checksInn() {
    if (rewardcheckbox1.checked) {
      modalSelection2.style.border = "1px solid  #30cfd0 ";
      inputChoice.style.display = "block";
    } else {
      modalSelection2.style.border = "";
      inputChoice.style.display = "none";
      updatedBackedUp.textContent = '';
      updatedBackedUp.textContent = "5,007";
    }
  }

  function closeModal() {
    setTimeout(()=>{
      openModelEl.style.display = 'none';
      rewardBamboosEl.disabled = false;
      BlackEl.disabled = false;
      rewardcheckbox1.disabled = false;
      rewardcheckbox2.disabled = false;
         changeOnclick.style.backgroundColor = ""
    }, 500)
  
  }

  const clearForm = () => {
    confirmationMsg.style.display = 'none';
    modalSelection2Pledge.value = null;
    rewardcheckbox1.checked = false;
    inputChoice.style.display = "none";
    modalSelection2.style.border = "";
    modalSelection3.style.border = "";
    rewardcheckbox2.checked = false;
    inputChoice2.style.display = 'none';
    modalSelection3Pledge.value = null;
    rewardcheckbox1.disabled = false;
    rewardcheckbox2.disabled = false;
    noRewardCheckbox.disabled = false;
    changeOnclick.style.backgroundColor = ""
    

    widthValue += 2;
    rangerFill.style.width = widthValue + "%";


  }

  backupEl.addEventListener("click", openModelMaster);
  rewardcheckbox1.addEventListener("change", checksInn);
  submitBtn.addEventListener("click", validateInputBamboo);
  rewardcheckbox2.addEventListener("change", checksInn2);
  closeModalEl.addEventListener("click", closeModal);
  submitCtn.addEventListener("click", validateInputBlack);
  confirmBtn.addEventListener("click", clearForm);
  rewardBamboosEl.addEventListener("click", openModelBambooStand);
  BlackEl.addEventListener("click", openModelBlackEdition);
});
