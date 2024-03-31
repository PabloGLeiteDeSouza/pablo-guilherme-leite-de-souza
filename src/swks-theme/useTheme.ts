import { useContext } from 'react';
import { ThemeContext } from './provider';

export default function useTheme() {
  const context = useContext(ThemeContext);
  return {
    theme: context.theme,
    setTheme: context.setTheme,
    toggleThemeDefault: context.toggleThemeDefault,
    toggleThemeCustom: context.toggleThemeCustom,
  };
}
