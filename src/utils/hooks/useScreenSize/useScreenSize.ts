import { useEffect, useState } from 'react'

type ScreenSizes = {
  mobileDefined: number
  tabletDefined: number
  desktopDefined: number
  largeDesktopDefined: number
}

type ValidsScreenSizes = {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  isLargeDesktop: boolean
}

export const useScreenSize = (
  width: number,
  screenConfig: ScreenSizes = {
    mobileDefined: 680,
    tabletDefined: 768,
    desktopDefined: 1024,
    largeDesktopDefined: 1900
  }
): ValidsScreenSizes => {
  const [screenSizes, setScreenSize] = useState<ValidsScreenSizes>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLargeDesktop: false
  })

  const { mobileDefined, desktopDefined, largeDesktopDefined, tabletDefined } =
    screenConfig

  useEffect(() => {
    setScreenSize({
      isMobile: width <= mobileDefined,
      isTablet: width > mobileDefined && width <= tabletDefined,
      isDesktop: width > tabletDefined && width <= desktopDefined,
      isLargeDesktop: width > desktopDefined
    })
  }, [width, mobileDefined, tabletDefined, desktopDefined, largeDesktopDefined])

  return screenSizes
}
