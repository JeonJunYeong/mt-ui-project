import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";

type customDialogType ={
    handleClose:any,
    open:any
}

const CustomDialog = ({handleClose,open}:customDialogType) =>{
    return (
        <>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>Test</DialogTitle>
                <DialogContent>

                </DialogContent>
                <DialogActions>

                    <Button onClick={handleClose} autoFocus>
                        OK
                    </Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default CustomDialog
