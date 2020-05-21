import React from 'react';
import { makeStyles , withStyles} from '@material-ui/core/styles';
import { green, red, yellow, blue } from '@material-ui/core/colors';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const RedCheckbox = withStyles({
  root: {
    color: red[400],
    '&$checked': {
      color: red[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const YellowCheckbox = withStyles({
  root: {
    color: yellow[400],
    '&$checked': {
      color: yellow[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const BlueCheckbox = withStyles({
  root: {
    color: blue[400],
    '&$checked': {
      color: blue[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function Device() {

  const classes = useStyles();
  const [deviceType, setAge, deviceId] = React.useState('');

  const handleDeivceTypeChange = (event) => {
    console.log(event.target.value);
    setAge(event.target.value);
  };

  const handleDeivceIdChange = (event) => {
    console.log(event.target.value);
  };

  const [state, setState] = React.useState({
    checkedR: false,
    checkedG: false,
    checkedB: false,
    checkedY: false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <div className="header-padding"></div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Device Type: </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={deviceType}
          onChange={handleDeivceTypeChange}
        >
          <MenuItem value="Raspberry PI">Raspberry PI</MenuItem>
          <MenuItem value="Ipad">Ipad</MenuItem>
          <MenuItem value="Clicker">Clicker</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="simple-select-device-label">Device Id: </InputLabel>
        <Select labelId="simple-select-device-label"
          id="simple-select-device"
          value={deviceId}
          onChange={handleDeivceIdChange}>
          <MenuItem value={1234}>1234</MenuItem>
          <MenuItem value={3434}>3434</MenuItem>
          <MenuItem value={9990}>9990</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-therapist-label">Therapist Id: </InputLabel>
        <Select
          labelId="demo-simple-therapist-label"
          id="simple-select-therapist"
          value={deviceType}
          onChange={handleDeivceTypeChange}
        >
          <MenuItem value="Therapist 1">Therapist 1</MenuItem>
          <MenuItem value="Therapist 2">Therapist 2</MenuItem>
          <MenuItem value="Therapist 3">Therapist 3</MenuItem>
        </Select>
      </FormControl>
      <FormGroup row>
        <FormControlLabel
          control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
          
        />
        <FormControlLabel
          control={<RedCheckbox checked={state.checkedR} onChange={handleChange} name="checkedR" />}
        
        />
        <FormControlLabel
          control={<YellowCheckbox checked={state.checkedY} onChange={handleChange} name="checkedY" />}
        
        />
        <FormControlLabel
          control={<BlueCheckbox checked={state.checkedB} onChange={handleChange} name="checkedB" />}
          l
        />
      </FormGroup>
      <Button variant="contained" color="primary">
        Save Configuration
      </Button>
    </div>
  )
}
export default Device;