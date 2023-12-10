import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);

    const handleClick = () => setShow(!show);

    const handleSubmit = () => {

    }

    return (
        <VStack spacing='5px' color='black'>
            <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    placeholder='Enter your Email'
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>

            <FormControl id='Password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input
                        placeholder='Enter your Password'
                        type={show ? 'text' : 'password'}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <br />


            <Button colorScheme='blue' width='100%' onClick={handleSubmit}>
                Submit
            </Button>
            <Button
                variant='solid'
                colorScheme='red'
                width='100%'
                onClick={() => {
                    setEmail('Guest@example.com');
                    setPassword('guest');
                }}
            >
                Guest User
            </Button>

        </VStack>
    );
}

export default Login;

