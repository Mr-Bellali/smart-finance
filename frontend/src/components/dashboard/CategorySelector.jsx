import { useState } from 'react';
import CreatableSelect from 'react-select/creatable';

const createOption = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
});

const defaultOptions = [
  createOption('One'),
  createOption('Two'),
  createOption('Three'),
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    minHeight: '50px',
    borderRadius: '0.75rem',
    padding: '0.25rem',
    borderColor: '#e2e8f0',
    width: '180px',
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: '0 1rem',
  }),
};

export default function CategorySelector({ onChange }) {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(defaultOptions);
  const [value, setValue] = useState(null);

  const handleCreate = (inputValue) => {
    setIsLoading(true);
    setTimeout(() => {
      const newOption = createOption(inputValue);
      setIsLoading(false);
      setOptions((prev) => [...prev, newOption]);
      setValue(newOption);
      onChange(newOption); // notify parent component
    }, 1000);
  };

  return (
    <CreatableSelect
      styles={customStyles}
      isClearable
      isDisabled={isLoading}
      isLoading={isLoading}
      onChange={(newValue) => {
        setValue(newValue);
        onChange(newValue); // notify parent component
      }}
      onCreateOption={handleCreate}
      options={options}
      value={value}
    />
  );
}
