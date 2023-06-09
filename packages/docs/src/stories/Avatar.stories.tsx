import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarProps, Card } from '@progamo-ui/react';

export default {
	title: 'Data display/Avatar',
	component: Avatar,
	argTypes: {
		size: {
			options: ['small', 'medium', 'large'],
			control: { type: 'inline-radio' },
		},
		src: {
			control: { type: 'text' },
		},
		alt: {
			control: { type: 'text' },
		},
	},
	args: {
		src: 'https://xsgames.co/randomusers/avatar.php?g=male',
		alt: 'John Doe',
		size: 'medium',
	},
	tags: ['autodocs'],
	decorators: [
		(Story) => {
			return <Card css={{ display: 'flex', gap: '$2' }}>{Story()}</Card>;
		},
	],
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
	args: {
		src: undefined,
		size: 'small',
	},
};
