import { ComponentProps } from 'react';
import { AvatarContainer, AvatarImage, AvatarFallback } from './styles';
import { IconiFy } from '../Iconify';

export type AvatarProps = ComponentProps<typeof AvatarContainer> & ComponentProps<typeof AvatarImage>;

export function Avatar({ size, ...props }: AvatarProps) {
	return (
		<AvatarContainer size={size}>
			<AvatarImage {...props} />

			<AvatarFallback delayMs={600}>
				<IconiFy size={size} icon="ph:user" />
			</AvatarFallback>
		</AvatarContainer>
	);
}

Avatar.displayName = 'Avatar';
