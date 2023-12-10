import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Signin = () => {
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [confirmpassword,setConfirmpassword]=useState()
    const [photo,setPhoto]=useState()
    const [show,setShow]=useState()

    const handleClick=()=>setShow(!show)
    const postDetails=(photos)=>{}
    const handleSubmit=(submit)=>{}
  return (
    <VStack spacing='5px' color='black'>

        <FormControl id='firstName' isRequired>
            <FormLabel>
                Name
            </FormLabel>
            <Input placeholder='Enter your name'
            onChange={(e)=>setName(e.target.value)}/>
        </FormControl>

        <FormControl id='email' isRequired>
            <FormLabel>
                Email
            </FormLabel>
            <Input placeholder='Enter your Email'
            onChange={(e)=>setEmail(e.target.value)}/>
        </FormControl>

        
        <FormControl id='Password' isRequired>
        
            <FormLabel>
                Password
            </FormLabel>
            <InputGroup>
            <Input placeholder='Enter your Password'
            type={show ? 'text' : 'password'}
            onChange={(e)=>setPassword(e.target.value)}/>
            <InputRightElement>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' :'show'}
            </Button>
            </InputRightElement>
            </InputGroup>
        </FormControl>

        
        <FormControl id='Password' isRequired>
            <FormLabel>
            Confirm password
            </FormLabel>
            <InputGroup>
            <Input placeholder='confirm your password'
            type={show ? 'text' : 'password'}
            onChange={(e)=>confirmpassword(e.target.value)}/>
            <InputRightElement>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' :'show'}
            </Button>
            </InputRightElement>
            </InputGroup>
        </FormControl>
<br />
        <Button colorScheme='blue' width='100%'  onClick={handleSubmit}>Submit</Button>
      
      
    </VStack>
  )
}

export default Signin
