import { ComponentProps } from 'react';
import { styled } from '../styles';

export const TextArea = styled('textarea', {
	backgroundColor: '$gray900',
	padding: '$3 $4',
	borderRadius: '$sm',
	boxSizing: 'border-box',
	border: '2px solid $gray900',

	fontFamily: '$default',
	fontSize: '$sm',
	color: '$white',
	fontWeight: '$regular',
	resize: 'vertical',
	minHeight: 80,

	transition: 'all 0.2s ease-in-out',

	'&:focus': {
		outline: 0,
		borderColor: '$primary500',
	},

	'&:hover': {
		outline: 0,
		borderColor: '$primary500',
	},

	'&:disabled': {
		opacity: 0.5,
		cursor: 'not-allowed',
	},

	'&:placeholder': {
		color: '$gray400',
	},
});

// eslint-disable-next-line prettier/prettier
export interface TextAreaProps extends ComponentProps<typeof TextArea> { }

TextArea.displayName = 'TextArea';
