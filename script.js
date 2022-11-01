
var coll = document.getElementsByClassName("collapsible");
var i;
console.log('1')
console.log(coll.length)

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        console.log('2')
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
        content.style.display = "none";
        } else {
        content.style.display = "block";
        }
    });
}

const copyButtonLabel = "copy";

// You can use a class selector instead if available. 
let blocks = document.querySelectorAll("pre");

blocks.forEach((block) => {
    // only add button if browser supports Clipboard API
    if (navigator.clipboard) {
        let button = document.createElement("button");
        button.innerText = copyButtonLabel;
        button.addEventListener("click", copyCode);
        block.appendChild(button);
    }
});

async function copyCode(event) {
    const button = event.srcElement;
    const pre = button.parentElement;
    let code = pre.querySelector("code");
    let text = code.innerText;
    await navigator.clipboard.writeText(text);
}
