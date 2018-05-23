const myHeaders = new Headers({ "Content-Type": "application/json" });
const URL = require('../../package.json').countryURL;
class CountryStore {
    constructor() {
        this._countries = "";
    }

    getCountriesAndNotify = () => {
        fetch(URL,
            {
                method: "GET",
                headers: myHeaders
            })
            .then(res => res.json())
            .then(data => {
                this._countries = data;
                if (this.handler) {
                    this.handler(this._countries);
                }
            });
    }

    setObserver(handler) {
        this.handler = handler;
    }

}
export default CountryStore;