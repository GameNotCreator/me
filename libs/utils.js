import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';


export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const smoothScrollTo = ({ e, id }) => {
  e.preventDefault();
  const element = document.getElementById(id);
  element?.scrollIntoView({
    block: 'start',
  });
};

export const validateString = (value, maxLength) => {
  if (!value || typeof value !== 'string' || value.length > maxLength) {
    return false;
  }
  return true;
};

export const getErrorMessage = (error) => {
  let message;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message);
  } else if (typeof error === 'string') {
    message = error;
  } else {
    message = 'Something went wrong';
  }

  return message;
};


