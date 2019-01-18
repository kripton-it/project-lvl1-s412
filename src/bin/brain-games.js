#!/usr/bin/env node
import getUserName from '../name';

const greeting = () => {
  console.log('Welcome to the Brain Games!\n');
  getUserName();
};

greeting();
