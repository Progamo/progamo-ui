import * as Checkbox from '@radix-ui/react-checkbox';
import { styled, keyframes } from '../../styles';
import { Text } from '../Text';

export const CheckboxLabel = styled(Text, {
	fontFamily: '$default',
	fontSize: '$md',
	fontWeight: '$regular',
	lineHeight: '$md',
	margin: 0,
	color: '$gray100',

	userSelect: 'none',
	cursor: 'pointer',

	display: 'flex',
	alignItems: 'center',

	gap: '$2',
});

export const CheckboxContainer = styled(Checkbox.Root, {
	all: 'unset',
	width: '$6',
	height: '$6',
	backgroundColor: '$gray900',
	borderRadius: '$xs',
	lineHeight: 0,
	cursor: 'pointer',
	overflow: 'hidden',
	boxSizing: 'border-box',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	border: '2px solid $gray700',

	transition: 'all 0.2s ease-in-out',

	'&[data-state="checked"]': {
		backgroundColor: '$primary500',
	},

	'&:hover': {
		border: '2px solid $primary500',
	},

	'&:focus, &[data-state="checked"]': {
		border: '2px solid $primary500',
	},
});

const slideIn = keyframes({
	from: {
		transform: 'translateY(-100%)',
	},
	to: {
		transform: 'translateY(0)',
	},
});

const slideOut = keyframes({
	from: {
		transform: 'translateY(0)',
	},
	to: {
		transform: 'translateY(-100%)',
	},
});

export const CheckboxIndicator = styled(Checkbox.Indicator, {
	color: '$white',
	width: '$4',
	height: '$4',
	transition: 'all 0.2s ease-in-out',

	'&[data-state="checked"]': {
		animation: `${slideIn} 200ms ease-out`,
	},

	'&[data-state="unchecked"]': {
		animation: `${slideOut} 200ms ease-out`,
	},
});
