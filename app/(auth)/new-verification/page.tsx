import React from 'react';
import { AuthCardWrapper } from '../components/card-wrapper';
import VerificationForm from './components/verification-form';

const page = () => {
  return (
    <AuthCardWrapper
      headerLabel="Confirmacion de email"
      backLabel="Volver"
      backLink="/"
    >
      <VerificationForm />
    </AuthCardWrapper>
  );
};

export default page;
