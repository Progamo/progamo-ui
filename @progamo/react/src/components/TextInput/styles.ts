import { styled } from '../../styles';

export const TextInputWrapper = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	width: '100%',

	'&:not(:last-child)': {
		marginBottom: '$1',
	},
});

export const TextInputContainer = styled('div', {
	backgroundColor: '$gray900',
	borderRadius: '$sm',
	boxSizing: 'border-box',
	border: '2px solid $gray900',
	display: 'flex',
	alignItems: 'center',

	transition: 'all 0.2s ease-in-out',
	cursor: 'text',

	variants: {
		size: {
			small: { padding: '$2 $3' },
			medium: { padding: '$3 $4' },
		},
	},

	'&:hover': {
		borderColor: '$primary500',
	},

	'&:has(input:focus)': {
		borderColor: '$primary500',
	},

	'&:has(input:disabled)': {
		opacity: 0.5,
		cursor: 'not-allowed',
	},

	defaultVariants: {
		size: 'medium',
	},
});

export const Label = styled('label', {
	fontFamily: '$default',
	fontSize: '$sm',
	lineHeight: '$base',
	margin: 0,
	color: '$gray100',

	'&:not(:last-child)': {
		marginBottom: '$2',
	},
});

export const Prefix = styled('span', {
	fontFamily: '$default',
	fontSize: '$sm',
	color: '$gray400',
	fontWeight: 'regular',
});

export const Input = styled('input', {
	fontFamily: '$default',
	fontSize: '$sm',
	color: '$white',
	fontWeight: 'regular',
	background: 'transparent',
	border: 0,
	width: '100%',

	'&:focus': {
		outline: 0,
	},

	'&:disabled': {
		cursor: 'not-allowed',
	},

	'&::placeholder': {
		color: '$gray400',
	},
});

export const Suffix = styled('span', {
	fontFamily: '$default',
	fontSize: '$sm',
	color: '$gray400',
	fontWeight: 'regular',
});

export const Error = styled('span', {
	fontFamily: '$default',
	fontSize: '$sm',
	color: '$red500',
	fontWeight: 'regular',
});
