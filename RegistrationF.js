import React from "react";
 export function RegistrationF(){
    let form = () => {
        let name=document.getElementById('name').value;
        let age=document.getElementById('age').value;
        let num=document.getElementById('num').value;
        let email=document.getElementById('email').value;
        let dob=document.getElementById('dob').value;
        alert("HI!!!"+name+" Thank You ");
    }
    return(
        <>
        <center>
        <h1>Registration Form</h1><br></br>
        <label>Name</label><br></br>
        <input type="text" id="name" name="name"></input><br></br><br></br>
        <label>age</label><br></br>
        <input type="number" id="age" name="age"></input><br></br><br></br>
        <label>phone number</label><br></br>
        <input type="tel" id="num" name="num"></input><br></br><br></br>
        <label>Email address</label><br></br>
        <input type="email" id="email" name="email"></input><br></br><br></br>
        <label>Date of birth</label><br></br>
        <input type="date" id="dob" name="dob"></input><br></br><br></br> 
        <input type="button" value="Click" onClick={form}></input>
        </center>
        </>
    )
}