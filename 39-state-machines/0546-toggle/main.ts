import { createMachine, createActor } from 'xstate';

const machine = createMachine({
  initial: 'off',
  states: {
    off: { on: { toggle: 'on' } },
    on: { on: { toggle: 'off' } },
  },
});

const actor = createActor(machine).start();

// Fire a fixed event sequence: off -> on -> off -> on
actor.send({ type: 'toggle' });
actor.send({ type: 'toggle' });
actor.send({ type: 'toggle' });

console.log(String(actor.getSnapshot().value).toLowerCase());
