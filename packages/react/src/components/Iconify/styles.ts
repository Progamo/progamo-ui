import { Icon } from '@iconify/react';
import { styled } from '../../styles';

export const Iconify = styled(Icon, {
	width: '5em',
	height: '5em',

	transition: 'all 0.2s ease-in-out',

	variants: {
		size: {
			small: {
				height: '$8',
				width: '$8',
			},
			medium: {
				height: '$12',
				width: '$12',
			},
			large: {
				height: '$16',
				width: '$16',
			},
			xlarge: {
				height: '$20',
				width: '$20',
			},
		},
		color: {
			primary: { color: '$white' },
			secondary: { color: '$secondary500' },
			tertiary: { color: '$gray800' },
		},
	},

	defaultVariants: {
		size: 'small',
		color: 'primary',
	},
});
