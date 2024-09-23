import {
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
} from "@mui/material";

export default function CoreSkillLevelSelectBox({
  selectedLevel,
  handleChange,
}) {
  return (
    <>
      <FormControl fullWidth={false}>
        <InputLabel id="demo-simple-select-label">コアスキルレベル</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedLevel}
          label=""
          onChange={handleChange}
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
