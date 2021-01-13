import React from 'react';
import Section from '../section/Section';
import UserInfo from '../../components/UserInfo';
import { v4 as uuidv4 } from 'uuid';


const Main=()=>{
  return (
    <Section title='Профіль користувача'>
      <UserInfo id={uuidv4()}/>
    </Section>
  )
};

export default Main;