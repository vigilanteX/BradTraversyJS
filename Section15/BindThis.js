class App {
    constructor() {
        this.serverName = 'AMAN';
        document.getElementById('cl').addEventListener('click', this.getName.bind(this));
    }

    getName() {
        console.log(this.serverName);
    }
}

let app = new App();
