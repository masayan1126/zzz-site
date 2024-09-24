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

export default function SoundEngineLevelSelectBox({
  selectedLevel,
  handleChange,
}: Props) {
  return (
    <>
      <FormControl fullWidth={false}>
        <InputLabel id="demo-simple-select-label">音動機のレベル</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedLevel}
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

      <FormControl fullWidth={false}>
        {/* <InputLabel variant="standard" htmlFor="uncontrolled-native">
          レベル
        </InputLabel> */}
        {/* <NativeSelect
            defaultValue={selectedLevel}
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
          >
            <option value="0">0</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="60">60</option>
          </NativeSelect> */}
      </FormControl>
    </>
  );
}
