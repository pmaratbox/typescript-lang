import { createMachine, createActor } from 'xstate';

// Workflow FSM: idle --submit--> pending --approve--> approved.
const workflow = createMachine({
  initial: 'idle',
  states: {
    idle: { on: { submit: 'pending' } },
    pending: { on: { approve: 'approved' } },
    approved: {},
  },
});

const actor = createActor(workflow).start();

// Fire the fixed event sequence: submit then approve.
actor.send({ type: 'submit' });
actor.send({ type: 'approve' });

// Print the resulting state name, lowercased.
console.log(String(actor.getSnapshot().value).toLowerCase());
