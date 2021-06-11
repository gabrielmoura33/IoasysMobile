  import React, { useCallback, useRef, useState } from 'react';
  import { Form } from '@unform/mobile';
  import { Alert, KeyboardAvoidingView, Platform, Text, View } from 'react-native';
  import { ScrollView, TextInput } from 'react-native';
  
  
  import { Container, Wrapper, Logo, Label } from './styles';
  import logoSrc from '../../assets/logoBig.png';
  import Input from '../../components/Form/Input';
  import Button from '../../components/Form/Button';
import { useAuth } from '../../hooks/auth';
import { FormHandles } from '@unform/core';
  interface SignInProps {
    
  }
  
  function SignIn() {
    const { signIn} = useAuth();

    const formRef = useRef<FormHandles>(null);
    const passwordInputRef = useRef<TextInput>(null);
    const handleSubmit = async ({ email, password }: any ) => {
      try {
        
        await signIn({email, password});
      } catch (error){
        console.log(error);
        Alert.alert('Não foi possível realizar o login');
      }
    }
    return (         
        <Wrapper
          colors={['#721EA8','#CE2138']}      
        >   
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            enabled
          > 
            <ScrollView
              keyboardShouldPersistTaps="handled"
              contentContainerStyle={{ flex: 1 }}
            >
              <Container>
                <Logo source={logoSrc}/>
                
                <Form  ref={formRef} onSubmit={handleSubmit}>
                  <Label>E-mail</Label>
                  <Input
                    name="email"
                    icon="mail"
                    placeholder="E-mail"
                    keyboardType="email-address"
                    autoCorrect={false}
                    autoCapitalize="none"
                    returnKeyType="next"   
                    onSubmitEditing={() => {
                      passwordInputRef.current?.focus();
                    }}                 
                  />
                  <Label>Senha</Label>
                  <Input
                    ref={passwordInputRef}
                    name="password"
                    icon="lock"
                    placeholder="Senha"
                    autoCorrect={false}
                    secureTextEntry
                    returnKeyType="send"
                    onSubmitEditing={() => {
                      formRef.current?.submitForm();
                    }}
                  />
                    <Button
                      onPress={() => {
                        formRef.current?.submitForm();
                      }}
                    >
                      Entrar
                    </Button>
                </Form>
              </Container>
            </ScrollView>
          </KeyboardAvoidingView>         
          </Wrapper>
      );
    };
    
    export default SignIn;
    