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

export default function DriverDiskLevelSelectBox({
  selectedLevel,
  handleChange,
}: Props) {
  return (
    <>
      <FormControl fullWidth={false}>
        <InputLabel id="demo-simple-select-label">
          ドライバディスクのレベル
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedLevel}
          onChange={handleChange}
          sx={{ width: "160px" }}
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={12}>12</MenuItem>
          <MenuItem value={15}>15</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
