import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps, Card, IconiFy } from '@progamo-ui/react';

export default {
	title: 'Form/Button',
	component: Button,
	args: {
		children: 'Send',
		variant: 'primary',
		size: 'small',
	},
	argTypes: {
		children: { control: { type: null } },
		variant: {
			options: ['primary', 'secondary', 'tertiary'],
			control: { type: 'inline-radio' },
			onClick: { action: 'click' },
		},
		size: {
			options: ['small', 'medium', 'large'],
			control: { type: 'inline-radio' },
		},

		disabled: {
			control: { type: 'boolean' },
		},
	},
	tags: ['autodocs'],
	decorators: [
		(Story) => {
			return <Card css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}>{Story()}</Card>;
		},
	],
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
	args: {
		children: 'Create new',
		variant: 'secondary',
	},
};

export const Tertiary: StoryObj<ButtonProps> = {
	args: {
		children: 'Cancel',
		variant: 'tertiary',
	},
};

export const Small: StoryObj<ButtonProps> = {
	args: {
		children: 'Send',
		size: 'small',
	},
};

export const Medium: StoryObj<ButtonProps> = {
	args: {
		children: 'Send',
		size: 'medium',
	},
};

export const Large: StoryObj<ButtonProps> = {
	args: {
		children: 'Send',
		size: 'large',
	},
};

export const WithIcon: StoryObj<ButtonProps> = {
	args: {
		children: (
			<>
				<IconiFy icon="ph:arrow-right-bold" />
				TEXT
				<IconiFy icon="ph:arrow-left-bold" />
			</>
		),
	},
};

export const Disabled: StoryObj<ButtonProps> = {
	args: {
		children: 'Send',
		variant: 'primary',
		disabled: true,
	},
};


