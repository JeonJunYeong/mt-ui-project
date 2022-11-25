import styled from "styled-components";
import ListTemplate, {templateType} from "../../components/ListTemplate";
import React from "react";
import CustomDialog from "../../components/CustomDialog";
import {FormControlLabel, Switch} from "@mui/material";


const StyleListWrapper = styled.div`
    height:240px;
    background-color: #f6f7f8;
    border-radius:12px;
    margin: 14px;
    padding:10px;
    box-shadow: rgba(60, 64, 67, 0.3) 0 1px 2px 0, rgba(60, 64, 67, 0.15) 0 1px 3px 1px;
    overflow-y: scroll;
`;

const StyleButtonWrapper = styled.div`
  text-align: center;
`

const StyleToggleWrapper = styled.div`
  text-align: right`


const ListWrapper = () =>{
    const [dialogOpen,setDialogOpen] = React.useState(false);
    const [checked, setChecked] = React.useState(true);


    const handleClickOpen = () =>{
        setDialogOpen(true)
    }

    const handleClose = () =>{
        setDialogOpen(false)
    }


    const addListEvent = () =>{
        handleClickOpen()
    }

    const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        // setChecked(event.target.checked)
    }

    const sample:templateType ={
        name:"Title",
        nowPrice:"1",
        state:"TRUE",
        update:false
    }


    return(
        <>
            <StyleToggleWrapper>
                <FormControlLabel control={<Switch checked={sample.update} onChange={handleSwitchChange}/>} label="Label" />
            </StyleToggleWrapper>
            <StyleListWrapper>
                {/*<ListTemplate*/}
                {/*    name={sample.name}*/}
                {/*    nowPrice={sample.nowPrice}*/}
                {/*    state={sample.state}*/}
                {/*    update={sample.update}*/}
                {/*></ListTemplate>*/}
            </StyleListWrapper>
            {/*<StyleButtonWrapper>*/}
            {/*    <Button onClick={addListEvent}></Button>*/}
            {/*</StyleButtonWrapper>*/}
            <CustomDialog handleClose={handleClose} open={dialogOpen}/>
        </>
    )
}


export default ListWrapper
