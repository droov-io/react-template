import React from 'react'
import PageLayout from 'components/PageLayout';
import Table from "components/Table";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Page1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        data: [{
            id: 1,
            long: 33.56,
            lat: 44.22
        }],
        longtitude: 0,
        latitude: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        var oldState = {...this.state}
        var oldData = oldState.data
        var lastId = oldData[oldData.length - 1].id + 1
        var newData = oldData.concat({
            id: lastId,
            long: this.state.longtitude,
            lat: this.state.latitude
        }) 
        this.setState({data: newData})
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    render() {
        return (
            <PageLayout>
                <Table data={this.state.data}/>
                <div style={{
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
                        value={this.state.longtitude}
                        onChange={this.handleChange}
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
                        value={this.state.latitude}
                        onChange={this.handleChange}
                    />
                    <Button variant="contained" style={{width: "25%"}} onClick={this.handleSubmit}>Add</Button>
                </div>
            </PageLayout>
        )
    }
}

export default Page1