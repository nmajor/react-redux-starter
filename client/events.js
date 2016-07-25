import socket from './socket';
import * as Actions from '../shared/redux/actions';
import store from './store';

socket.on('EXAMPLE_EVENT_EMITTED', (pages) => {
  console.log('event EXAMPLE_EVENT_EMITTED');
  store.dispatch(Actions.exampleAction(pages));
});
