const localUrl = {
    root: "https://dataex.herokuapp.com",
    urls: {
        extract: "/extract",
        history: "/histories",
        oneHistory: "/oneHistory?id="
    }
}

// Class main de l'application

class Main {
    constructor() {
        // Local var initialisation

    }

    /**
     * 
     * @param {*} input The input file 
     */
    static uploadEvent(input) {
        console.log(input.files[0]);
        if (input.files && input.files[0]) {
            if (input.files[0].type.search("text") != -1 || input.files[0].type == "") {
                var reader = new FileReader();
                let self = this;
                reader.onload = (e) => {
                    Loader.startLoader("#loader");
                    // this part will be deported to a function (special function)

                    let form = new FormData();
                    form.append("data", e.target.result);
                    form.append("filename", input.files[0].name);
                    fetch(localUrl.root + localUrl.urls.extract, {
                        method: "POST",
                        body: form,
                    })
                        .then(response => Views.buildExtractResult(response.json())); // parses response to JSON

                };
                reader.readAsText(input.files[0]);
            }
            else {
                alert("Veuillez choisir un bon format de fichiers svp ( texte de preference )");
            }
        }

    }

    static history(input) {

        fetch(localUrl.root + localUrl.urls.history, {
            method: "GET",
        })
            .then(response => Views.buildHistory(response.json())); // parses response to JSON


    }



    // call startup events


    static bootstrap() {
    this.history();


}

    static sendToBackend(name, data) {
    console.log(jQuery.ajax());
    console.log("Lionel");
    debugger

}

static getHistory(fileId) {
    fetch(localUrl.root + localUrl.urls.oneHistory+fileId, {
        method: "GET",
    })
        .then((response) => {
            let data = response.json();
            data.then((data) => {
                console.log(data);
                let globalResult = data.result.split("/");
                let specificResult = [];
                for(let i=0; i < globalResult.length; i++) {
                    specificResult.push(globalResult[i].split("-"));
                }
                Views.buildOneHistory(specificResult);
            })
            
        }); // parses response to JSON
}


}
