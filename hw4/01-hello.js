let main = document.querySelector("main");

let heading = document.createElement("h1");
heading.innerText = "Self Introduction";
heading.style.textAlign = "center";

let div = document.createElement("div");
div.style.width = "50vw";
div.style.margin = "auto";
div.style.marginTop = "50px";

let profileIntro = document.createElement("img");
profileIntro.src = "../images/ramya.jpg";
profileIntro.alt = "Ramya Govindaraj photo";
profileIntro.style.width = "200px";
profileIntro.style.height = "200px";
profileIntro.style.margin = "0 auto";
profileIntro.style.display = "flex";
profileIntro.style.borderRadius = "50%";
profileIntro.style.justifyContent = "center";

let paraIntro = document.createElement("p");
paraIntro.innerHTML = `<span style = "font-weight: bold">
My name is Ramya. I am a graduate student and this is my first term in
PSU.</span> I worked as backend software developer in one of the
multinational companies. I have knowledge about backend technologies
about how it works. I am excited to learn front end as part of this
course. Apart from this, in my free time I would like to do sketching,
portrait and cooking.`;

main.append(heading);
main.append(div);
div.append(profileIntro);
div.append(paraIntro);
