import { createMachine, createActor } from 'xstate';

// Process FSM: idle --start--> running, running --reset--> idle.
const process = createMachine({
  initial: 'idle',
  states: {
    idle: { on: { start: 'running' } },
    running: { on: { reset: 'idle' } },
  },
});

const actor = createActor(process).start();

// Fire the fixed event sequence: start then reset.
actor.send({ type: 'start' });
actor.send({ type: 'reset' });

// Print the resulting state name, lowercased.
console.log(String(actor.getSnapshot().value).toLowerCase());
