import {
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type Props = {
  selectedRank: string;
  handleChange: (event: SelectChangeEvent<string>) => void;
};

export default function DriverDiskRankSelectBox({
  selectedRank,
  handleChange,
}: Props) {
  return (
    <>
      <FormControl fullWidth={false}>
        <InputLabel id="demo-simple-select-label">
          ドライバディスクのランク
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedRank}
          onChange={handleChange}
          sx={{ width: "160px" }}
        >
          <MenuItem value="S">S</MenuItem>
          <MenuItem value="A">A</MenuItem>
          <MenuItem value="B">B</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
