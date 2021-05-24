import React, { useMemo } from 'react'
import { StyleSheet, View, Text } from 'react-native'

type TProps = {
	children: React.ReactNode
	label: string
	message?: string
	messageType?: 'error' | 'success'
}

export const FieldWrapper = ({ children, label, message, messageType }: TProps) => {
	const messageStyle = useMemo(
		() => [
			styles.messageText,
			messageType === 'error' && styles.messageError,
			messageType === 'success' && styles.messageSuccess,
		],
		[messageType],
	)

	return (
		<View style={styles.container}>
			<Text style={styles.labelText}>{label}</Text>
			{children}
			<Text style={messageStyle}>{message}</Text>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		marginBottom: 20,
	},
	labelText: {
		color: 'grey',
		fontSize: 18,
		marginBottom: 10,
	},
	messageText: {
		color: 'grey',
		fontSize: 13,
		marginTop: 5,
	},
	messageSuccess: {
		color: 'green',
	},
	messageError: {
		color: 'red',
	},
})
