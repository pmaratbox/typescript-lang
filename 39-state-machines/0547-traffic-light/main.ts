import { createMachine, createActor } from 'xstate';

const trafficLight = createMachine({
  initial: 'red',
  states: {
    red: { on: { NEXT: 'green' } },
    green: { on: { NEXT: 'yellow' } },
    yellow: { on: { NEXT: 'red' } },
  },
});

const actor = createActor(trafficLight).start();
actor.send({ type: 'NEXT' }); // red -> green
actor.send({ type: 'NEXT' }); // green -> yellow

console.log(String(actor.getSnapshot().value).toLowerCase());
