import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface SelectOptionProps {
  onChange: () => void;
  value: string;
  label: string;
  options: string[];
}

const SelectOption: React.FC<SelectOptionProps> = ({
  onChange,
  value,
  label,
  options,
}) => {
  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger>
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem value={option}>{option}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectOption;
