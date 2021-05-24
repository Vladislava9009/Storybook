import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

type TProps = {
	onPress: () => void
	children: React.ReactNode
	outline?: boolean
}

export const Button = ({ onPress, children, outline = false }: TProps) => {
	const containerStyle = [styles.container, outline && styles.containerOutline]
	const textStyle = [styles.text, outline && styles.textOutline]

	return (
		<TouchableOpacity onPress={onPress} style={containerStyle}>
			<Text style={textStyle}>{children}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'blue',
		paddingVertical: 14,
		borderRadius: 6,
		borderWidth: 1,
		borderColor: 'blue',
		marginVertical: 7,
	},
	containerOutline: {
		backgroundColor: 'transparent',
	},
	text: {
		color: '#ffffff',
		alignSelf: 'center',
		fontSize: 18,
		fontWeight: '500',
	},
	textOutline: {
		color: 'blue',
	},
})
