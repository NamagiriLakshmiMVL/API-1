let imgdiv = document.querySelector(".image")

fetch("https://random.dog/woof.json")
    .then((res) => res.json())
    .then((data) => {
        const imgDiv = document.createElement("img")  //creating image element
        imgDiv.className = "dogs"
        imgDiv.setAttribute("src", data.url);       //assigning src to img tag
        imgdiv.appendChild(imgDiv)
    })
