import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const TableInput = (props) => <div style={{
                    display: "flex",
                    width: "80%",
                    justifyContent: "space-between",
                    marginTop: "20px"
                }}>
                    <TextField
                        id="filled-number"
                        label="Longtitude"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                        name="longtitude"
                        value={props.longtitude}
                        onChange={props.handleChange}
                    />
                    <TextField
                        id="filled-number"
                        label="Latitude"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                        name="latitude"
                        value={props.latitude}
                        onChange={props.handleChange}
                    />
                    <Button variant="contained" style={{width: "25%"}} onClick={props.handleSubmit}>Add</Button>
                </div>

export default TableInput