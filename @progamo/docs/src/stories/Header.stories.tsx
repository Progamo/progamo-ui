import type { Meta, StoryObj } from '@storybook/react';
import { Card, Header, HeaderProps } from '@progamo-ui/react';

export default {
	title: 'Typography/Header',
	component: Header,
	args: {
		children: 'Custom Header',
	},
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				story: 'Pro padrão, o componente Header renderiza um elemento `h2`. Você pode alterar isso usando a prop `as`.',
			},
		},
	},
	decorators: [
		(Story) => {
			return <Card css={{ display: 'flex', gap: '$2' }}>{Story()}</Card>;
		},
	],
} as Meta<HeaderProps>;

export const Primary: StoryObj<HeaderProps> = {};

export const CustomTag: StoryObj<HeaderProps> = {
	args: {
		children: 'H1 Header',
		as: 'h1',
	},
};
