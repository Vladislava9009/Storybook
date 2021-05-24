// export {default} from "./storybook";
import React from 'react'
import {SafeAreaView} from 'react-native'
import {Form,TextInput,Switch,Button} from './src/components'


export default ()=>(
    <SafeAreaView style={{flex:1}}>
        <Form header="Hello" subheader="Please create a new account">
            <TextInput label="Email" keyboardType="email-address"/>
            <TextInput label="Password" secureTextEntry/>
            <TextInput label="Confirm Password" secureTextEntry/>
            <Switch label="Agree to Terms"/>
            <Button onPress={()=>{}}>Sign Up</Button>
            <Button onPress={()=>{}} outline>Sign In</Button>
        </Form>

    </SafeAreaView>
)