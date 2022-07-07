export enum ErrorType {
  required = 'required',
  isAddress = 'isAddress',
  isEmail = 'isEmail',
  minLength = 'minLength',
  maxLength = 'maxLength',
  min = 'min',
  max = 'max',
  unique = 'unique',
  lessThan = 'lessThan',
  moreThan = 'moreThan',
  lessThanEqual = 'lessThanEqual',
  moreThanEqual = 'moreThanEqual',
}

interface ConfigError {
  minLength?: number;
  maxLength?: number;
  isAddress?: string;
  isEmail?: string;
  min?: string | number;
  max?: string | number;
  unique?: string | number;
  lessThan?: string | number;
  moreThan?: string | number;
  lessThanEqual?: string | number;
  moreThanEqual?: string | number;
  customMessage?: Partial<{ [key in ErrorType]: string }>;
}

const getErrorMessage = (
  label: string,
  errorType?: string,
  config: ConfigError = {}
) => {
  const {
    minLength = 0,
    maxLength = 0,
    min = 0,
    max = 0,
    lessThan,
    moreThan,
    lessThanEqual,
    moreThanEqual,
  } = config;
  switch (errorType) {
    case ErrorType.required:
      return `${label} is required`;
    case ErrorType.isAddress:
      return `${label} must be address`;
    case ErrorType.isEmail:
      return `${label} must be a valid email`;
    case ErrorType.minLength:
      return `${label} must be more than ${minLength} character`;
    case ErrorType.maxLength:
      return `${label} must be less than ${maxLength} character`;
    case ErrorType.min:
      return `minimum ${label} is ${min}`;
    case ErrorType.max:
      return config.customMessage?.max || `maximal ${label} is ${max}`;
    case ErrorType.lessThan:
      return `${label} must less than ${lessThan}`;
    case ErrorType.moreThan:
      return `${label} must more than ${moreThan}`;
    case ErrorType.lessThanEqual:
      return `${label} must less than or equal ${lessThanEqual}`;
    case ErrorType.moreThanEqual:
      return `${label} must more than or equal ${moreThanEqual}`;
    case ErrorType.unique:
      return `${label} is not available`;
    default:
      return ``;
  }
};

export { getErrorMessage };
