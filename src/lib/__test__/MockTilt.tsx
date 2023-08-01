import { forwardRef } from 'react';
import { Tilt } from '..';
import { TiltProps, TiltRef } from '../types/types';
import testImage from './img/test.webp';

const MockTilt = forwardRef<TiltRef, TiltProps>((props, ref) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '484px',
      width: '100%',
    }}
  >
    <Tilt width={400} height={400} ref={ref} testIdEnable={true} {...props}>
      {props.children !== undefined ? (
        props.children
      ) : (
        <img
          src={testImage}
          alt="Test"
          style={{
            display: 'block',
            verticalAlign: 'middle',
            width: '100%',
            height: '100%',
            objectFit: 'fill',
          }}
        />
      )}
    </Tilt>
  </div>
));

export default MockTilt;
