import { createMachine, createActor } from 'xstate';

// Turnstile FSM: only COIN is valid from `locked`.
const turnstile = createMachine({
  initial: 'locked',
  states: {
    locked: { on: { COIN: 'unlocked' } },
    unlocked: { on: { PUSH: 'locked' } },
  },
});

const actor = createActor(turnstile).start();

// PUSH has no transition from `locked`: xstate ignores the unhandled
// event and leaves the machine in its current state (no crash).
actor.send({ type: 'PUSH' });

console.log(String(actor.getSnapshot().value).toLowerCase());
