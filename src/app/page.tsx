"use client";

import styled from "styled-components";
import styles from "./page.module.css";
import { useState } from "react";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: white;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  padding: 22px 14px;
`;

const Input = styled.input`
  width: 300px;
  padding: 10px;
  border: none;
  background: #f2f2f2;
  color: #9f9f9f;
  &::placeholder {
    color: #9f9f9f;
  }
`;

const Button = styled.button`
  background: #4caf50;
  border: none;
  color: white;
  cursor: pointer;
  padding: 12px;
  font-weight: bold;
  &:disabled {
    background: #8d9e8e;
    cursor: not-allowed;
  }
`;

const Banner = styled.article`
  background-color: #3f89f8;
  padding: 15px;
  color: white;
`;

const ErrorMessage = styled.span`
  color: red;
`

export default function Home() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setSubmitted(true);
    console.log(event);
  };

  return (
    <main className={styles.main}>
      <Form onSubmit={handleSubmit}>
        {submitted ? <Banner>Success! Thank you for registering!</Banner> : null}
        <Input
          type="text"
          placeholder="First Name"
          value={values.firstName}
          onChange={(event) =>
            setValues((oldValues) => ({
              ...oldValues,
              firstName: event.target.value,
            }))
          }
        />
        {submitted && !values.firstName ? <ErrorMessage>Please enter a first name</ErrorMessage> : null}
        <Input
          type="text"
          placeholder="Last Name"
          value={values.lastName}
          onChange={(event) =>
            setValues((oldValues) => ({
              ...oldValues,
              lastName: event.target.value,
            }))
          }
        />
        {submitted && !values.lastName ? <ErrorMessage>Please enter a last name</ErrorMessage> : null}
        <Input
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={(event) =>
            setValues((oldValues) => ({
              ...oldValues,
              email: event.target.value,
            }))
          }
        />
        {submitted && !values.email ? <ErrorMessage>Please enter an email</ErrorMessage> : null}
        <Button disabled={!values.firstName && !values.lastName && !values.email} type="submit">Register</Button>
      </Form>
    </main>
  );
}
