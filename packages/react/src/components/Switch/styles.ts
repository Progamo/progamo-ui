import * as Switch from '@radix-ui/react-switch';
import { keyframes, styled } from '../../styles';

export const SwitchLabel = styled('label', {
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

export const SwitchContainer = styled(Switch.Root, {
	all: 'unset',
	width: '36px',
	height: '$6',
	backgroundColor: '$gray900',
	borderRadius: '$full',
	lineHeight: 0,
	cursor: 'pointer',
	overflow: 'hidden',
	boxSizing: 'border-box',
	display: 'flex',
	alignItems: 'center',
	border: '2px solid $gray700',
	transition: 'all 0.2s ease-in-out',

	'&[data-state="checked"]': {
		backgroundColor: '$primary500',
	},
	'&:focus, &[data-state="checked"]': {
		border: '2px solid $primary500',
	},
});

const slideIn = keyframes({
	from: {
		transform: 'translateX(-100%)',
	},
	to: {
		transform: 'translateX(0)',
	},
});

export const SwitchThumb = styled(Switch.Thumb, {
	all: 'unset',
	width: '$4',
	height: '$4',
	backgroundColor: '$gray100',
	borderRadius: '$full',
	transition: 'all 0.2s ease-in-out',
	animation: `${slideIn} 200ms ease-out`,

	willChange: 'transform',
	'&[data-state="checked"]': {
		transform: 'translateX(100%)',
	},
	'&[data-state="unchecked"]': {
		transform: 'translateX(0)',
	},
	'&[data-state="disabled"]': {
		backgroundColor: '$gray500',
	},
});

export const CSwitchThumb = styled(Switch.SwitchThumb, {
	all: 'unset',
	width: '$4',
	height: '$4',
	backgroundColor: '$gray100',
	borderRadius: '$full',
	transition: 'all 0.2s ease-in-out',

	willChange: 'transform',
	'&[data-state="checked"]': {
		transform: 'translateX(100%)',
	},
	'&[data-state="unchecked"]': {
		transform: 'translateX(0)',
	},
	'&[data-state="disabled"]': {
		backgroundColor: '$gray500',
	},
});
