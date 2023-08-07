import { useEffect } from 'react';
import useLoginModal from '@/hooks/useLoginModal'

export const useLockBodyScroll = (): void => {
  const loginModal = useLoginModal()
  useEffect((): (() => void) => {

    const originalStyle: string = window.getComputedStyle(
      document.body,
    ).overflow;
    document.body.style.overflow = 'hidden';

    return () => (document.body.style.overflow = originalStyle);
  }, []);
};
