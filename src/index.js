import events from './data/events.json';
import App from './controllers/App';

(() => {
  new App(events);
})();