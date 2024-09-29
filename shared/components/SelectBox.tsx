import {
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type Props = {
  selectedLevel: number;
  handleChange: (event: SelectChangeEvent<number>) => void;
};

export default function SelectBox({ selectedLevel, handleChange }: Props) {
  return (
    <>
      <FormControl fullWidth={false}>
        <InputLabel id="demo-simple-select-label">
          エージェントのレベル
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedLevel}
          label="レベル"
          onChange={handleChange}
          sx={{ width: "160px" }}
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={40}>40</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={60}>60</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
