

// class gerant les vues javascript

class Views {
    constructor() {

    }

    static buildExtractResult(result) {

        result.then((data) => {
            let result = `<tr>`;
            let filled = false;
            for (let i = 0; i < data.length; i++) {
                console.log(data[i]);
                result += `<td><ul class="list-group list-group-flush">`
                for (let j = 0; j < data[i].length; j++) {
                    filled = true;
                    result += ` <li class="list-group-item">${data[i][j]}</li>`;
                }
                result += `</ul></td>`;
            }
            if (!filled) {
                result += ` <td colspan="5" class="centered">No result found</td>`;
            }
            result += `</tr>`;

            document.querySelector("tbody").innerHTML = result;
            Loader.stopLoader("#loader");
        })

    }

    static buildOneHistory(data) {

            let result = `<tr>`;
            let filled = false;
            for (let i = 0; i < data.length; i++) {
                console.log(data[i]);
                result += `<td><ul class="list-group list-group-flush">`
                for (let j = 0; j < data[i].length; j++) {
                    filled = true;
                    result += ` <li class="list-group-item">${data[i][j]}</li>`;
                }
                result += `</ul></td>`;
            }
            if (!filled) {
                result += ` <td colspan="5" class="centered">No result found</td>`;
            }
            result += `</tr>`;
            document.querySelector("#table-data").classList.remove("hidden");
            document.querySelector("tbody").innerHTML = result;
            Loader.stopLoader("#loader");

    }

    static buildHistory(result) {

        result.then((data) => {
            let result = `<div class="menu-panel-item title bg-gradient text-white">History</div>`;
            for (let i = 0; i < data.length; i++) {
                console.log(data[i]);
                result += `<div class="menu-panel-item" data-id="${data[i].id}">${data[i].filename}</div>`
            }
            document.querySelector("#menu-panel-one").innerHTML = result;
            document.querySelector("#menu-panel-two").innerHTML = result;
            Loader.stopLoader("#loader");

            jQuery(".menu-panel-item").click((e) => {
                Loader.startLoader("#loader");
                document.querySelector("#table-data").classList.add("hidden");
               Main.getHistory(e.target.getAttribute("data-id"));
            })
        })

    }

    
}

