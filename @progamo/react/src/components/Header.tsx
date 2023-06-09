import { ComponentProps, ElementType } from 'react';
import { styled } from '../styles';

export const Header = styled('h2', {
	fontFamily: '$default',
	lineHeight: '$shorter',
	margin: 0,
	color: '$gray100',

	variants: {
		size: {
			small: { fontSize: '$xl' },
			median: { fontSize: '$2xl' },
			large: { fontSize: '$4xl' },
			'2xl': { fontSize: '$5xl' },
			'3xl': { fontSize: '$6xl' },
			'4xl': { fontSize: '$7xl' },
			'5xl': { fontSize: '$8xl' },
			'6xl': { fontSize: '$9xl' },
		},
	},

	defaultVariants: {
		size: 'median',
	},
});

export interface HeaderProps extends ComponentProps<typeof Header> {
	as?: ElementType;
}

Header.displayName = 'Header';
