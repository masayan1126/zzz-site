import {
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type Props = {
  selectedCollaborationSkillLevel: number;
  handleSelectedCollaborationSkillLevel: (
    event: SelectChangeEvent<string>
  ) => void;
};

export default function CollaborationSkillLevelSelectBox({
  selectedCollaborationSkillLevel,
  handleSelectedCollaborationSkillLevel,
}: Props) {
  return (
    <>
      <FormControl fullWidth={false}>
        <InputLabel id="demo-simple-select-label" sx={{ color: "#01488E" }}>
          連携スキルレベル
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedCollaborationSkillLevel.toString()}
          label=""
          onChange={handleSelectedCollaborationSkillLevel}
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
