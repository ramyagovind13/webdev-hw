$(document).ready(function () {
  const url =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";

  const addDataToDOM = (item) => {
    $("#results")
      .append(
        $('<div id = "maindiv">')
          .css({
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            width: "225px",
            padding: "10px 10px 10px 10px",
            margin: "0 auto",
            border: "5px solid white",
            maxHeight: "400px",
          })
          .append(
            $('<div id = "imgdiv">').append(
              $(
                "<img src =" +
                  item.strDrinkThumb +
                  " height = 200px width = 200px alt = " +
                  item.idDrink +
                  "> </img>"
              )
            )
          )
          .append(
            $('<div id = "namediv">')
              .css({
                fontSize: "1.3em",
                color: "black",
                textAlign: "center",
              })
              .append(item.strDrink)
          )
      )
      .css({
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      });

    $("#maindiv")
      .on("mouseenter", function () {
        $(this).css({ "background-color": "purple", color: "white" });
      })
      .on("mouseleave", function () {
        $(this).css({ "background-color": "transparent", color: "black" });
      });
  };

  const fetchData = (url) => {
    $.ajax({
      type: "GET",
      url: url,
      success: (data) => {
        console.log(data);
        data.drinks.forEach((item) => {
          addDataToDOM(item);
        });
      },
      error: (error) => {
        console.log(error);
        $("#results")
          .append("<div>")
          .text(`An error occured. Please try again.`);
      },
      complete: () => {
        $("#loading").remove();
      },
    });
  };

  fetchData(url);
});
