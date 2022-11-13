export interface JubicRecordType {
  id: number;
  name: string;
  description: string;
  comment: string;
}

export interface ButtonProps {
  label: string;
  handleClick?: () => void;
}

export interface ModalProps {
  modalLabel: string;
  data: JubicRecordType;
}

export interface InputProps {
  inputLabel: string;
  inputValue: string | number;
  onChangeHandler?: (event: object) => void;
}

export interface DisplayTableProps {
  tableHeader: Array<string>;
  tableData: Array<JubicRecordType>;
  removeRecord: (event: object, id: number) => void;
}
