function experiment(){
    //
    const message = "Debrecen"

    return ` <div class="code">
    Debrecen includes ce - ${message.includes("ce")}<br>
    Debrecen length - ${message.length} characters<br>
    DEbrecen uppercase() - ${message.toUpperCase()}


    </div>`;
}


document.querySelector(".output").innerHTML = experiment();