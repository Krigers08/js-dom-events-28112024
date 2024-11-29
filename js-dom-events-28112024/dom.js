    const spanHi = document.querySelector("#hi");
    const spanBye = document.querySelector("#bye");
    const Btn = document.querySelector("#Btn");

    spanHi.classList.add("h3");
    spanHi.style.color = "blue";


    console.log(spanHi.classList);
    console.log(spanHi.id);

    console.log(spanBye.dataset.test);

    spanBye.id = "Bye2";
    console.log(spanBye.id); 


    Btn.addEventListener("click", function() {
        if (spanHi) {
            spanHi.style.color = spanHi.style.color === "blue" ? "green" : "blue";
        }
    });
    