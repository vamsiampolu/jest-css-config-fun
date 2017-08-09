/* eslint-env node, jest */
import App from './App'

describe('App', () => {
  it('works', () => {
    expect(true).toEqual(true)
  })

  it('exists', () => {
    expect(App).not.toBeUndefined()
  })
})
