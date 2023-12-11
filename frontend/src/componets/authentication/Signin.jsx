import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [photo, setPhoto] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const toast = useToast();

    const handleClickPassword = () => setShowPassword(!showPassword);
    const handleClickConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    const postDetails = (photo) => {
        setLoading(true);
        if (!photo) {
            toast({
                title: 'Please select an image.',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: 'top'
            });
            setLoading(false);
            return;
        }
        if (photo.type === 'image/jpeg' || photo.type === 'image/png') {
            const data = new FormData();
            data.append('file', photo);
            data.append('upload_preset', 'chat-make-frined');
            data.append('cloud_name', 'dn4ogvd1b');
            fetch('https://api.cloudinary.com/v1_1/dn4ogvd1b/image/upload', {
                method: 'post',
                body: data,
            })
            .then((res) => res.json())
            .then(data => {
                setPhoto(data.url.toString());
                setLoading(false);
            });
        } else {
            toast({
                title: 'Please select an image.',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: 'top'
            });
            setLoading(false);
            return;
        }
    }

    const handleSubmit = async () => {
        setLoading(true);
        if (!confirmpassword || !password || !email || !name) {
            toast({
                title: 'Fill in all fields.',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: 'top'
            });
            setLoading(false);
            return;
        }
        if (password !== confirmpassword) {
            toast({
                title: 'Passwords do not match.',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: 'top'
            });
            setLoading(false);
            return;
        }
        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                },
            };
            const { data } = await axios.post('http://localhost:5000/', { name, email, password, photo }, config);
            console.log(data)
            toast({
                title: 'Registration successful.',
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: 'top'
            });
            localStorage.setItem('userInfo', JSON.stringify(data));
            setLoading(false);
            navigate('/chat');
        } catch (error) {
            toast({
                title: 'Error occurred.',
                description: 'Error response data message',
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'top'
            });
        }
    }

    return (
        <VStack spacing='5px' color='black'>
            <FormControl id='firstName' isRequired>
                <FormLabel>
                    Name
                </FormLabel>
                <Input placeholder='Enter your name' onChange={(e) => setName(e.target.value)} />
            </FormControl>

            <FormControl id='email' isRequired>
                <FormLabel>
                    Email
                </FormLabel>
                <Input placeholder='Enter your Email' onChange={(e) => setEmail(e.target.value)} />
            </FormControl>

            <FormControl id='Password' isRequired>
                <FormLabel>
                    Password
                </FormLabel>
                <InputGroup>
                    <Input
                        placeholder='Enter your Password'
                        type={showPassword ? 'text' : 'password'}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement>
                        <Button h='1.75rem' size='sm' onClick={handleClickPassword}>
                            {showPassword ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <FormControl id='ConfirmPassword' isRequired>
                <FormLabel>
                    Confirm password
                </FormLabel>
                <InputGroup>
                    <Input
                        placeholder='Confirm your password'
                        type={showConfirmPassword ? 'text' : 'password'}
                        onChange={(e) => setConfirmpassword(e.target.value)}
                    />
                    <InputRightElement>
                        <Button h='1.75rem' size='sm' onClick={handleClickConfirmPassword}>
                            {showConfirmPassword ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <FormControl id='photo'>
                <FormLabel>
                    Choose profile photo
                </FormLabel>
                <Input type='file' p={1.5} accept='image/*' onChange={(e) => postDetails(e.target.files[0])} />
            </FormControl>

            <br />

            <Button colorScheme='blue' width='100%' onClick={handleSubmit} isLoading={loading}>
                Submit
            </Button>
        </VStack>
    )
}

export default Signin;
