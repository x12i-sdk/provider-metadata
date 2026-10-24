import assert from 'node:assert/strict';
import { packMetadata, openMetadata } from '@x12i/provider-metadata';

const input = { objectType: 'example', stepId: 'review', recordId: 'record-1' };
const wire = packMetadata(input);
const recovered = openMetadata(wire);
assert.equal(recovered.recordId, input.recordId);
assert.equal(recovered.stepId, input.stepId);
console.log(recovered);
