import { renderHook } from '@testing-library/react'
import { Router } from 'next/router'
import { useSsrLoading } from '.'
import { useState as useStateMock } from 'react'

jest.spyOn(Router.events, 'emit')

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn()
}))

const setLoading = jest.fn()

describe('useSsrLoading', () => {
  beforeEach(() => {
    const useLoadingMock = useStateMock as jest.Mock

    useLoadingMock.mockImplementation((_) => [_, setLoading])
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should be defined', () => {
    const { result } = renderHook(() => useSsrLoading())

    expect(result.current).toBeDefined()
    expect(result.current).toBe(false)
  })

  it('should be true when routeChangeStart', async () => {
    renderHook(() => useSsrLoading())

    Router.events.emit('routeChangeStart')

    expect(setLoading).toBeCalledWith(true)
    expect(setLoading).toBeCalledTimes(1)
  })

  it('should be false when routeChangeComplete', async () => {
    renderHook(() => useSsrLoading())

    Router.events.emit('routeChangeComplete')

    expect(setLoading).toBeCalledWith(false)
    expect(setLoading).toBeCalledTimes(1)
  })

  it('should be false when routeChangeError', async () => {
    renderHook(() => useSsrLoading())

    Router.events.emit('routeChangeError')

    expect(setLoading).toBeCalledWith(false)
    expect(setLoading).toBeCalledTimes(1)
  })
})
