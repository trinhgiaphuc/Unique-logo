import * as React from 'react';

import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeChanger() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      className="p-4"
      onClick={() => setTheme(theme === 'fantasy' ? 'luxury' : 'fantasy')}
    >
      {theme === 'fantasy' ? (
        <FiSun className="text-xl" />
      ) : (
        <FiMoon className="text-xl" />
      )}
    </button>
  );
}
