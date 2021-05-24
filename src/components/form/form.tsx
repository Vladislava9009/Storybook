import { color } from '@storybook/addon-knobs'
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

type TProps = {
	children: React.ReactNode
	header?: string
	subheader?: string
}

export const Form = ({ children, header, subheader }: TProps) => {
	return (
		<View style={styles.container}>
			{(header || subheader) && (
				<View style={styles.topRow}>
                    {header && <Text style={styles.headerText}>{header}</Text>}
                    {subheader && <Text style={styles.subheaderText}>{subheader}</Text>}
                    </View>
			)}
			{children}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 20,
		flex: 1,
	},
	headerText: {
		color: 'blue',
		fontWeight: '600',
		fontSize: 32,
		marginBottom: 12,
	},
	topRow: {
		marginBottom: 28,
	},
    subheaderText:{
        color:'grey',
        fontSize:20,
        marginBottom:12
    }
})
