

// Class main de l'application

class Loader {
    constructor() {
        // Local var initialisation
    }

    static startLoader(identifier) {
       document.querySelector(identifier).classList.remove("hidden");
    }


    static stopLoader(identifier) {
        document.querySelector(identifier).classList.add("hidden");
     }
    
}