import { createMachine, createActor } from 'xstate';

// Turnstile FSM: locked --COIN--> unlocked, unlocked --PUSH--> locked.
const turnstile = createMachine({
  initial: 'locked',
  states: {
    locked: { on: { COIN: 'unlocked' } },
    unlocked: { on: { PUSH: 'locked' } },
  },
});

const actor = createActor(turnstile).start();

// Fire the fixed event sequence.
actor.send({ type: 'COIN' });

// Print the resulting state name, lowercased.
console.log(String(actor.getSnapshot().value).toLowerCase());
