import { ComponentProps, ElementType } from 'react';
import { styled } from '../styles';

export const Label = styled('label', {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '$2',

	fontFamily: '$default',
	margin: 0,
	color: '$gray100',

	transition: 'all 0.2s ease-in-out',

	defaultVariants: {
		size: 'xs',
	},
});

export interface LabelProps extends ComponentProps<typeof Label> {
	as?: ElementType;
}

Label.displayName = 'Label';
