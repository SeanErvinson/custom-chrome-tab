

window.addEventListener("load", function () {
    var checkbox = this.document.getElementById("newTab");
    let links = this.document.querySelectorAll("a");

    function removeTargetAttr() {
        links.forEach((link) => {
            link.removeAttribute("target");
        });
    }

    function addTargetAttr() {
        links.forEach((link) => {
            link.target = "_blank";
        });
    }

    this.document.addEventListener("keydown", (event) => {
        if (event.keyCode === 32) {
            addTargetAttr();
        }
    });

    this.document.addEventListener("keyup", (event) => {
        if (event.keyCode === 32) {
            removeTargetAttr();
        }
    });
    checkbox.addEventListener("change", () => {
        if (checkbox.checked == true) {
            addTargetAttr();
        } else {
            removeTargetAttr();
        }
    });
});

