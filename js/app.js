/* creating animations timer for arrows header */
document.addEventListener("DOMContentLoaded", function () {
  let d_1 = document.getElementById("scroll_down1");
  let d_2 = document.getElementById("scroll_down2");
  let m_1 = false;

  if (d_1 != undefined) {
    setInterval(function () {
      if (m_1 === false) {
        d_1.style.opacity = "0";
        d_2.style.opacity = "1";
        m_1 = true;
      } else {
        d_1.style.opacity = "1";
        d_2.style.opacity = "0";
        m_1 = false;
      }
    }, 1000);
  }

  /*not finish need to add opacity*/
  /**/

  /* scroll all the way to the top  */
  let top_block = document.getElementById("top_block");

  if (top_block != undefined) {
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 300) {
        top_block.style.display = "block";
        top_block.style.opacity = "1";
      } else {
        top_block.style.display = "none";
        top_block.style.opacity = "0";
      }
    });
    top_block.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        /*behavior: "instant",*/
      });
    });
  }

  /*
display: none;: This property completely removes the element from the document flow. It's as if the element doesn't exist on the page at all

display: block;: This property sets the element as a block-level element, meaning it will start on a new line and stretch out to fill the width of its container by default

*/

  /* coding Weather with API key */

  let key_wether = "9b2134590bea1de49510f364bec32fde";
  let temperature = document.getElementById("temperature");

  async function currentWeather() {
    let str = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key_wether}`;
    const data = await fetch(str).then((response) => {
      response.json().then(function (data) {
        console.log(data);
        if (temperature != null)
          temperature.innerHTML = `<div class="block_temp"><img src="icon/temp.png"> <div>${Math.floor(
            data.main.temp - 273
          )} °C </div></div><div> ${data.weather[0].description}  </div> `;
      });
    });
  }

  currentWeather();

  /* copyright date auto update (footer)*/
  let copyright = document.getElementById("copyright");

  if (copyright != undefined) {
    let date = new Date();
    let year_current = date.getFullYear();
    if (copyright != null)
      copyright.innerHTML = `Copyright @ ${year_current} all rights reserved by Marc Berger `;
  }

  /**/

  /* getting information from new location page and displaying it in cosole log*/

  let btn_add = document.getElementById("btn_add");
  let form_m = document.getElementById("form_m");

  if (btn_add !== null) {
    btn_add.addEventListener("click", form_load);
    
}

  function form_load(event) {
    event.preventDefault();
    let city = document.getElementById("city").value;
    let country = document.getElementById("country").value;
    let date_from = document.getElementById("date_from").value;
    let date_to = document.getElementById("date_to").value;
    let description = document.getElementById("description").value;

    let result = `City: ${city} Country: ${country} Date_from: ${date_from} Date_to: ${date_to} Description: ${description}`;

    //console.log(city, country, date_to, date_from, description);
    console.log(result);
    alert(`Successfully sendet!`);
    clearFields;
    
  }

  //clearing all fields button

  //
  // Get all input elements on the page and the clear button
  let inputs = document.querySelectorAll("input,textarea");
  console.log(inputs);
  let clearButton = document.getElementById("clearButton");

  function clearFields(event) {
    event.preventDefault();
    // Loop through each input element
    /*this line need explanation*/ inputs.forEach(function (input) {
      input.value = "";
    });
  }

  if (clearButton != undefined) {
    // Add a click event listener to the clear button
    clearButton.addEventListener("click", clearFields);
  }

  /**/

  let pics_pic = document.querySelectorAll(".item_pic");
  let left = document.getElementById("left");
  let right = document.getElementById("right");

  console.log(pics_pic);
  let pic_res = document.getElementById("pic_res");
  let modal_pic = document.getElementsByClassName("modal_pic")[0];
  let close = document.getElementsByClassName("close")[0];
  let position = 0;
  if (pics_pic != undefined) {
    pics_pic.forEach(function (image) {
      image.addEventListener("click", function () {
        modal_pic.style.display = "flex";
        position = Number(this.getAttribute("data-id")) - 1;
        pic_res.src = this.src;
      });
    });
    
    close.addEventListener("click", function () {
      modal_pic.style.display = "none";
    });
  }

  if (left != undefined) {
    left.addEventListener("click", function () {
      if (position == 0) {
        position = pics_pic.length - 1;
      } else {
        position = position - 1;
      }

      pic_res.src = pics_pic[position].src;
    });
  }
  if (right != undefined) {
    right.addEventListener("click", function () {
      if (position == pics_pic.length - 1) {
        position = 0;
      } else {
        position = Number(position) + 1;
      }
      console.log(position);

      pic_res.src = pics_pic[position].src;
    });
  }
});
