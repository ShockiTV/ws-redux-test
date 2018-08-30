import protocol from "./protocol";
import store from "./store";

const socket = new WebSocket('wss://stagesocket.decentgo.com:8090');

socket.onopen = () => {
  store.dispatch(protocol[1].action(JSON.stringify(protocol[1].data)));
};

socket.onmessage = rawMessage => {
  const message = JSON.parse(rawMessage.data);
  if (protocol[message.id] && protocol[message.id].reaction) {
    store.dispatch(protocol[message.id].reaction(message));
  }
};

window.socket = socket;

export default socket;