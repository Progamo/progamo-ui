import { ComponentProps, forwardRef, ElementRef } from 'react';
import { Input, Label, Prefix, TextInputContainer, TextInputWrapper } from './styles';

export interface TextInputProps extends ComponentProps<typeof Input> {
	prefix?: string;
	suffix?: string;
	label: string;
}

export const TextInput = forwardRef<ElementRef<typeof Input>, Omit<TextInputProps, 'children'>>(
	({ prefix, suffix, label, ...props }: TextInputProps, ref) => {
		return (
			<TextInputWrapper>
				{!!label && <Label>{label}</Label>}
				<TextInputContainer>
					{!!prefix && <Prefix>{prefix}</Prefix>}
					<Input ref={ref} {...props} />
					{!!suffix && <Prefix>{suffix}</Prefix>}
				</TextInputContainer>
			</TextInputWrapper>
		);
	},
);

TextInput.displayName = 'TextInput';
