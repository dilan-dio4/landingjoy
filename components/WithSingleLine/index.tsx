import { useFloating } from '@floating-ui/react-dom';
import { ReactNode } from 'react';
import SingleLine from '../Hero/SingleLine';

interface WithSingleLine {
  children: ReactNode;
  rotation?: number;
}

export default function WithSingleLine({ children }: WithSingleLine) {
  const {x, y, reference, floating, strategy} = useFloating({
    placement: "bottom",

  });
  return <></>
  return (
    <>
      <div ref={reference}>{children}</div>
      <div
        ref={floating}
        style={{
          position: strategy,
          top: y ?? 0,
          left: 0,
          right: 0,
          transform: 'translateY(-50%)',
          pointerEvents: 'none'
        }}
      >
        <SingleLine />
      </div>
    </>
  );
}