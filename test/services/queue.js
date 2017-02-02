import test from 'ava'
import * as queue from '../../src/services/queue'

test('creates a queue', async (t) => {
  const { id, data, message } = await queue.create()

  t.true(id != null)
  t.true(data != null)
  t.is(message, 'Queue created successfully')
})
