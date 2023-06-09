import type { Meta, StoryObj } from '@storybook/react';
import { Card, Switch, SwitchProps, Text } from '@progamo-ui/react';

export default {
	title: 'Form/Switch',
	component: Switch,
	args: {},
	argTypes: {
		checked: {
			control: 'boolean',
		},
	},
	tags: ['autodocs'],
	decorators: [
		(Story) => {
			return (
				<Card css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}>
					{Story()}
					<Text>ON/OFF</Text>
				</Card>
			);
		},
	],
} as Meta<SwitchProps>;

export const Primary: StoryObj<SwitchProps> = {};
