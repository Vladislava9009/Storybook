import React from 'react'
import { View, StyleSheet, TextInput, TextInputProps } from 'react-native'
import { FieldWrapper } from '../field-wrapper'

type TProps = TextInputProps & {
	label: string
	massage?: string
	messageType?: 'error' | 'success'
}

const TextInputField = (props: TProps) => {
	return (
		<FieldWrapper {...props}>
			<TextInput style={styles.textInput} {...props} />
			<View style={styles.border} />
		</FieldWrapper>
	)
}

export default TextInputField

const styles = StyleSheet.create({
	textInput: {
		fontSize: 14,
		fontWeight: '500',
		paddingBottom: 10,
	},
	border: {
		height: 1,
		backgroundColor: 'grey',
	},
})
