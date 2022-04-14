import * as React from 'react';

export function useScroll() {
  const [shouldHideNav, setShouldHideNav] = React.useState(false);
  const [number, setNumber] = React.useState(10);

  const checkScroll = React.useCallback(() => {
    setShouldHideNav(window.scrollY > 100);
    if (number < 70) {
      if (
        window.innerHeight + document.documentElement.scrollTop + 400 >
        document.scrollingElement.scrollHeight
      ) {
        setNumber(n => n + 10);
      }
    }
  }, [number]);

  React.useEffect(() => {
    window.document.addEventListener('scroll', checkScroll);

    return () => window.document.removeEventListener('scroll', checkScroll);
  }, [checkScroll]);

  return { shouldHideNav, number };
}
