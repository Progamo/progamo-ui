import type { Meta, StoryObj } from '@storybook/react';
import { Card, TextInput, TextInputProps } from '@progamo-ui/react';

export default {
	title: 'Form/Text Input',
	component: TextInput,
	args: {},
	tags: ['autodocs'],
	decorators: [
		(Story) => {
			return (
				<Card css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
					{Story()}
				</Card>
			);
		},
	],
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
	args: {
		placeholder: 'type_your_name',
	},
};

export const Disabled: StoryObj<TextInputProps> = {
	args: {
		disabled: true,
		placeholder: 'type_your_name',
	},
};

export const WithPrefix: StoryObj<TextInputProps> = {
	args: {
		prefix: 'cal.com/',
		placeholder: 'type_your_name',
	},
};

export const WithLabel: StoryObj<TextInputProps> = {
	args: {
		label: 'Email address',
		prefix: 'cal.com/',
		placeholder: 'type_your_name',
	},
};

export const WithSuffix: StoryObj<TextInputProps> = {
	args: {
		label: 'Email address',
		suffix: '@example.com.br',
		placeholder: 'type_your_name',
	},
};

