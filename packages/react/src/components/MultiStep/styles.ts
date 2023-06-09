import { styled } from '../../styles';
import { Text } from '../Text';

export const MultiStepContainer = styled('div', {});

export const Label = styled(Text, {
	color: '$gray200',

	transition: 'all 0.2s ease-in-out',

	defaultVariants: {
		size: 'xs',
	},
});

export const Steps = styled('div', {
	display: 'grid',
	gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
	gap: '$2',
	marginTop: '$1',
	transition: 'all 0.2s ease-in-out',
});

export const StepContent = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	transition: 'all 0.2s ease-in-out',
});

export const Step = styled('div', {
	height: '$1',
	borderRadius: '$full',
	backgroundColor: '$gray600',

	transition: 'all 0.2s ease-in-out',

	variants: {
		active: {
			true: {
				backgroundColor: '$gray100',
			},
		},
		success: {
			true: {
				backgroundColor: '$primary500',
			},
		},
	},

	defaultVariants: {
		active: false,
		success: false,
	},
});
