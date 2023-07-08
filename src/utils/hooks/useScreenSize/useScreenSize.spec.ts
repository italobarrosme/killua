import { renderHook } from '@testing-library/react'
import { useScreenSize } from './useScreenSize'

describe('useScreenSize', () => {
  it('should initialize screen sizes correctly', () => {
    const width = 680

    const { result } = renderHook(() => useScreenSize(width))

    expect(result.current).toEqual({
      isMobile: true,
      isTablet: false,
      isDesktop: false,
      isLargeDesktop: false
    })
  })

  it('should update screen sizes correctly on window resize', () => {
    const { result } = renderHook(() => useScreenSize(900))

    global.innerWidth = 800
    global.dispatchEvent(new Event('resize'))

    expect(result.current).toEqual({
      isMobile: false,
      isTablet: false,
      isDesktop: true,
      isLargeDesktop: false
    })
  })

  it('should return true for isMobile when width is less than mobileDefined', () => {
    const { result: mobile } = renderHook(() => useScreenSize(600))

    expect(mobile.current).toEqual({
      isMobile: true,
      isTablet: false,
      isDesktop: false,
      isLargeDesktop: false
    })
  })

  it('should return true for isTablet when width is greater than mobileDefined and less than tabletDefined', () => {
    const { result: tablet } = renderHook(() => useScreenSize(700))

    expect(tablet.current).toEqual({
      isMobile: false,
      isTablet: true,
      isDesktop: false,
      isLargeDesktop: false
    })
  })

  it('should return true for isDesktop when width is greater than tabletDefined and less than desktopDefined', () => {
    const { result: desktop } = renderHook(() => useScreenSize(900))

    expect(desktop.current).toEqual({
      isMobile: false,
      isTablet: false,
      isDesktop: true,
      isLargeDesktop: false
    })
  })

  it('should return true for isLargeDesktop when width is greater than desktopDefined', () => {
    const { result: largeDesktop } = renderHook(() => useScreenSize(2000))

    expect(largeDesktop.current).toEqual({
      isMobile: false,
      isTablet: false,
      isDesktop: false,
      isLargeDesktop: true
    })
  })

  it('should return isMobile when we change the screenConfig mobileDefined', () => {
    const newConfigScreen = {
      mobileDefined: 400,
      tabletDefined: 768,
      desktopDefined: 1024,
      largeDesktopDefined: 1900
    }

    const { result: mobile } = renderHook(() =>
      useScreenSize(300, newConfigScreen)
    )

    expect(mobile.current).toEqual({
      isMobile: true,
      isTablet: false,
      isDesktop: false,
      isLargeDesktop: false
    })
  })
})
