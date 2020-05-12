import { useLayoutEffect, useState } from 'react'

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      window.localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
      window.localStorage.setItem('theme', 'dark')
    } else if ('(prefers-color-scheme: light)') {
      setTheme('light')
      window.localStorage.setItem('theme', 'light')
    }
  }, [])

  return [theme, toggleTheme]
}
