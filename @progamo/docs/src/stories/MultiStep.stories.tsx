import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card, MultiStep, MultiStepProps } from '@progamo-ui/react';

export default {
	title: 'Form/Multi Step',
	component: MultiStep,
	args: {
		size: 4,
		currentStep: 1,
	},
	tags: ['autodocs'],
	decorators: [
		(Story) => {
			return <Card css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>{Story()}</Card>;
		},
	],
} as Meta<MultiStepProps>;

export const Primary: StoryObj<MultiStepProps> = {
	args: {},
};

export const Full: StoryObj<MultiStepProps> = {
	args: {
		currentStep: 4,
	},
};
