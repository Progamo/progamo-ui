import { ComponentProps, ElementRef, forwardRef } from 'react';
import { Iconify } from './styles';

// eslint-disable-next-line prettier/prettier
export interface IconiFyProps extends ComponentProps<typeof Iconify> { }

export const IconiFy = forwardRef<ElementRef<typeof Iconify>, Omit<IconiFyProps, 'ref'>>(({ ...props }: IconiFyProps) => {
	return (
		<>
			<Iconify {...props} />
		</>
	);
});

IconiFy.displayName = 'IconiFy';
