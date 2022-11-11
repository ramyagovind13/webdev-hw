const url =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";

let app = document.querySelector("#results");
const loading = document.querySelector("#loading");

const addDataToDOM = (item) => {
  let div = document.createElement("div");
  div.style.width = "225px";
  div.style.padding = "10px 10px 10px 10px";
  div.style.border = "5px solid white";
  div.style.maxHeight = "400px";
  app.append(div);

  let imgdiv = document.createElement("div");
  imgdiv.id = "imgdiv";
  imgdiv.padding = "5px 5px 5px 5px";
  imgdiv.innerHTML =
    "<img src =" +
    item.strDrinkThumb +
    " height = 200px width = 200px alt = " +
    item.idDrink +
    "> </img>";
  div.append(imgdiv);

  let itemName = document.createElement("div");
  itemName.innerHTML = item.strDrink;
  itemName.style.textAlign = "center";
  itemName.style.fontSize = "1.3em";
  itemName.style.color = "black";
  div.append(itemName);

  div.addEventListener("mouseover", function (event) {
    div.style.backgroundColor = "purple";
    itemName.style.color = "white";
  });
  div.addEventListener("mouseout", function (event) {
    div.style.backgroundColor = "transparent";
    itemName.style.color = "black";
  });

  app.style.display = "flex";
  app.style.flexDirection = "row";
  app.style.flexWrap = "wrap";
  app.style.justifyContent = "center";

  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.flexWrap = "wrap";
  div.style.textAlign = "center";
};

async function fetchData(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    data.drinks.forEach((elem) => {
      addDataToDOM(elem);
    });
  } catch (error) {
    console.log(error);
    let para = document.createElement("p");
    para.textContent = `An error occured. Please try again.`;
    app.append(para);
  } finally {
    app.removeChild(loading);
  }
}

fetchData(url);
