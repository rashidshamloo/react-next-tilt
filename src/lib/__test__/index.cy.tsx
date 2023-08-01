// react
import { PropsWithChildren, createRef } from 'react';

/*
 *  Note: trigger position in cypress is off by 1 pixel (449 instead of 450),
 *  and because i'm testing for the exact position/angle,
 *  i'm providing the correct position
 */
const position: Record<string, { clientX: number; clientY: number }> = {
  topLeft: { clientX: 50, clientY: 50 },
  top: { clientX: 250, clientY: 50 },
  topRight: { clientX: 450, clientY: 50 },
  right: { clientX: 450, clientY: 250 },
  bottomRight: { clientX: 450, clientY: 450 },
  bottom: { clientX: 250, clientY: 450 },
  bottomLeft: { clientX: 50, clientY: 450 },
  left: { clientX: 50, clientY: 250 },
  center: { clientX: 250, clientY: 250 },
};

// mock tilt
import MockTilt from './MockTilt';

// types
import { Angle, TiltRef } from '../types/types';

/*
 *  Note: "tiltMaxAngleX" and "tiltMaxAngleY" are tested when testing for "tilt functionality",
 *  "gyroMaxAngleX" and "gyroMaxAngleY" are tested when testing for "gyroscope functionality",
 *  and "testIdEnable" works if any of the tests are working, so there's no need to write separate tests for them.
 */

describe('<Tilt />', () => {
  it('Testing if component renders correctly', () => {
    cy.mount(<MockTilt />);
  });

  describe('Testing if children render correctly', () => {
    it('Testing with one child', () => {
      cy.mount(
        <MockTilt>
          <p data-testid="paragraph">Children Test</p>
        </MockTilt>
      );
      cy.get('[data-testid="paragraph"]').should('exist');
    });

    it('Testing with nested children', () => {
      cy.mount(
        <MockTilt>
          <div>
            <p>P1</p>
            <p>P2</p>
          </div>
        </MockTilt>
      );
      cy.contains(/p1/i).should('exist');
      cy.contains(/p2/i).should('exist');
    });
  });

  describe('Testing dimensions', () => {
    it('Testing width (200)', () => {
      cy.mount(<MockTilt width={200} />);
      cy.get('[data-testid="tilt"]')
        .invoke('css', 'width')
        .should('eq', '200px');
    });
    it('Testing height (200)', () => {
      cy.mount(<MockTilt height={200} />);
      cy.get('[data-testid="tilt"]')
        .invoke('css', 'height')
        .should('eq', '200px');
    });
    it('Testing width (200) and height (300)', () => {
      cy.mount(<MockTilt width={200} height={300} />);
      cy.get('[data-testid="tilt"]').then((el) => {
        expect(el.css('width')).to.eq('200px');
        expect(el.css('height')).to.eq('300px');
      });
    });
  });

  it('Testing borderRadius (10px)', () => {
    cy.mount(<MockTilt borderRadius="10px" />);
    cy.get('[data-testid="container"]')
      .should('have.attr', 'style')
      .should('contain', 'border-radius: 10px');
    cy.get('[data-testid="tilt"]')
      .should('have.attr', 'style')
      .should('contain', 'border-radius: 10px');
    cy.get('[data-testid="spot-glare-container"]')
      .should('have.attr', 'style')
      .should('contain', 'border-radius: 10px');
    cy.get('[data-testid="line-glare-container"]')
      .should('have.attr', 'style')
      .should('contain', 'border-radius: 10px');
  });

  it('Testing perspective (100px)', () => {
    cy.mount(<MockTilt perspective="100px" />);
    cy.get('[data-testid="container"]')
      .should('have.attr', 'style')
      .should('contain', 'perspective: 100px');
  });

  describe('Testing scale', () => {
    it('Testing initial scale (1.1), should contain style3d(1,1,1)', () => {
      cy.mount(<MockTilt scale={1.1} />);
      cy.get('[data-testid="tilt"]')
        .should('have.attr', 'style')
        .should('contain', 'scale3d(1, 1, 1)');
    });
    it('Testing on hover (scale = 1.1), should contain style3d(1.1,1.1,1.1)', () => {
      cy.mount(<MockTilt scale={1.1} />);
      cy.get('[data-testid="tilt"]')
        .trigger('mousemove', position.center)
        .should('have.attr', 'style')
        .should('contain', 'scale3d(1.1, 1.1, 1.1)');
    });
  });

  describe('Testing "disabled = true"', () => {
    it('Testing with pointer, pointer at top left and "scale = 1.1", transform should contain "rotateX(0deg)" and "rotateY(0deg)" and "scale3d(1, 1, 1)"', () => {
      cy.mount(
        <MockTilt
          disabled={true}
          scale={1.1}
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
        />
      );
      cy.get('[data-testid="container"]').trigger(
        'mousemove',
        position.topLeft
      );
      cy.get('[data-testid="tilt"]')
        .should('have.attr', 'style')
        .should('contain', 'rotateX(0deg)')
        .should('contain', 'rotateY(0deg)')
        .should('contain', 'scale3d(1, 1, 1)');
    });
    it('Testing with gyro, "beta = 45" and "gamma = -45" and "scale = 1.1", transform should contain "rotateX(0deg)" and "rotateY(0deg)" and scale3d(1, 1, 1)', () => {
      cy.mount(
        <MockTilt
          disabled={true}
          scale={1.1}
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
        />
      );
      cy.get('[data-testid="tilt"]')
        .trigger('deviceorientation', {
          alpha: 0,
          beta: 45,
          gamma: -45,
        })
        .should('have.attr', 'style')
        .should('contain', 'rotateX(0deg)')
        .should('contain', 'rotateY(0deg)')
        .should('contain', 'scale3d(1, 1, 1)');
    });
    it('Testing disabledFilter, transform should contain "filter: brightness(50%)"', () => {
      cy.mount(
        <MockTilt
          disabled={true}
          disabledFilter="brightness(50%)"
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
        />
      );
      cy.get('[data-testid="container"]')
        .should('have.attr', 'style')
        .should('contain', 'filter: brightness(50%)');
    });
  });

  it('Testing CSSTransition, tilt, line glare, and spot glare element style should contain "transition: all 1s ease-in-out 0s"', () => {
    cy.mount(
      <MockTilt
        CSSTransition="all 1s ease-in-out 0s"
        lineGlareEnable={true}
        spotGlareEnable={true}
      />
    );
    cy.get('[data-testid="tilt"]')
      .should('have.attr', 'style')
      .should('contain', 'transition: all 1s ease-in-out 0s');
    cy.get('[data-testid="line-glare"]')
      .should('have.attr', 'style')
      .should('contain', 'transition: all 1s ease-in-out 0s');
    cy.get('[data-testid="spot-glare"]')
      .should('have.attr', 'style')
      .should('contain', 'transition: all 1s ease-in-out 0s');
  });

  it('Testing style, container style should contain "color: green"', () => {
    cy.mount(<MockTilt style={{ color: 'green' }} />);
    cy.get('[data-testid="container"]')
      .should('have.attr', 'style')
      .should('contain', 'color: green');
  });

  it('Testing tiltStyle, tilt style should contain "color: green"', () => {
    cy.mount(<MockTilt tiltStyle={{ color: 'green' }} />);
    cy.get('[data-testid="tilt"]')
      .should('have.attr', 'style')
      .should('contain', 'color: green');
  });

  it('Testing tiltProps, tilt should contain the "data-testprop" property', () => {
    cy.mount(<MockTilt tiltProps={{ 'data-testprop': 'test' }} />);
    cy.get('[data-testid="tilt"]')
      .should('have.attr', 'data-testprop')
      .should('contain', 'test');
  });

  it('Testing initial angle (angle = 30), transform should contain "rotateX(30deg)" and "rotateY(30deg)"', () => {
    cy.mount(
      <MockTilt
        initialAngleX={30}
        initialAngleY={30}
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
      />
    );
    cy.get('[data-testid="tilt"]')
      .should('have.attr', 'style')
      .should('contain', 'rotateX(30deg) rotateY(30deg)');
  });

  it('Testing TiltWrapperElement, weapper element should exists', () => {
    const TiltWrapper = ({ children }: PropsWithChildren) => (
      <div data-testprop="test">{children}</div>
    );
    cy.mount(<MockTilt TiltWrapper={TiltWrapper} />);
    cy.get('[data-testprop="test"]').should('exist');
  });

  describe('Testing tilt reset', () => {
    it('tiltReset = "true", transform should contain "rotateX(0deg)" and "rotateY(0deg)"', () => {
      cy.mount(<MockTilt tiltReset={true} />);
      cy.get('[data-testid="container"]')
        .trigger('mousemove', position.topLeft)
        .trigger('mouseout');
      cy.get('[data-testid="tilt"]')
        .should('have.attr', 'style')
        .should('contain', 'rotateX(0deg) rotateY(0deg)');
    });
    it('tiltReset = "false", transform should contain "rotateX(20deg)" and "rotateY(-20deg)"', () => {
      cy.mount(<MockTilt tiltReset={false} />);
      cy.get('[data-testid="container"]')
        .trigger('mousemove', position.topLeft)
        .trigger('mouseout');
      cy.get('[data-testid="tilt"]')
        .should('have.attr', 'style')
        .should('contain', 'rotateX(20deg) rotateY(-20deg)');
    });
  });

  it('Testing full-page listening, transform should contain "rotateX(20deg)" and "rotateY(-20deg)"', () => {
    cy.mount(<MockTilt fullPageListening={true} />);
    cy.get('[data-testid="container"]').trigger('mousemove', {
      clientX: 0,
      clientY: 0,
    });
    cy.get('[data-testid="tilt"]')
      .should('have.attr', 'style')
      .should('contain', 'rotateX(20deg) rotateY(-20deg)');
  });

  describe('Testing tilt functionality (max angle = 20)', () => {
    describe('Normal', () => {
      it('Testing with pointer at center, transform should contain "rotateX(0deg)" and "rotateY(0deg)"', () => {
        cy.mount(
          <MockTilt tiltReverse={false} tiltMaxAngleX={20} tiltMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger(
          'mousemove',
          position.center
        );
        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(0deg)')
          .should('contain', 'rotateY(0deg)');
      });
      it('Testing with pointer at top left, transform should contain "rotateX(20deg)" and "rotateY(-20deg)"', () => {
        cy.mount(
          <MockTilt tiltReverse={false} tiltMaxAngleX={20} tiltMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger(
          'mousemove',
          position.topLeft
        );
        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(20deg)')
          .should('contain', 'rotateY(-20deg)');
      });
      it('Testing with pointer at top, transform should contain "rotateX(20deg)" and "rotateY(0deg)"', () => {
        cy.mount(
          <MockTilt tiltReverse={false} tiltMaxAngleX={20} tiltMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger('mousemove', position.top);

        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(20deg)')
          .should('contain', 'rotateY(0deg)');
      });
      it('Testing with pointer at top right, transform should contain "rotateX(20deg)" and "rotateY(20deg)"', () => {
        cy.mount(
          <MockTilt tiltReverse={false} tiltMaxAngleX={20} tiltMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger(
          'mousemove',
          position.topRight
        );
        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(20deg)')
          .should('contain', 'rotateY(20deg)');
      });
      it('Testing with pointer at right, transform should contain "rotateX(0deg)" and "rotateY(20deg)"', () => {
        cy.mount(
          <MockTilt tiltReverse={false} tiltMaxAngleX={20} tiltMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger(
          'mousemove',
          position.right
        );
        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(0deg)')
          .should('contain', 'rotateY(20deg)');
      });
      it('Testing with pointer at bottom right, transform should contain "rotateX(-20deg)" and "rotateY(20deg)"', () => {
        cy.mount(
          <MockTilt tiltReverse={false} tiltMaxAngleX={20} tiltMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger(
          'mousemove',
          position.bottomRight
        );
        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(-20deg)')
          .should('contain', 'rotateY(20deg)');
      });
      it('Testing with pointer at bottom, transform should contain "rotateX(-20deg)" and "rotateY(0deg)"', () => {
        cy.mount(
          <MockTilt tiltReverse={false} tiltMaxAngleX={20} tiltMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger(
          'mousemove',
          position.bottom
        );
        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(-20deg)')
          .should('contain', 'rotateY(0deg)');
      });
      it('Testing with pointer at bottom left, transform should contain "rotateX(-20deg)" and "rotateY(-20deg)"', () => {
        cy.mount(
          <MockTilt tiltReverse={false} tiltMaxAngleX={20} tiltMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger(
          'mousemove',
          position.bottomLeft
        );
        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(-20deg)')
          .should('contain', 'rotateY(-20deg)');
      });
      it('Testing with pointer at left, transform should contain "rotateX(0deg)" and "rotateY(-20deg)"', () => {
        cy.mount(
          <MockTilt tiltReverse={false} tiltMaxAngleX={20} tiltMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger('mousemove', position.left);
        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(0deg)')
          .should('contain', 'rotateY(-20deg)');
      });
    });
    describe('Reverse', () => {
      it('Testing with pointer at center, transform should contain "rotateX(0deg)" and "rotateY(0deg)"', () => {
        cy.mount(
          <MockTilt tiltReverse={true} tiltMaxAngleX={20} tiltMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger(
          'mousemove',
          position.center
        );
        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(0deg)')
          .should('contain', 'rotateY(0deg)');
      });
      it('Testing with pointer at top left, transform should contain "rotateX(-20deg)" and "rotateY(20deg)"', () => {
        cy.mount(
          <MockTilt tiltReverse={true} tiltMaxAngleX={20} tiltMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger(
          'mousemove',
          position.topLeft
        );
        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(-20deg)')
          .should('contain', 'rotateY(20deg)');
      });
      it('Testing with pointer at top, transform should contain "rotateX(-20deg)" and "rotateY(0deg)"', () => {
        cy.mount(
          <MockTilt tiltReverse={true} tiltMaxAngleX={20} tiltMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger('mousemove', position.top);
        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(-20deg)')
          .should('contain', 'rotateY(0deg)');
      });
      it('Testing with pointer at top right, transform should contain "rotateX(-20deg)" and "rotateY(-20deg)"', () => {
        cy.mount(
          <MockTilt tiltReverse={true} tiltMaxAngleX={20} tiltMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger(
          'mousemove',
          position.topRight
        );
        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(-20deg)')
          .should('contain', 'rotateY(-20deg)');
      });
      it('Testing with pointer at right, transform should contain "rotateX(0deg)" and "rotateY(-20deg)"', () => {
        cy.mount(
          <MockTilt tiltReverse={true} tiltMaxAngleX={20} tiltMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger(
          'mousemove',
          position.right
        );
        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(0deg)')
          .should('contain', 'rotateY(-20deg)');
      });
      it('Testing with pointer at bottom right, transform should contain "rotateX(20deg)" and "rotateY(-20deg)"', () => {
        cy.mount(
          <MockTilt tiltReverse={true} tiltMaxAngleX={20} tiltMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger(
          'mousemove',
          position.bottomRight
        );
        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(20deg)')
          .should('contain', 'rotateY(-20deg)');
      });
      it('Testing with pointer at bottom, transform should contain "rotateX(20deg)" and "rotateY(0deg)"', () => {
        cy.mount(
          <MockTilt tiltReverse={true} tiltMaxAngleX={20} tiltMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger(
          'mousemove',
          position.bottom
        );
        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(20deg)')
          .should('contain', 'rotateY(0deg)');
      });
      it('Testing with pointer at bottom left, transform should contain "rotateX(20deg)" and "rotateY(20deg)"', () => {
        cy.mount(
          <MockTilt tiltReverse={true} tiltMaxAngleX={20} tiltMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger(
          'mousemove',
          position.bottomLeft
        );
        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(20deg)')
          .should('contain', 'rotateY(20deg)');
      });
      it('Testing with pointer at left, transform should contain "rotateX(0deg)" and "rotateY(20deg)"', () => {
        cy.mount(
          <MockTilt tiltReverse={true} tiltMaxAngleX={20} tiltMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger('mousemove', position.left);
        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(0deg)')
          .should('contain', 'rotateY(20deg)');
      });
    });
  });

  describe('Testing gyroscope functionality (gyro max angle = 20), testing with "gamma and beta = 45" to test for angle limiting as well. ("alpha = 0" if not mentioned)', () => {
    describe('Normal', () => {
      it('Testing with "beta = 0" and "gamma = 0", transform should contain "rotateX(0deg)" and "rotateY(0deg)"', () => {
        cy.mount(
          <MockTilt gyroReverse={false} gyroMaxAngleX={20} gyroMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger('deviceorientation', {
          alpha: 0,
          beta: 0,
          gamma: 0,
        });
        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(0deg)')
          .should('contain', 'rotateY(0deg)');
      });
      it('Testing with "alpha = 45", "beta = 0", and "gamma = 0", transform should contain "rotateX(0deg)" and "rotateY(0deg)"', () => {
        cy.mount(
          <MockTilt gyroReverse={false} gyroMaxAngleX={20} gyroMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger('deviceorientation', {
          alpha: 45,
          beta: 0,
          gamma: 0,
        });
        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(0deg)')
          .should('contain', 'rotateY(0deg)');
      });
      it('Testing with "beta = 45" and "gamma = -45", transform should contain "rotateX(20deg)" and "rotateY(-20deg)"', () => {
        cy.mount(
          <MockTilt gyroReverse={false} gyroMaxAngleX={20} gyroMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger('deviceorientation', {
          alpha: 0,
          beta: 45,
          gamma: -45,
        });
        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(20deg)')
          .should('contain', 'rotateY(-20deg)');
      });
      it('Testing with "beta = 45" and "gamma = 0", transform should contain "rotateX(20deg)" and "rotateY(0deg)"', () => {
        cy.mount(
          <MockTilt gyroReverse={false} gyroMaxAngleX={20} gyroMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger('deviceorientation', {
          alpha: 0,
          beta: 45,
          gamma: 0,
        });
        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(20deg)')
          .should('contain', 'rotateY(0deg)');
      });
      it('Testing with "beta = 45" and "gamma = 45", transform should contain "rotateX(20deg)" and "rotateY(20deg)"', () => {
        cy.mount(
          <MockTilt gyroReverse={false} gyroMaxAngleX={20} gyroMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger('deviceorientation', {
          alpha: 0,
          beta: 45,
          gamma: 45,
        });
        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(20deg)')
          .should('contain', 'rotateY(20deg)');
      });
      it('Testing with "beta = 0" and "gamma = 45", transform should contain "rotateX(0deg)" and "rotateY(20deg)"', () => {
        cy.mount(
          <MockTilt gyroReverse={false} gyroMaxAngleX={20} gyroMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger('deviceorientation', {
          alpha: 0,
          beta: 0,
          gamma: 45,
        });
        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(0deg)')
          .should('contain', 'rotateY(20deg)');
      });
      it('Testing with "beta = -45" and "gamma = 45", transform should contain "rotateX(-20deg)" and "rotateY(20deg)"', () => {
        cy.mount(
          <MockTilt gyroReverse={false} gyroMaxAngleX={20} gyroMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger('deviceorientation', {
          alpha: 0,
          beta: -45,
          gamma: 45,
        });
        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(-20deg)')
          .should('contain', 'rotateY(20deg)');
      });
      it('Testing with "beta = -45" and "gamma = 0", transform should contain "rotateX(-20deg)" and "rotateY(0deg)"', () => {
        cy.mount(
          <MockTilt gyroReverse={false} gyroMaxAngleX={20} gyroMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger('deviceorientation', {
          alpha: 0,
          beta: -45,
          gamma: 0,
        });
        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(-20deg)')
          .should('contain', 'rotateY(0deg)');
      });
      it('Testing with "beta = -45" and "gamma = -45", transform should contain "rotateX(-20deg)" and "rotateY(-20deg)"', () => {
        cy.mount(
          <MockTilt gyroReverse={false} gyroMaxAngleX={20} gyroMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger('deviceorientation', {
          alpha: 0,
          beta: -45,
          gamma: -45,
        });
        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(-20deg)')
          .should('contain', 'rotateY(-20deg)');
      });
      it('Testing with "beta = 0" and "gamma = -45", transform should contain "rotateX(0deg)" and "rotateY(-20deg)"', () => {
        cy.mount(
          <MockTilt gyroReverse={false} gyroMaxAngleX={20} gyroMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger('deviceorientation', {
          alpha: 0,
          beta: 0,
          gamma: -45,
        });
        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(0deg)')
          .should('contain', 'rotateY(-20deg)');
      });
    });
    describe('Reverse', () => {
      it('Testing with "beta = 0" and "gamma = 0", transform should contain "rotateX(0deg)" and "rotateY(0deg)"', () => {
        cy.mount(
          <MockTilt gyroReverse={true} gyroMaxAngleX={20} gyroMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger('deviceorientation', {
          alpha: 0,
          beta: 0,
          gamma: 0,
        });
        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(0deg)')
          .should('contain', 'rotateY(0deg)');
      });
      it('Testing with "alpha = 45", "beta = 0", and "gamma = 0", transform should contain "rotateX(0deg)" and "rotateY(0deg)"', () => {
        cy.mount(
          <MockTilt gyroReverse={true} gyroMaxAngleX={20} gyroMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger('deviceorientation', {
          alpha: 45,
          beta: 0,
          gamma: 0,
        });
        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(0deg)')
          .should('contain', 'rotateY(0deg)');
      });
      it('Testing with "beta = 45" and "gamma = -45", transform should contain "rotateX(-20deg)" and "rotateY(20deg)"', () => {
        cy.mount(
          <MockTilt gyroReverse={true} gyroMaxAngleX={20} gyroMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger('deviceorientation', {
          alpha: 0,
          beta: 45,
          gamma: -45,
        });
        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(-20deg)')
          .should('contain', 'rotateY(20deg)');
      });
      it('Testing with "beta = 45" and "gamma = 0", transform should contain "rotateX(-20deg)" and "rotateY(0deg)"', () => {
        cy.mount(
          <MockTilt gyroReverse={true} gyroMaxAngleX={20} gyroMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger('deviceorientation', {
          alpha: 0,
          beta: 45,
          gamma: 0,
        });
        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(-20deg)')
          .should('contain', 'rotateY(0deg)');
      });
      it('Testing with "beta = 45" and "gamma = 45", transform should contain "rotateX(-20deg)" and "rotateY(-20deg)"', () => {
        cy.mount(
          <MockTilt gyroReverse={true} gyroMaxAngleX={20} gyroMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger('deviceorientation', {
          alpha: 0,
          beta: 45,
          gamma: 45,
        });
        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(-20deg)')
          .should('contain', 'rotateY(-20deg)');
      });
      it('Testing with "beta = 0" and "gamma = 45", transform should contain "rotateX(0deg)" and "rotateY(-20deg)"', () => {
        cy.mount(
          <MockTilt gyroReverse={true} gyroMaxAngleX={20} gyroMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger('deviceorientation', {
          alpha: 0,
          beta: 0,
          gamma: 45,
        });
        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(0deg)')
          .should('contain', 'rotateY(-20deg)');
      });
      it('Testing with "beta = -45" and "gamma = 45", transform should contain "rotateX(20deg)" and "rotateY(-20deg)"', () => {
        cy.mount(
          <MockTilt gyroReverse={true} gyroMaxAngleX={20} gyroMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger('deviceorientation', {
          alpha: 0,
          beta: -45,
          gamma: 45,
        });
        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(20deg)')
          .should('contain', 'rotateY(-20deg)');
      });
      it('Testing with "beta = -45" and "gamma = 0", transform should contain "rotateX(20deg)" and "rotateY(0deg)"', () => {
        cy.mount(
          <MockTilt gyroReverse={true} gyroMaxAngleX={20} gyroMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger('deviceorientation', {
          alpha: 0,
          beta: -45,
          gamma: 0,
        });
        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(20deg)')
          .should('contain', 'rotateY(0deg)');
      });
      it('Testing with "beta = -45" and "gamma = -45", transform should contain "rotateX(20deg)" and "rotateY(20deg)"', () => {
        cy.mount(
          <MockTilt gyroReverse={true} gyroMaxAngleX={20} gyroMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger('deviceorientation', {
          alpha: 0,
          beta: -45,
          gamma: -45,
        });
        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(20deg)')
          .should('contain', 'rotateY(20deg)');
      });
      it('Testing with "beta = 0" and "gamma = -45", transform should contain "rotateX(0deg)" and "rotateY(20deg)"', () => {
        cy.mount(
          <MockTilt gyroReverse={true} gyroMaxAngleX={20} gyroMaxAngleY={20} />
        );
        cy.get('[data-testid="container"]').trigger('deviceorientation', {
          alpha: 0,
          beta: 0,
          gamma: -45,
        });
        cy.get('[data-testid="tilt"]')
          .should('have.attr', 'style')
          .should('contain', 'rotateX(0deg)')
          .should('contain', 'rotateY(20deg)');
      });
    });
  });

  describe('Testing line glare', () => {
    it('Testing lineGlareEnable = false, line glare element should not exist', () => {
      cy.mount(<MockTilt lineGlareEnable={false} />);
      cy.get('[data-testid="line-glare"]').should('not.exist');
    });
    it('Testing lineGlareColor (green)', () => {
      cy.mount(<MockTilt lineGlareEnable={true} lineGlareColor="green" />);
      cy.get('[data-testid="line-glare"]')
        .should('have.attr', 'style')
        .should('contain', 'green');
    });
    it('Testing lineGlareMaxOpacity (0.12)', () => {
      cy.mount(<MockTilt lineGlareEnable={true} lineGlareMaxOpacity={0.12} />);
      cy.get('[data-testid="line-glare"]')
        .should('have.attr', 'style')
        .should('contain', 'opacity: 0.12');
    });
    it('Testing lineGlareMixBlendMode (overlay)', () => {
      cy.mount(
        <MockTilt lineGlareEnable={true} lineGlareMixBlendMode="overlay" />
      );
      cy.get('[data-testid="line-glare-container"]')
        .should('have.attr', 'style')
        .should('contain', 'mix-blend-mode: overlay');
    });
    it('Testing lineGlareWidthPercent (20)', () => {
      cy.mount(<MockTilt lineGlareEnable={true} lineGlareWidthPercent={20} />);
      const lineGlareStart = (100 - 20 / 2) / 2;
      const lineGlareEnd = (100 - 20 / 2) / 2 + 20 / 2;
      cy.get('[data-testid="line-glare"]')
        .should('have.attr', 'style')
        .should('contain', lineGlareStart + '%')
        .should('contain', lineGlareEnd + '%');
    });
    describe('Testing line glare direction', () => {
      it('Testing lineGlareDirection = "to-bottom-right"', () => {
        cy.mount(
          <MockTilt
            lineGlareEnable={true}
            lineGlareDirection="to-bottom-right"
          />
        );
        cy.get('[data-testid="line-glare"]')
          .should('have.attr', 'style')
          .should('contain', 'to right bottom');
      });
      it('Testing lineGlareDirection = "to-bottom-left"', () => {
        cy.mount(
          <MockTilt
            lineGlareEnable={true}
            lineGlareDirection="to-bottom-left"
          />
        );
        cy.get('[data-testid="line-glare"]')
          .should('have.attr', 'style')
          .should('contain', 'to left bottom');
      });
    });
    describe('Testing line glare blur', () => {
      it('Testing lineGlareBlurAmount (10px), filter should be "blur(10px)"', () => {
        cy.mount(
          <MockTilt
            lineGlareEnable={true}
            lineGlareBlurEnable={true}
            lineGlareBlurAmount="10px"
          />
        );
        cy.get('[data-testid="line-glare"]')
          .should('have.attr', 'style')
          .should('contain', 'filter: blur(10px)');
      });
      it('Testing lineGlareBlurEnable = false, "filter: blur(10px) should not exist', () => {
        cy.mount(
          <MockTilt
            lineGlareEnable={true}
            lineGlareBlurEnable={false}
            lineGlareBlurAmount="10px"
          />
        );
        cy.get('[data-testid="line-glare"]')
          .should('have.attr', 'style')
          .should('not.contain', 'filter: blur(10px)');
      });
    });
    describe('Testing lineGlareHoverPosition', () => {
      describe('Testing "top-left" position', () => {
        it('Testing with pointer at center, transform should be "translateX(-100%)"', () => {
          cy.mount(
            <MockTilt
              lineGlareEnable={true}
              lineGlareHoverPosition="top-left"
            />
          );
          cy.get('[data-testid="container"]').trigger(
            'mousemove',
            position.center
          );
          cy.get('[data-testid="line-glare"]')
            .should('have.attr', 'style')
            .should('contain', 'transform: translateX(-100%)');
        });
        it('Testing with pointer at top left, transform should be "translateX(50%)"', () => {
          cy.mount(
            <MockTilt
              lineGlareEnable={true}
              lineGlareHoverPosition="top-left"
            />
          );
          cy.get('[data-testid="container"]').trigger(
            'mousemove',
            position.topLeft
          );
          cy.get('[data-testid="line-glare"]')
            .should('have.attr', 'style')
            .should('contain', 'transform: translateX(50%)');
        });
      });
      describe('Testing "top-right" position', () => {
        it('Testing with pointer at center, transform should be "translateX(-100%)"', () => {
          cy.mount(
            <MockTilt
              lineGlareEnable={true}
              lineGlareHoverPosition="top-right"
            />
          );
          cy.get('[data-testid="container"]').trigger(
            'mousemove',
            position.center
          );
          cy.get('[data-testid="line-glare"]')
            .should('have.attr', 'style')
            .should('contain', 'transform: translateX(-100%)');
        });
        it('Testing with pointer at top right, transform should be "translateX(50%)"', () => {
          cy.mount(
            <MockTilt
              lineGlareEnable={true}
              lineGlareHoverPosition="top-right"
            />
          );
          cy.get('[data-testid="container"]').trigger(
            'mousemove',
            position.topRight
          );
          cy.get('[data-testid="line-glare"]')
            .should('have.attr', 'style')
            .should('contain', 'transform: translateX(50%)');
        });
      });
      describe('Testing "bottom-left" position', () => {
        it('Testing with pointer at center, transform should be "translateX(-100%)"', () => {
          cy.mount(
            <MockTilt
              lineGlareEnable={true}
              lineGlareHoverPosition="bottom-left"
            />
          );
          cy.get('[data-testid="container"]').trigger(
            'mousemove',
            position.center
          );
          cy.get('[data-testid="line-glare"]')
            .should('have.attr', 'style')
            .should('contain', 'transform: translateX(-100%)');
        });
        it('Testing with pointer at bottom left, transform should be "translateX(50%)"', () => {
          cy.mount(
            <MockTilt
              lineGlareEnable={true}
              lineGlareHoverPosition="bottom-left"
            />
          );
          cy.get('[data-testid="container"]').trigger(
            'mousemove',
            position.bottomLeft
          );
          cy.get('[data-testid="line-glare"]')
            .should('have.attr', 'style')
            .should('contain', 'transform: translateX(50%)');
        });
      });
      describe('Testing "bottom-right" position', () => {
        it('Testing with pointer at center, transform should be "translateX(-100%)"', () => {
          cy.mount(
            <MockTilt
              lineGlareEnable={true}
              lineGlareHoverPosition="bottom-right"
            />
          );
          cy.get('[data-testid="container"]').trigger(
            'mousemove',
            position.center
          );
          cy.get('[data-testid="line-glare"]')
            .should('have.attr', 'style')
            .should('contain', 'transform: translateX(-100%)');
        });
        it('Testing with pointer at bottom right, transform should be "translateX(50%)"', () => {
          cy.mount(
            <MockTilt
              lineGlareEnable={true}
              lineGlareHoverPosition="bottom-right"
            />
          );
          cy.get('[data-testid="container"]').trigger(
            'mousemove',
            position.bottomRight
          );
          cy.get('[data-testid="line-glare"]')
            .should('have.attr', 'style')
            .should('contain', 'transform: translateX(50%)');
        });
      });
    });
    describe('Testing lineGlareReverse', () => {
      it('Testing with pointer at center, transform should be "translateX(50%)"', () => {
        cy.mount(
          <MockTilt
            lineGlareEnable={true}
            lineGlareReverse={true}
            lineGlareHoverPosition="top-left"
          />
        );
        cy.get('[data-testid="container"]').trigger(
          'mousemove',
          position.center
        );
        cy.get('[data-testid="line-glare"]')
          .should('have.attr', 'style')
          .should('contain', 'transform: translateX(50%)');
      });
      it('Testing with lineGlareHoverPosition="top-left" and pointer at top left, transform should be "translateX(-100%)"', () => {
        cy.mount(
          <MockTilt
            lineGlareEnable={true}
            lineGlareReverse={true}
            lineGlareHoverPosition="top-left"
          />
        );
        cy.get('[data-testid="container"]').trigger(
          'mousemove',
          position.topLeft
        );
        cy.get('[data-testid="line-glare"]')
          .should('have.attr', 'style')
          .should('contain', 'transform: translateX(-100%)');
      });
      it('Testing with lineGlareHoverPosition="top-right" and pointer at top right, transform should be "translateX(-100%)"', () => {
        cy.mount(
          <MockTilt
            lineGlareEnable={true}
            lineGlareReverse={true}
            lineGlareHoverPosition="top-right"
          />
        );
        cy.get('[data-testid="container"]').trigger(
          'mousemove',
          position.topRight
        );
        cy.get('[data-testid="line-glare"]')
          .should('have.attr', 'style')
          .should('contain', 'transform: translateX(-100%)');
      });
      it('Testing with lineGlareHoverPosition="bottom-left" and pointer at bottom left, transform should be "translateX(-100%)"', () => {
        cy.mount(
          <MockTilt
            lineGlareEnable={true}
            lineGlareReverse={true}
            lineGlareHoverPosition="bottom-left"
          />
        );
        cy.get('[data-testid="container"]').trigger(
          'mousemove',
          position.bottomLeft
        );
        cy.get('[data-testid="line-glare"]')
          .should('have.attr', 'style')
          .should('contain', 'transform: translateX(-100%)');
      });
      it('Testing with lineGlareHoverPosition="bottom-right" and pointer at bottom right, transform should be "translateX(-100%)"', () => {
        cy.mount(
          <MockTilt
            lineGlareEnable={true}
            lineGlareReverse={true}
            lineGlareHoverPosition="bottom-right"
          />
        );
        cy.get('[data-testid="container"]').trigger(
          'mousemove',
          position.bottomRight
        );
        cy.get('[data-testid="line-glare"]')
          .should('have.attr', 'style')
          .should('contain', 'transform: translateX(-100%)');
      });
    });
  });

  describe('Testing spot glare', () => {
    it('Testing spotGlareEnable = false, spot glare element should not exist', () => {
      cy.mount(<MockTilt spotGlareEnable={false} />);
      cy.get('[data-testid="spot-glare"]').should('not.exist');
    });
    it('Testing spotGlareColor (green)', () => {
      cy.mount(<MockTilt spotGlareEnable={true} spotGlareColor="green" />);
      cy.get('[data-testid="spot-glare"]')
        .should('have.attr', 'style')
        .should('contain', 'green');
    });
    it('Testing spotGlareMaxOpacity (0.12)', () => {
      cy.mount(
        <MockTilt
          spotGlareEnable={true}
          spotGlareMaxOpacity={0.12}
          spotGlarePosition="top"
        />
      );
      cy.get('[data-testid="container"]').trigger('mousemove', position.top);
      cy.get('[data-testid="spot-glare"]')
        .should('have.attr', 'style')
        .should('contain', 'opacity: 0.12');
    });
    it('Testing spotGlareMixBlendMode (overlay)', () => {
      cy.mount(
        <MockTilt spotGlareEnable={true} spotGlareMixBlendMode="overlay" />
      );
      cy.get('[data-testid="spot-glare-container"]')
        .should('have.attr', 'style')
        .should('contain', 'mix-blend-mode: overlay');
    });

    describe('Testing spotGlarePosition', () => {
      describe('Testing "top" position', () => {
        it('Testing with pointer at center, transform should be "translateX(25%)", opacity should be "0"', () => {
          cy.mount(
            <MockTilt
              spotGlareEnable={true}
              spotGlarePosition="top"
              spotGlareMaxOpacity={1}
            />
          );
          cy.get('[data-testid="container"]').trigger(
            'mousemove',
            position.center
          );
          cy.get('[data-testid="spot-glare"]')
            .should('have.attr', 'style')
            .should('contain', 'transform: translateX(25%)')
            .should('contain', 'opacity: 0');
        });
        it('Testing with pointer at top left, transform should be "translateX(50%)", opacity should be "1"', () => {
          cy.mount(
            <MockTilt
              spotGlareEnable={true}
              spotGlarePosition="top"
              spotGlareMaxOpacity={1}
            />
          );
          cy.get('[data-testid="container"]').trigger(
            'mousemove',
            position.topLeft
          );
          cy.get('[data-testid="spot-glare"]')
            .should('have.attr', 'style')
            .should('contain', 'transform: translateX(50%)')
            .should('contain', 'opacity: 1');
        });
        it('Testing with pointer at top, transform should be "translateX(25%)", opacity should be "1"', () => {
          cy.mount(
            <MockTilt
              spotGlareEnable={true}
              spotGlarePosition="top"
              spotGlareMaxOpacity={1}
            />
          );
          cy.get('[data-testid="container"]').trigger(
            'mousemove',
            position.top
          );
          cy.get('[data-testid="spot-glare"]')
            .should('have.attr', 'style')
            .should('contain', 'transform: translateX(25%)')
            .should('contain', 'opacity: 1');
        });
        it('Testing with pointer at top right, transform should be "translateX(0%)", opacity should be "1"', () => {
          cy.mount(
            <MockTilt
              spotGlareEnable={true}
              spotGlarePosition="top"
              spotGlareMaxOpacity={1}
            />
          );
          cy.get('[data-testid="container"]').trigger(
            'mousemove',
            position.topRight
          );
          cy.get('[data-testid="spot-glare"]')
            .should('have.attr', 'style')
            .should('contain', 'transform: translateX(0%)')
            .should('contain', 'opacity: 1');
        });
      });
      describe('Testing "bottom" position', () => {
        it('Testing with pointer at center, transform should be "translateX(25%)", opacity should be "0"', () => {
          cy.mount(
            <MockTilt
              spotGlareEnable={true}
              spotGlarePosition="bottom"
              spotGlareMaxOpacity={1}
            />
          );
          cy.get('[data-testid="container"]').trigger(
            'mousemove',
            position.center
          );
          cy.get('[data-testid="spot-glare"]')
            .should('have.attr', 'style')
            .should('contain', 'transform: translateX(25%)')
            .should('contain', 'opacity: 0');
        });
        it('Testing with pointer at bottom left, transform should be "translateX(50%)", opacity should be "1"', () => {
          cy.mount(
            <MockTilt
              spotGlareEnable={true}
              spotGlarePosition="bottom"
              spotGlareMaxOpacity={1}
            />
          );
          cy.get('[data-testid="container"]').trigger(
            'mousemove',
            position.bottomLeft
          );
          cy.get('[data-testid="spot-glare"]')
            .should('have.attr', 'style')
            .should('contain', 'transform: translateX(50%)')
            .should('contain', 'opacity: 1');
        });
        it('Testing with pointer at bottom, transform should be "translateX(25%)", opacity should be "1"', () => {
          cy.mount(
            <MockTilt
              spotGlareEnable={true}
              spotGlarePosition="bottom"
              spotGlareMaxOpacity={1}
            />
          );
          cy.get('[data-testid="container"]').trigger(
            'mousemove',
            position.bottom
          );
          cy.get('[data-testid="spot-glare"]')
            .should('have.attr', 'style')
            .should('contain', 'transform: translateX(25%)')
            .should('contain', 'opacity: 1');
        });
        it('Testing with pointer at bottom right, transform should be "translateX(0%)", opacity should be "1"', () => {
          cy.mount(
            <MockTilt
              spotGlareEnable={true}
              spotGlarePosition="bottom"
              spotGlareMaxOpacity={1}
            />
          );
          cy.get('[data-testid="container"]').trigger(
            'mousemove',
            position.bottomRight
          );
          cy.get('[data-testid="spot-glare"]')
            .should('have.attr', 'style')
            .should('contain', 'transform: translateX(0%)')
            .should('contain', 'opacity: 1');
        });
      });
      describe('Testing "left" position', () => {
        it('Testing with pointer at center, transform should be "translateY(25%)", opacity should be "0"', () => {
          cy.mount(
            <MockTilt
              spotGlareEnable={true}
              spotGlarePosition="left"
              spotGlareMaxOpacity={1}
            />
          );
          cy.get('[data-testid="container"]').trigger(
            'mousemove',
            position.center
          );
          cy.get('[data-testid="spot-glare"]')
            .should('have.attr', 'style')
            .should('contain', 'transform: translateY(25%)')
            .should('contain', 'opacity: 0');
        });
        it('Testing with pointer at top left, transform should be "translateY(50%)", opacity should be "1"', () => {
          cy.mount(
            <MockTilt
              spotGlareEnable={true}
              spotGlarePosition="left"
              spotGlareMaxOpacity={1}
            />
          );
          cy.get('[data-testid="container"]').trigger(
            'mousemove',
            position.topLeft
          );
          cy.get('[data-testid="spot-glare"]')
            .should('have.attr', 'style')
            .should('contain', 'transform: translateY(50%)')
            .should('contain', 'opacity: 1');
        });
        it('Testing with pointer at left, transform should be "translateY(25%)", opacity should be "1"', () => {
          cy.mount(
            <MockTilt
              spotGlareEnable={true}
              spotGlarePosition="left"
              spotGlareMaxOpacity={1}
            />
          );
          cy.get('[data-testid="container"]').trigger(
            'mousemove',
            position.left
          );
          cy.get('[data-testid="spot-glare"]')
            .should('have.attr', 'style')
            .should('contain', 'transform: translateY(25%)')
            .should('contain', 'opacity: 1');
        });
        it('Testing with pointer at bottom left, transform should be "translateY(0%)", opacity should be "1"', () => {
          cy.mount(
            <MockTilt
              spotGlareEnable={true}
              spotGlarePosition="left"
              spotGlareMaxOpacity={1}
            />
          );
          cy.get('[data-testid="container"]').trigger(
            'mousemove',
            position.bottomLeft
          );
          cy.get('[data-testid="spot-glare"]')
            .should('have.attr', 'style')
            .should('contain', 'transform: translateY(0%)')
            .should('contain', 'opacity: 1');
        });
      });
      describe('Testing "right" position', () => {
        it('Testing with pointer at center, transform should be "translateX(50%) translateY(25%)", opacity should be "0"', () => {
          cy.mount(
            <MockTilt
              spotGlareEnable={true}
              spotGlarePosition="right"
              spotGlareMaxOpacity={1}
            />
          );
          cy.get('[data-testid="container"]').trigger(
            'mousemove',
            position.center
          );
          cy.get('[data-testid="spot-glare"]')
            .should('have.attr', 'style')
            .should('contain', 'transform: translateX(50%) translateY(25%)')
            .should('contain', 'opacity: 0');
        });
        it('Testing with pointer at top right, transform should be "translateX(50%) translateY(50%)", opacity should be "1"', () => {
          cy.mount(
            <MockTilt
              spotGlareEnable={true}
              spotGlarePosition="right"
              spotGlareMaxOpacity={1}
            />
          );
          cy.get('[data-testid="container"]').trigger(
            'mousemove',
            position.topRight
          );
          cy.get('[data-testid="spot-glare"]')
            .should('have.attr', 'style')
            .should('contain', 'transform: translateX(50%) translateY(50%)')
            .should('contain', 'opacity: 1');
        });
        it('Testing with pointer at right, transform should be translateX(50%) translateY(25%)", opacity should be "1"', () => {
          cy.mount(
            <MockTilt
              spotGlareEnable={true}
              spotGlarePosition="right"
              spotGlareMaxOpacity={1}
            />
          );
          cy.get('[data-testid="container"]').trigger(
            'mousemove',
            position.right
          );
          cy.get('[data-testid="spot-glare"]')
            .should('have.attr', 'style')
            .should('contain', 'transform: translateX(50%) translateY(25%)')
            .should('contain', 'opacity: 1');
        });
        it('Testing with pointer at bottom right, transform should be "translateX(50%) translateY(0%)", opacity should be "1"', () => {
          cy.mount(
            <MockTilt
              spotGlareEnable={true}
              spotGlarePosition="right"
              spotGlareMaxOpacity={1}
            />
          );
          cy.get('[data-testid="container"]').trigger(
            'mousemove',
            position.bottomRight
          );
          cy.get('[data-testid="spot-glare"]')
            .should('have.attr', 'style')
            .should('contain', 'transform: translateX(50%) translateY(0%)')
            .should('contain', 'opacity: 1');
        });
      });
    });
    describe('Testing spotGlareReverse', () => {
      it('Testing with pointer at center, transform should be "translateX(25%)"', () => {
        cy.mount(
          <MockTilt
            spotGlareEnable={true}
            spotGlareReverse={true}
            spotGlarePosition="top"
          />
        );
        cy.get('[data-testid="container"]').trigger(
          'mousemove',
          position.center
        );
        cy.get('[data-testid="spot-glare"]')
          .should('have.attr', 'style')
          .should('contain', 'transform: translateX(25%)');
      });
      it('Testing with spotGlarePosition="top" and pointer at top left, transform should be "translateX(0%)"', () => {
        cy.mount(
          <MockTilt
            spotGlareEnable={true}
            spotGlareReverse={true}
            spotGlarePosition="top"
          />
        );
        cy.get('[data-testid="container"]').trigger(
          'mousemove',
          position.topLeft
        );
        cy.get('[data-testid="spot-glare"]')
          .should('have.attr', 'style')
          .should('contain', 'transform: translateX(0%)');
      });
      it('Testing with spotGlarePosition="bottom" and pointer at bottom right, transform should be "translateX(50%) translateY(50%)"', () => {
        cy.mount(
          <MockTilt
            spotGlareEnable={true}
            spotGlareReverse={true}
            spotGlarePosition="bottom"
          />
        );
        cy.get('[data-testid="container"]').trigger(
          'mousemove',
          position.bottomRight
        );
        cy.get('[data-testid="spot-glare"]')
          .should('have.attr', 'style')
          .should('contain', 'transform: translateX(50%) translateY(50%)');
      });
      it('Testing with spotGlarePosition="left" and pointer at bottom left, transform should be "translateY(50%)"', () => {
        cy.mount(
          <MockTilt
            spotGlareEnable={true}
            spotGlareReverse={true}
            spotGlarePosition="left"
          />
        );
        cy.get('[data-testid="container"]').trigger(
          'mousemove',
          position.bottomLeft
        );
        cy.get('[data-testid="spot-glare"]')
          .should('have.attr', 'style')
          .should('contain', 'transform: translateY(50%)');
      });
      it('Testing with spotGlarePosition="right" and pointer at top right, transform should be "translateX(50%)"', () => {
        cy.mount(
          <MockTilt
            spotGlareEnable={true}
            spotGlareReverse={true}
            spotGlarePosition="right"
          />
        );
        cy.get('[data-testid="container"]').trigger(
          'mousemove',
          position.topRight
        );
        cy.get('[data-testid="spot-glare"]')
          .should('have.attr', 'style')
          .should('contain', 'transform: translateX(50%)');
      });
    });
  });
  describe('Testing callback functions', () => {
    it('Testing onTilt() with pointer at top left, "testFunction" should be called and "angleX" should be "20" and "angleY" should be "-20"', () => {
      let angleX: number;
      let angleY: number;
      const test = {
        testFunction: (e: Angle) => {
          angleX = e.angleX;
          angleY = e.angleY;
        },
      };
      cy.spy(test, 'testFunction');
      cy.mount(
        <MockTilt
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          tiltReverse={false}
          onTilt={test.testFunction}
        />
      );
      cy.get('[data-testid="container"]')
        .trigger('mousemove', position.topLeft)
        .then(() => {
          expect(test.testFunction).to.be.called;
          expect(angleX).to.eq(20);
          expect(angleY).to.eq(-20);
        });
    });
    it('Testing onMouseEnter() , "testFunction" should be called and "event.type" should be "mouseenter"', () => {
      let isCorrectEvent = false;
      const test = {
        testFunction: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          if (e.type === 'mouseenter') isCorrectEvent = true;
        },
      };
      cy.spy(test, 'testFunction');
      cy.mount(
        <MockTilt
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          tiltReverse={false}
          onMouseEnter={test.testFunction}
        />
      );
      cy.get('[data-testid="container"]')
        .trigger('mouseover', position.center)
        .then(() => {
          expect(test.testFunction).to.be.called;
          expect(isCorrectEvent).to.be.true;
        });
    });
    it('Testing onMouseMove() , "testFunction" should be called and "event.type" should be "mousemove"', () => {
      let isCorrectEvent = false;
      const test = {
        testFunction: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          if (e.type === 'mousemove') isCorrectEvent = true;
        },
      };
      cy.spy(test, 'testFunction');
      cy.mount(
        <MockTilt
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          tiltReverse={false}
          onMouseMove={test.testFunction}
        />
      );
      cy.get('[data-testid="container"]')
        .trigger('mousemove', position.center)
        .then(() => {
          expect(test.testFunction).to.be.called;
          expect(isCorrectEvent).to.be.true;
        });
    });
    it('Testing onMouseLeave() , "testFunction" should be called and "event.type" should be "mouseleave"', () => {
      let isCorrectEvent = false;
      const test = {
        testFunction: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          if (e.type === 'mouseleave') isCorrectEvent = true;
        },
      };
      cy.spy(test, 'testFunction');
      cy.mount(
        <MockTilt
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          tiltReverse={false}
          onMouseLeave={test.testFunction}
        />
      );
      cy.get('[data-testid="container"]')
        .trigger('mouseout')
        .then(() => {
          expect(test.testFunction).to.be.called;
          expect(isCorrectEvent).to.be.true;
        });
    });
    it('Testing onTouchStart() , "testFunction" should be called and "event.type" should be "touchstart"', () => {
      let isCorrectEvent = false;
      const test = {
        testFunction: (e: React.TouchEvent<HTMLDivElement>) => {
          if (e.type === 'touchstart') isCorrectEvent = true;
        },
      };
      cy.spy(test, 'testFunction');
      cy.mount(
        <MockTilt
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          tiltReverse={false}
          onTouchStart={test.testFunction}
        />
      );
      cy.get('[data-testid="container"]')
        .trigger('touchstart', {
          changedTouches: [{ clientX: 250, clientY: 250 }],
        })
        .then(() => {
          expect(test.testFunction).to.be.called;
          expect(isCorrectEvent).to.be.true;
        });
    });
    it('Testing onTouchMove() , "testFunction" should be called and "event.type" should be "touchmove"', () => {
      let isCorrectEvent = false;
      const test = {
        testFunction: (e: React.TouchEvent<HTMLDivElement>) => {
          if (e.type === 'touchmove') isCorrectEvent = true;
        },
      };
      cy.spy(test, 'testFunction');
      cy.mount(
        <MockTilt
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          tiltReverse={false}
          onTouchMove={test.testFunction}
        />
      );
      cy.get('[data-testid="container"]')
        .trigger('touchmove', {
          changedTouches: [{ clientX: 250, clientY: 250 }],
        })
        .then(() => {
          expect(test.testFunction).to.be.called;
          expect(isCorrectEvent).to.be.true;
        });
    });
    it('Testing onTouchEnd() , "testFunction" should be called and "event.type" should be "touchend"', () => {
      let isCorrectEvent = false;
      const test = {
        testFunction: (e: React.TouchEvent<HTMLDivElement>) => {
          if (e.type === 'touchend') isCorrectEvent = true;
        },
      };
      cy.spy(test, 'testFunction');
      cy.mount(
        <MockTilt
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          tiltReverse={false}
          onTouchEnd={test.testFunction}
        />
      );
      cy.get('[data-testid="container"]')
        .trigger('touchend', {
          changedTouches: [{ clientX: 250, clientY: 250 }],
        })
        .then(() => {
          expect(test.testFunction).to.be.called;
          expect(isCorrectEvent).to.be.true;
        });
    });
    it('Testing onBlur() , "testFunction" should be called', () => {
      let isCorrectEvent = false;
      const test = {
        testFunction: (e: React.FocusEvent<HTMLDivElement, Element>) => {
          if (e.type === 'blur') isCorrectEvent = true;
        },
      };
      cy.spy(test, 'testFunction');
      cy.mount(
        <MockTilt
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          tiltReverse={false}
          onBlur={test.testFunction}
        />
      );
      cy.get('[data-testid="container"]')
        .trigger('focusout')
        .then(() => {
          expect(test.testFunction).to.be.called;
          expect(isCorrectEvent).to.be.true;
        });
    });
  });
  describe('Testing ref object', () => {
    it('Testing ref.element, should not be undefined', () => {
      const ref = createRef<TiltRef>();
      cy.mount(<MockTilt ref={ref} tiltMaxAngleX={20} tiltMaxAngleY={20} />);
      cy.get('[data-testid="container"]').then(() => {
        expect(ref.current).not.to.be.null;
        if (ref.current) {
          expect(ref.current.element).not.to.be.undefined;
        }
      });
    });
    it('Testing ref.tilt() with "{angleX:20, angleY:-20}, transform should contain "rotateX(20deg)" and "rotateY(-20deg)"', () => {
      const ref = createRef<TiltRef>();
      cy.mount(<MockTilt ref={ref} tiltMaxAngleX={20} tiltMaxAngleY={20} />);
      cy.get('[data-testid="container"]').then(() => {
        expect(ref.current).not.to.be.null;
        if (ref.current) {
          ref.current.tilt({ angleX: 20, angleY: -20 });
          cy.get('[data-testid="tilt"]')
            .should('have.attr', 'style')
            .should('contain', 'rotateX(20deg)')
            .should('contain', 'rotateY(-20deg)');
        }
      });
    });
    it('Testing ref.angle() after ref.tilt() with "{angleX:20, angleY:-20}, transform should be "{angleX:20, angleY:-20}"', () => {
      const ref = createRef<TiltRef>();
      cy.mount(<MockTilt ref={ref} tiltMaxAngleX={20} tiltMaxAngleY={20} />);
      cy.get('[data-testid="container"]').then(() => {
        expect(ref.current).not.to.be.null;
        if (ref.current) {
          ref.current.tilt({ angleX: 20, angleY: -20 });
          expect(ref.current.angle()).to.deep.eq({ angleX: 20, angleY: -20 });
          cy.get('[data-testid="tilt"]')
            .should('have.attr', 'style')
            .should('contain', 'rotateX(0deg)')
            .should('contain', 'rotateY(0deg)');
        }
      });
    });
    it('Testing ref.reset() after ref.tilt() with "{angleX:20, angleY:-20}, transform should contain "rotateX(0deg)" and "rotateY(0deg)"', () => {
      const ref = createRef<TiltRef>();
      cy.mount(<MockTilt ref={ref} tiltMaxAngleX={20} tiltMaxAngleY={20} />);
      cy.get('[data-testid="container"]').then(() => {
        expect(ref.current).not.to.be.null;
        if (ref.current) {
          ref.current.tilt({ angleX: 20, angleY: -20 });
          ref.current.reset();
          cy.get('[data-testid="tilt"]')
            .should('have.attr', 'style')
            .should('contain', 'rotateX(0deg)')
            .should('contain', 'rotateY(0deg)');
        }
      });
    });
  });
});
