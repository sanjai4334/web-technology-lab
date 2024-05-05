let buttons = document.getElementsByTagName("button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (event) => {

        // Highlight clicked button
        event.target.classList.remove("border-primary");
        event.target.classList.remove("text-primary");
        event.target.classList.add("btn-primary");
        
        // setting the method and action url
        let selectedMethod = (event.target.name === "get") ? "get" : "post";
        let prevMethod = (event.target.name === "get") ? "post" : "get";
        let newURL = (event.target.name === "get") ? "http://localhost:3001" : "http://localhost:3002";
        
        document.querySelector('[name="userForm"]').method = selectedMethod;
        document.querySelector('[name="userForm"]').action = newURL;
        
        console.log(prevMethod);
        
        // de-emphasize the other button
        document.querySelector(`[name="${prevMethod}"`).classList.remove("btn-primary");
        document.querySelector(`[name="${prevMethod}"`).classList.add("border-primary");
        document.querySelector(`[name="${prevMethod}"`).classList.add("text-primary");
    });
}
