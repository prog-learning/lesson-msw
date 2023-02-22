import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Books } from './Books';
import { getBookHandler } from '../mocks/handlers';

export default {
  title: 'Books',
  component: Books,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    msw: {
      handlers: [getBookHandler],
    },
  },
} as ComponentMeta<typeof Books>;

export const Default: ComponentStoryObj<typeof Books> = {};
