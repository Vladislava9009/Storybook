import React from 'react'
import { View, Text } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'

import { BufferView } from '../decorator'
import { Form, FieldWrapper, TextInput, Switch } from '../../components'

storiesOf('Form/Switch', module)
	.addDecorator(BufferView)
	.add('default', () => <Switch label="Agree to Terms" value />)
	.add('with error', () => <Switch label="Agree to Terms" message="you must agree to the tems" messageType="error" />)

const defaultTextInputProps = {
	label: 'Demo',
	onChangeText: action('onChangeText'),
}

storiesOf('Form/TextInput', module)
	.addDecorator(BufferView)
	.add('default', () => <TextInput {...defaultTextInputProps} />)
	.add('with placeholber', () => <TextInput {...defaultTextInputProps} placeholder="demo placeholder" />)
	.add('with value', () => <TextInput {...defaultTextInputProps} value="hello value" />)
	.add('with error message', () => (
		<TextInput {...defaultTextInputProps} message="This is an error" messageType="error" />
	))
	.add('email', () => (
		<TextInput
			{...defaultTextInputProps}
			label="email"
			value="vladislava.bogaturova@gmail.com"
			keyboardType="email-address"
		/>
	))
	.add('password', () => <TextInput {...defaultTextInputProps} label="password" value="password" secureTextEntry />)

storiesOf('Form/FieldWrapper', module)
	.addDecorator(BufferView)
	.add('default', () => (
		<FieldWrapper label="Email">
			<Text>Hello, wrapper</Text>
		</FieldWrapper>
	))
	.add('error message', () => (
		<FieldWrapper label="Email" message="Please enter a valid email!" messageType="error">
			<Text>Hello, wrapper</Text>
		</FieldWrapper>
	))
	.add('success message', () => (
		<FieldWrapper label="Email" message="Looks legit" messageType="success">
			<Text>Hello, wrapper</Text>
		</FieldWrapper>
	))
	.add('multiple message', () => (
		<React.Fragment>
			<FieldWrapper label="Email">
				<Text>Hello, wrapper</Text>
			</FieldWrapper>
			<FieldWrapper label="Email" message="Please enter a valid email!" messageType="error">
				<Text>Hello, wrapper</Text>
			</FieldWrapper>
			<FieldWrapper label="Email" message="Looks legit" messageType="success">
				<Text>Hello, wrapper</Text>
			</FieldWrapper>
		</React.Fragment>
	))

storiesOf('Form', module)
	.addDecorator(BufferView)
	.add('default', () => (
		<Form>
			<View style={{ flex: 1, backgroundColor: '#e6e6e6' }} />
		</Form>
	))
	.add('with header', () => (
		<Form header="Hello">
			<View style={{ flex: 1, backgroundColor: '#e6e6e6' }} />
		</Form>
	))
	.add('with header and subheader', () => (
		<Form header="Hello" subheader="Welcome back. Kindly enter your login details">
			<View style={{ flex: 1, backgroundColor: '#e6e6e6' }} />
		</Form>
	))
