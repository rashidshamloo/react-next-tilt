import type { Meta, StoryObj } from '@storybook/react';
import { Tilt } from '../lib/index';

const testImage = './test.webp';

const Image = () => (
  <img
    src={testImage}
    alt="Test"
    style={{
      display: 'block',
      verticalAlign: 'middle',
      width: '100%',
      height: '100%',
      objectFit: 'fill',
      borderRadius: 'inherit',
      outline: '3px solid #00ff01',
      outlineOffset: '-3px',
    }}
  />
);

const meta: Meta<typeof Tilt> = {
  title: 'Tilt (react-next-tilt)',
  component: Tilt,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#333' }],
    },
    actions: { argTypesRegex: 'onTilt' },
    docs: {
      source: { language: 'tsx' },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: { table: { disable: true } },
    onMouseEnter: { table: { disable: true } },
    onMouseMove: { table: { disable: true } },
    onMouseLeave: { table: { disable: true } },
    onTouchStart: { table: { disable: true } },
    onTouchMove: { table: { disable: true } },
    onTouchEnd: { table: { disable: true } },
    onBlur: { table: { disable: true } },
    width: { control: { type: 'number' } },
    height: { control: { type: 'number' } },
    lineGlareColor: { control: { type: 'color' } },
    spotGlareColor: { control: { type: 'color' } },
    lineGlareWidthPercent: {
      control: { type: 'range', min: 0, max: 50, step: 1 },
    },
    tiltMaxAngleX: {
      control: { type: 'range', min: 0, max: 90, step: 1 },
    },
    tiltMaxAngleY: {
      control: { type: 'range', min: 0, max: 90, step: 1 },
    },
    gyroMaxAngleX: {
      control: { type: 'range', min: 0, max: 90, step: 1 },
    },
    gyroMaxAngleY: {
      control: { type: 'range', min: 0, max: 90, step: 1 },
    },
    disableScrollOnTouch: { control: { type: 'boolean' } },
    lineGlareMaxOpacity: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
    },
    spotGlareMaxOpacity: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tilt>;

export const Default: Story = {
  args: {
    children: <Image />,
  },
};

export const BorderRadius: Story = {
  parameters: {
    controls: {
      include: 'borderRadius',
    },
  },
  args: {
    children: <Image />,
    borderRadius: '50%',
  },
};

export const Scale: Story = {
  parameters: { controls: { include: 'scale' } },
  args: {
    children: <Image />,
    scale: 1.1,
  },
};

export const TiltReset: Story = {
  parameters: { controls: { include: 'tiltReset' } },
  args: {
    children: <Image />,
    tiltReset: false,
  },
};

export const TiltReverse: Story = {
  parameters: { controls: { include: 'tiltReverse' } },
  args: {
    children: <Image />,
    tiltReverse: true,
  },
};

export const TiltMaxAngle: Story = {
  parameters: { controls: { include: ['tiltMaxAngleX', 'tiltMaxAngleY'] } },
  args: {
    children: <Image />,
    tiltMaxAngleX: 40,
    tiltMaxAngleY: 40,
  },
};

export const InitialAngle: Story = {
  parameters: {
    controls: {
      include: [
        'tiltMaxAngleX',
        'tiltMaxAngleY',
        'initialAngleX',
        'initialAngleY',
      ],
    },
  },
  args: {
    children: <Image />,
    initialAngleX: 20,
    initialAngleY: 20,
  },
};

export const LineGlare: Story = {
  parameters: {
    controls: {
      include: [
        'lineGlareEnable',
        'lineGlareWidthPercent',
        'lineGlareMaxOpacity',
        'lineGlareBlurEnable',
        'lineGlareBlurAmount',
        'lineGlareColor',
        'lineGlareDirection',
        'lineGlareHoverPosition',
        'lineGlareReverse',
        'lineGlareMixBlendMode',
      ],
    },
  },
  args: {
    children: <Image />,
    spotGlareEnable: false,
    lineGlareEnable: true,
    lineGlareWidthPercent: 10,
    lineGlareMaxOpacity: 0.3,
    lineGlareBlurEnable: true,
    lineGlareBlurAmount: '4px',
    lineGlareColor: 'white',
    lineGlareDirection: 'to-bottom-right',
    lineGlareHoverPosition: 'top-left',
    lineGlareReverse: false,
    lineGlareMixBlendMode: 'normal',
  },
};

export const SpotGlare: Story = {
  parameters: {
    controls: {
      include: [
        'spotGlareEnable',
        'spotGlareMaxOpacity',
        'spotGlareColor',
        'spotGlarePosition',
        'spotGlareReverse',
        'spotGlareMixBlendMode',
      ],
    },
  },
  args: {
    children: <Image />,
    lineGlareEnable: false,
    spotGlareEnable: true,
    spotGlareMaxOpacity: 0.5,
    spotGlareColor: 'white',
    spotGlarePosition: 'top',
    spotGlareReverse: false,
    spotGlareMixBlendMode: 'normal',
  },
};

export const Perspective: Story = {
  parameters: { controls: { include: 'perspective' } },
  args: {
    children: <Image />,
    perspective: '500px',
  },
};

export const Disabled: Story = {
  parameters: { controls: { include: 'disabled' } },
  args: {
    children: <Image />,
    disabled: true,
    disabledFilter: 'grayscale(1) brightness(125%)',
  },
};

export const FullPageListening: Story = {
  parameters: { controls: { include: 'fullPageListening' } },
  args: {
    children: <Image />,
    fullPageListening: true,
  },
};

export const Gyroscope: Story = {
  parameters: { controls: { include: 'gyroMaxAngle' } },
  args: {
    children: <Image />,
    gyroMaxAngleX: 20,
    gyroMaxAngleY: 20,
  },
};

export const GyroReverse: Story = {
  parameters: { controls: { include: 'gyroReverse' } },
  args: {
    children: <Image />,
    gyroReverse: true,
    gyroMaxAngleX: 20,
    gyroMaxAngleY: 20,
  },
};

export const GyroMaxAngle: Story = {
  parameters: { controls: { include: ['gyroMaxAngleX', 'gyroMaxAngleY'] } },
  args: {
    children: <Image />,
    gyroMaxAngleX: 40,
    gyroMaxAngleY: 40,
  },
};
