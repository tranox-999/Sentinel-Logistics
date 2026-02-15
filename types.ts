import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface InquiryFormState {
  name: string;
  email: string;
  company: string;
  serviceType: string;
  message: string;
}

export interface DriverFormState {
  fullName: string;
  email: string;
  phone: string;
  vehicleType: string;
  licenseNumber: string;
}