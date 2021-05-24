import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { Button } from '../../components'
import { BufferView } from '../decorator'

storiesOf('Button', module)
	.addDecorator(BufferView)
	.add('default', () => {
		return <Button onPress={action('tapped-default')}>Press me</Button>
	})
	.add('outline', () => {
		return (
			<Button onPress={action('tapped-outline')} outline>
				Press me
			</Button>
		)
	})
