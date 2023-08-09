'use client';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from '@chakra-ui/react';
import { AppContext } from '@src/context/AppContext';
import { calculateItemsTotal, formatPrice, getSubstring } from '@src/helpers';
import React, { useContext, useEffect, useState } from 'react';
import ReviewItems from './ReviewItems';
import DeliveryInformation from './DeliveryInformation';
import PaymentDetails from './PaymentDetails';

export const Checkout = () => {

  return (
    <Flex
      w={{ base: '100%', lg: '90%' }}
      mx="auto"
      flexDir={{ base: 'column', lg: 'row' }}
      gap="2rem"
    >
      <Stack spacing={10} w={{ base: '100%', lg: '60%' }}>
        <ReviewItems />
        <DeliveryInformation />
      </Stack>

      <Box w={{ base: '100%', lg: '40%' }}>

        <PaymentDetails />
      </Box>
    </Flex>
  );
};
