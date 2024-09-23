import {
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type Props = {
  selectedCoreSkillLevel: string;
  handleSelectedCoreSkillLevel: (event: SelectChangeEvent<string>) => void;
};

export default function CoreSkillLevelSelectBox({
  selectedCoreSkillLevel,
  handleSelectedCoreSkillLevel,
}: Props) {
  return (
    <>
      <FormControl fullWidth={false}>
        <InputLabel id="demo-simple-select-label">コアスキルレベル</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedCoreSkillLevel}
          label=""
          onChange={handleSelectedCoreSkillLevel}
          sx={{ width: "200px" }}
        >
          <MenuItem value="">指定しない</MenuItem>
          <MenuItem value="A">A</MenuItem>
          <MenuItem value="B">B</MenuItem>
          <MenuItem value="C">C</MenuItem>
          <MenuItem value="D">D</MenuItem>
          <MenuItem value="E">E</MenuItem>
          <MenuItem value="F">F</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
