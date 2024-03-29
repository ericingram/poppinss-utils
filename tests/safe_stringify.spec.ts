/*
 * @poppinss/utils
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { test } from '@japa/runner'
import json from '../src/json/main.js'

test.group('Stringify', () => {
  test('stringify number', ({ assert }) => {
    assert.deepEqual(json.safeStringify(1), '1')
  })

  test('stringify boolean', ({ assert }) => {
    assert.deepEqual(json.safeStringify(false), 'false')
  })

  test('stringify date/time', ({ assert }) => {
    const date = new Date()
    assert.deepEqual(json.safeStringify(date), `"${date.toISOString()}"`)
  })

  test('stringify object', ({ assert }) => {
    assert.deepEqual(json.safeStringify({ b: 2, a: 1 }), '{"b":2,"a":1}')
  })

  test('stringify object with circular reference', ({ assert }) => {
    const a: any = {
      b: 2,
    }
    a.a = a
    assert.deepEqual(json.safeStringify(a), '{"b":2}')
  })

  test('stringify object with bigint', ({ assert }) => {
    const a: any = {
      b: BigInt(10),
      a: 10,
    }
    assert.deepEqual(json.safeStringify(a), '{"b":"10","a":10}')
  })

  test('stringify object with bigint and circular reference', ({ assert }) => {
    const a: any = {
      b: BigInt(10),
    }
    a.a = a
    assert.deepEqual(json.safeStringify(a), '{"b":"10"}')
  })

  test('stringifies object', ({ assert }) => {
    assert.deepEqual(json.safeStringify({ a: 18, b: 4 }), '{"a":18,"b":4}')
  })

  test('stringifies object (replacer)', ({ assert }) => {
    const replacer = (_: any, value: any) => {
      return typeof value === 'number' ? value + 1 : value
    }

    assert.deepEqual(json.safeStringify({ a: 18, b: 4 }, replacer), '{"a":19,"b":5}')
  })

  test('stringifies object removing circular reference', ({ assert }) => {
    const o: any = { a: 18, b: 4 }
    o.o = o
    assert.deepEqual(json.safeStringify(o), '{"a":18,"b":4}')
  })

  test('stringifies object with bigint', ({ assert }) => {
    assert.deepEqual(json.safeStringify({ a: BigInt(18), b: 4 }), '{"a":"18","b":4}')
  })

  test('stringifies object with bigint (replacer returns bigint)', ({ assert }) => {
    const replacer = (_: any, value: any) => {
      return typeof value === 'bigint' ? value + BigInt(1) : value
    }

    assert.deepEqual(json.safeStringify({ a: BigInt(18), b: 4 }, replacer), '{"a":"19","b":4}')
  })

  test('stringifies object with bigint (replacer handles bigint)', ({ assert }) => {
    const replacer = (_: any, value: any) => {
      return typeof value === 'bigint' ? `${value.toString()}n` : value
    }

    assert.deepEqual(json.safeStringify({ a: BigInt(18), b: 4 }, replacer), '{"a":"18n","b":4}')
  })

  test('call toJSON', ({ assert }) => {
    assert.deepEqual(
      json.safeStringify({
        toJSON() {
          return {
            foo: 'bar',
            baz: {
              toJSON() {
                return 'baz'
              },
            },
          }
        },
      }),
      '{"foo":"bar","baz":"baz"}'
    )
  })

  test('raise exception when toJSON returns error', ({ assert }) => {
    assert.throws(
      () =>
        json.safeStringify({
          toJSON() {
            throw new Error('blow up')
          },
        }),
      'blow up'
    )
  })
})
