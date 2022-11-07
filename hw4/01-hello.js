let main = document.querySelector("main");

let heading = document.createElement("h1");
heading.innerText = "Self Introduction";
heading.style.textAlign = "center";

let div = document.createElement("div");
div.style.width = "50vw";
div.style.margin = "auto";
div.style.marginTop = "50px";

let profile_intro = document.createElement("img");
profile_intro.src = "../images/ramya.jpg";
profile_intro.alt = "Ramya Govindaraj photo";
profile_intro.style.width = "200px";
profile_intro.style.height = "200px";
profile_intro.style.margin = "0 auto";
profile_intro.style.display = "flex";
profile_intro.style.borderRadius = "50%";
profile_intro.style.justifyContent = "center";

let para_intro = document.createElement("p");
para_intro.innerHTML = `<span style = "font-weight: bold">
My name is Ramya. I am a graduate student and this is my first term in
PSU.</span> I worked as backend software developer in one of the
multinational companies. I have knowledge about backend technologies
about how it works. I am excited to learn front end as part of this
course. Apart from this, in my free time I would like to do sketching,
portrait and cooking.`;

main.append(heading);
main.append(div);
div.append(profile_intro);
div.append(para_intro);
