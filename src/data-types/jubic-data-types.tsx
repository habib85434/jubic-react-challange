export interface JubicRecordType {
  id: number;
  name: string;
  description: string;
  comment: string;
}

export interface ButtonProps {
  label: string;
  buttonType?: "submit" | "reset" | "button";
  handleClick?: () => void;
}

export interface ModalProps {
  modalLabel: string;
  data: JubicRecordType;
}

export interface InputProps {
  inputLabel: string;
  inputValue: string | number;
  onChangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface DisplayTableProps {
  tableHeader: Array<string>;
  tableData: Array<JubicRecordType>;
  removeRecord: (id: number) => void;
}

export interface inputChangeHandlerType {
  (value: string): void;
}
