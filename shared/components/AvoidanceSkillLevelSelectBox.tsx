import {
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type Props = {
  selectedAvoidanceSkillLevel: number;
  handleSelectedAvoidanceSkillLevel: (event: SelectChangeEvent<string>) => void;
};

export default function AvoidanceSkillLevelSelectBox({
  selectedAvoidanceSkillLevel,
  handleSelectedAvoidanceSkillLevel,
}: Props) {
  return (
    <>
      <FormControl fullWidth={false}>
        <InputLabel id="demo-simple-select-label">回避スキルレベル</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedAvoidanceSkillLevel.toString()}
          label=""
          onChange={handleSelectedAvoidanceSkillLevel}
          sx={{ width: "200px" }}
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
          <MenuItem value="6">6</MenuItem>
          <MenuItem value="7">7</MenuItem>
          <MenuItem value="8">8</MenuItem>
          <MenuItem value="9">9</MenuItem>
          <MenuItem value="10">10</MenuItem>
          <MenuItem value="11">11</MenuItem>
          <MenuItem value="12">12</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
//
