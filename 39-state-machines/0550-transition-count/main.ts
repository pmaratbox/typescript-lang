import { createMachine, createActor, assign } from 'xstate';

// Turnstile FSM with a context counter. An `assign` action runs on EACH
// transition and increments `context.count`, so the counter is produced by
// the machine itself, never hardcoded.
const turnstile = createMachine({
  context: { count: 0 },
  initial: 'locked',
  states: {
    locked: {
      on: {
        COIN: {
          target: 'unlocked',
          actions: assign({ count: ({ context }) => context.count + 1 }),
        },
      },
    },
    unlocked: {
      on: {
        PUSH: {
          target: 'locked',
          actions: assign({ count: ({ context }) => context.count + 1 }),
        },
      },
    },
  },
});

const actor = createActor(turnstile).start();

// Fire a fixed sequence of 3 valid events.
actor.send({ type: 'COIN' });
actor.send({ type: 'PUSH' });
actor.send({ type: 'COIN' });

// The count comes from the per-transition action in the machine's context.
console.log(String(actor.getSnapshot().context.count).toLowerCase());
