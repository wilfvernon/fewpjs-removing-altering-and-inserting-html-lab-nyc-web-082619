document.querySelector("main").remove()

let newHeader = document.createElement("h1")
newHeader.id = "victory"
newHeader.innerHTML = "Wilf is the champion"
document.body.append(newHeader)