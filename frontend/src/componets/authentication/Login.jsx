import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const [loading,setLoading]=useState(false)
    const [data,setData]=useState([])
    const toast = useToast()
    const navigate=useNavigate()
    const handleClick = () => setShow(!show);

    const handleSubmit = async() => {
        setLoading(true);
        if (!email || !password) {
          toast({
            title: "Please Fill all the Feilds",
            status: "warning",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          setLoading(false);
          return;
        }
    
        try {
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
    
          const  response  = await axios.post("http://localhost:5000/login",{ email, password },config);
    
    
          toast({
            title: "Login Successful",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          setData(response.data)
          
          localStorage.setItem("userInfo", JSON.stringify(data));
          setLoading(false);
          navigate("/chat");
        } catch (error) {
          toast({
            title: "Error Occured!",
            description: error.response.data.message,
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          setLoading(false);
        }
      };
    
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


            <Button colorScheme='blue' width='100%' onClick={handleSubmit} isLoading={loading}>
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

