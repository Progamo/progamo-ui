import type { Meta, StoryObj } from '@storybook/react';
import { Card, IconiFy, IconiFyProps } from '@progamo-ui/react';

export default {
	title: 'Data display/Icon',
	component: IconiFy,
	argTypes: {
		size: {
			options: ['small', 'medium', 'large', 'xlarge'],
			control: { type: 'inline-radio' },
		},
		color: {
			options: ['primary', 'secondary', 'tertiary',],
			control: { type: 'inline-radio' },
		},
	},
	args: {
		size: 'medium',
		color: 'secondary',
	},
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				story: 'Você pode usar o componente Icon para renderizar qualquer ícone da biblioteca [Iconify](https://iconify.design/). para isso, basta passar o nome do ícone como valor da prop `icon` (ex: `ph:user`), que pode ser pesquisado [aqui](https://iconify.design/icon-sets)',
			},
		},
	},
	decorators: [
		(Story) => {
			return <Card>{Story()}</Card>;
		},
	],
} as Meta<IconiFyProps>;

export const Primary: StoryObj<IconiFyProps> = {
	args: {
		icon: 'ph:user',
	},
};
