import type { Meta, StoryObj } from '@storybook/react';
import { Card, Text, TextArea, TextAreaProps } from '@progamo-ui/react';

export default {
	title: 'Form/Text Area',
	component: TextArea,
	args: {},
	tags: ['autodocs'],
	decorators: [
		(Story) => {
			return (
				<Card as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
					<Text size="sm">Observations</Text>
					{Story()}
				</Card>
			);
		},
	],

} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {
	args: {
		placeholder: 'Add any observations...',
	},
};

export const Disabled: StoryObj<TextAreaProps> = {
	args: {
		disabled: true,
	},
};
