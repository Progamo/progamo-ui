import { ComponentProps } from 'react';
import { SwitchContainer, SwitchLabel, SwitchThumb } from './styles';

export type SwitchProps = ComponentProps<typeof SwitchContainer>;

export function Switch({ ...props }: SwitchProps) {
	return (
		<SwitchLabel as="label">
			<SwitchContainer {...props}>
				<SwitchThumb />
			</SwitchContainer>
		</SwitchLabel>
	);
}
