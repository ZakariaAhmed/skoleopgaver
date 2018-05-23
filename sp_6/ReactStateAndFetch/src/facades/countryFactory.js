import CountryStore from './countryStore';
import LabelStore from './labelStore';
class CountryFactory {
  constructor() {
    this.cStore = new CountryStore();
    this.lStore = new LabelStore();
  }

  getLabels = handler => {
    this.lStore.setObserver(handler);
    this.lStore.getLabelsAndNotify();
  }

  getCountries = handler => {
    this.cStore.setObserver(handler);
    this.cStore.getCountriesAndNotify();
  }

  getCountriesCont = (time, handler) => {
    this.cStore.setObserver(handler);
    this.timerId = setInterval(this.cStore.getCountriesAndNotify, time);
  }

  stopIntervalFetch = () => {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }
}
export default new CountryFactory();