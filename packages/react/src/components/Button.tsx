import { ComponentProps, ElementType } from 'react';
import { styled } from '../styles';
import { IconiFy } from './Iconify';

export const Button = styled('button', {
	all: 'unset',
	borderRadius: '$sm',
	fontSize: '$sm',
	fontWeight: '$medium',
	fontFamily: '$default',
	textAlign: 'center',
	boxSizing: 'border-box',
	padding: '0 $4',

	transition: 'all 0.2s ease-in-out',

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '$2',

	cursor: 'pointer',

	svg: {
		width: '$4',
		height: '$4',
	},

	'&:disabled': {
		cursor: 'not-allowed',
	},

	'&:focus': {
		boxShadow: '0 0 2 2px $colors$gray100',
	},

	variants: {
		variant: {
			primary: {
				color: '$white',
				background: '$primary500',
				border: '2px solid transparent',

				[`& ${IconiFy}`]: { color: '$white' },
				'&:disabled': { color: '$gray400', backgroundColor: '$primary900' },

				'&:not(:disabled):hover': { background: '$primary700', boxShadow: '$shadows$6' },
			},

			secondary: {
				color: '$primary500',
				border: '2px solid $primary500',

				[`& ${IconiFy}`]: { color: '$primary500' },

				'&:not(:disabled):hover': {
					borderColor: '$primary700',
					color: '$primary700',
					[`& ${IconiFy}`]: { color: '$primary700' },
				},
				'&:disabled': { color: '$gray400', backgroundColor: '$primary900', borderColor: 'transparent' },
			},

			tertiary: {
				color: '$primary500',
				[`& ${IconiFy}`]: { color: '$primary700' },
				border: '2px solid transparent',

				'&:not(:disabled):hover': { background: '$primary100', color: '$primary700', [`& ${IconiFy}`]: { color: '$primary700' } },
				'&:disabled': { color: '$gray400', backgroundColor: '$primary900', borderColor: 'transparent' },
			},
		},

		size: {
			small: { height: 36 },
			medium: { height: 42 },
			large: { height: 54 },
		},
	},

	defaultVariants: {
		variant: 'primary',
		size: 'small',
	},
});

export interface ButtonProps extends ComponentProps<typeof Button> {
	as?: ElementType;
}

Button.displayName = 'Button';
