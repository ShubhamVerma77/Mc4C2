import {
  Anchor,
  Button,

  Container,
  Group,
  Paper,
  PasswordInput,
  TextInput,
  Title,
} from '@mantine/core';
import classes from './Styles/Auth.module.css';
import { useState } from 'react';
import { data, useNavigate } from 'react-router-dom';

function Auth() {

    const Nevigate = useNavigate();
    const[formdata,setFormdata]= useState({
        email:"",
        password:""
    }
  )

    

function Authentication(){
    
    if(formdata.email === "Admin" && formdata.password === "Admin@123") {
   const Data ={
    name:"Shubham Verma"
   }
   sessionStorage.setItem("Data",Data.name);
   alert("Authentication successful!");
    Nevigate("/Main");
    } else {
        alert("Authentication failed. Please check your email and password.");
    }
}
  return (

    <div className={classes.pageWrapper}>
      <Container size={420} className={classes.formContainer}>
        <Paper 
          withBorder 
          shadow="sm" 
          p={22} 
          radius="md" 
          className={classes.card}
        >
          <Title ta="center" fz="xl" fw={700} className={classes.title}>
            Welcome back!
          </Title>
          
          <TextInput 
            label="Email" 
            placeholder="you@gmail.com" 
            required 
            radius="md" 
            value={formdata.email}
            onChange={(e) => setFormdata({...formdata, email: e.target.value})}
          />
          
          <PasswordInput 
            label="Password" 
            placeholder="Your password" 
            required 
            mt="md" 
            radius="md" 
            value={formdata.password}
            onChange={(e) => setFormdata({...formdata, password: e.target.value})}
          />
          
          <Group justify="space-between" mt="lg">
            {/* <Checkbox label="Remember me" /> */}
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          
          <Button fullWidth mt="xl" radius="md" onClick={()=>Authentication()}>
            Sign in
          </Button>
        </Paper>
      </Container>
    </div>
  );
}

export default Auth;