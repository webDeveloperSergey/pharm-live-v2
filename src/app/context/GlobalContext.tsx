import type { ThemeUnion } from '@types'
import type { Dispatch, FC, ReactNode, SetStateAction } from 'react'
import { createContext, useMemo, useState } from 'react'

type GlobalContextType = {
  themeValue: ThemeUnion
  setThemeValue: Dispatch<SetStateAction<ThemeUnion>>
}

export const GlobalContext = createContext<GlobalContextType>({
  themeValue: 'light',
  setThemeValue: () => {},
})

type GlobalContextProviderProps = {
  children: ReactNode
  initial?: ThemeUnion
}

export const GlobalContextProvider: FC<GlobalContextProviderProps> = ({
  children,
  initial = 'light',
}) => {
  const [themeValue, setThemeValue] = useState<ThemeUnion>(initial)

  const theme = useMemo(() => {
    return { themeValue, setThemeValue }
  }, [themeValue])

  return (
    <GlobalContext.Provider value={theme}>{children}</GlobalContext.Provider>
  )
}
