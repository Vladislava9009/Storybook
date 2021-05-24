import React from 'react'
import { Switch, SwitchProps } from 'react-native'
import { FieldWrapper } from '../field-wrapper'

type TProps = SwitchProps & {
	label: string
	massage?: string
	messageType?: 'error' | 'success'
}

const SwitchField = (props: TProps) => {
	return (
		<FieldWrapper {...props}>
			<Switch {...props} />
		</FieldWrapper>
	)
}

export default SwitchField
