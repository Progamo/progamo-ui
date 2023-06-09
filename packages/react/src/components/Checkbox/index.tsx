import { ComponentProps } from 'react';
import { CheckboxContainer, CheckboxIndicator, CheckboxLabel } from './styles';
import { Icon } from '@iconify/react';

export interface CheckboxProps extends ComponentProps<typeof CheckboxContainer> {
	label?: any;
}

export function Checkbox({ label, ...props }: CheckboxProps) {
	return (
		<CheckboxLabel as="label">
			<CheckboxContainer {...props}>
				<CheckboxIndicator asChild>
					<Icon icon="ph:check" />
				</CheckboxIndicator>
			</CheckboxContainer>
			{label}
		</CheckboxLabel>
	);
}

Checkbox.displayName = 'Checkbox';
