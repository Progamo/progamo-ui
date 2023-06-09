import type { Meta, StoryObj } from '@storybook/react';
import { Card, Text, TextProps } from '@progamo-ui/react';

export default {
	title: 'Typography/Text',
	component: Text,
	args: {
		children:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro reprehenderit est veniam? Rem recusandae sint perspiciatis debitis corrupti. Deserunt neque exercitationem illo voluptatum laudantium culpa suscipit accusantium blanditiis voluptas numquam.',
	},
	tags: ['autodocs'],
	decorators: [
		(Story) => {
			return <Card>{Story()}</Card>;
		},
	],
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
	args: {
		children: 'Strong text',
		as: 'strong',
	},
};
