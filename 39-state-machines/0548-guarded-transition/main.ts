import { createMachine, createActor } from 'xstate';

// Door FSM. The OPEN event is only valid from the `unlocked` state:
// it is defined as a transition exclusively on `unlocked`, so firing
// it from `locked` would leave the machine unchanged (guarded by state).
const door = createMachine({
  initial: 'locked',
  states: {
    locked: { on: { UNLOCK: 'unlocked' } },
    unlocked: { on: { OPEN: 'open' } },
    open: {},
  },
});

const actor = createActor(door).start();
actor.send({ type: 'UNLOCK' });
actor.send({ type: 'OPEN' });

console.log(String(actor.getSnapshot().value).toLowerCase());
