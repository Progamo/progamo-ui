import * as Avatar from '@radix-ui/react-avatar';
import { styled } from '../../styles';

export const AvatarContainer = styled(Avatar.Root, {
	borderRadius: '$full',
	display: 'inline-block',

	overflow: 'hidden',

	transition: 'all 0.2s ease-in-out',

	variants: {
		size: {
			small: {
				width: '$12',
				height: '$12',
			},
			medium: {
				width: '$16',
				height: '$16',
			},
			large: {
				width: '$20',
				height: '$20',
			},
		},
	},

	defaultVariants: {
		size: 'small',
	},
});

export const AvatarImage = styled(Avatar.Image, {
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	borderRadius: 'inherit',
});

export const AvatarFallback = styled(Avatar.Fallback, {
	width: '100%',
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: '$gray600',
	color: '$gray100',

	borderRadius: 'inherit',

	svg: { color: '$gray300' },
});
