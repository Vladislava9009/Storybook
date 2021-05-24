import React from 'react'
import { View } from 'react-native'


export const BufferView = (storyFn) => {
    return <View style={{ flex: 1, mrginVertical: 40, marginHorizontal: 20 }}>
        {storyFn()}
    </View>
}