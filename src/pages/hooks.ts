import { useState } from "react";

// Hook de validation du nom et du prénom (champs texte non vides)
export function useNameValidation(initialValue) {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(false);

  const validate = (input) => {
    const isValidName = /^[A-Za-z\s]+$/.test(input);
    setIsValid(isValidName && input.trim() !== "");
  };

  const handleChange = (input) => {
    setValue(input);
    validate(input);
  };

  return [value, isValid, handleChange];
}

// Hook de validation du numéro IFU (chiffres uniquement, 10 chiffres)
export function useIFUValidation(initialValue) {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(false);

  const validate = (input) => {
    const isValidIFU = /^\d{10}$/.test(input);
    setIsValid(isValidIFU);
  };

  const handleChange = (input) => {
    setValue(input);
    validate(input);
  };

  return [value, isValid, handleChange];
}

// Hook de validation du numéro de téléphone béninois (chiffres uniquement, 8 chiffres)
export function useBeninPhoneNumberValidation(initialValue) {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(false);

  const validate = (input) => {
    const isValidPhoneNumber = /^\d{8}$/.test(input);
    setIsValid(isValidPhoneNumber);
  };

  const handleChange = (input) => {
    setValue(input);
    validate(input);
  };

  return [value, isValid, handleChange];
}

// Hook de validation de l'adresse e-mail
export function useEmailValidation(initialValue) {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(false);

  const validate = (input) => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
    setIsValid(isValidEmail);
  };

  const handleChange = (input) => {
    setValue(input);
    validate(input);
  };

  return [value, isValid, handleChange];
}

// Hook de validation du numéro de bon de commande (chiffres uniquement)
export function useOrderNumberValidation(initialValue) {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(false);

  const validate = (input) => {
    const isValidOrderNumber = /^\d+$/.test(input);
    setIsValid(isValidOrderNumber);
  };

  const handleChange = (input) => {
    setValue(input);
    validate(input);
  };

  return [value, isValid, handleChange];
}
