import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function ResponsiveDialog(props) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={props.info}
        onClose={props.handleInfoClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Welcome!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To the only platform for non addictive games.
            We launch our very first game. It is quite simple to play, after pressing "GO!" button, try to catch the single game piece moving in random positions within time bound.
            Thanks to Mr. Sunil to ideate and design this product.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleInfoClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
