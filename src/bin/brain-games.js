#!/usr/bin/env node
import { getUserName } from '..';

const greeting = () => {
  console.log('Welcome to the Brain Games!\n');
  getUserName();
};

greeting();
