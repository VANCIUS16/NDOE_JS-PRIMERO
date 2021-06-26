import React, {Fragment} from 'react';
import { makeStyles, TextField, Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {        
        margin: theme.spacing(1),
        width: '25ch',
    },
    button: {
        '& > *': {
            margin: theme.spacing(1)
    },
    }
}));

export default function Form() {

  const classes = useStyles();

  return (
      <Fragment>
        <div className={classes.root} className="container" className="form-style">
            <div>
                <TextField
                required
                label="Nombre"
                id="margin-none"
                name="nombre"
                className={classes.textField}
                helperText="Some important text"
                margin="normal"
                />
                <TextField
                required
                label="Primer Pellido"
                id="margin-dense"
                name="apellidoP"
                className={classes.textField}
                helperText="Some important text"
                margin="normal"
                />
                <TextField
                required
                label="Segundo Apellido"
                id="margin-normal"
                name="apellidoM"
                className={classes.textField}
                helperText="Some important text"
                margin="normal"
                />
                 <TextField
                 required
                id="standard-full-width"
                label="Descripic&oacute;n"
                name="desc"
                style={{ margin: 8 }}
                helperText="Full width!"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                />
                 <TextField
                 required
                id="standard-full-width"
                label="Comentarios"
                name="comentarios"
                style={{ margin: 8 }}
                helperText="Full width!"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                />
            </div>
        </div>
        <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<Icon>send</Icon>}
        >
            Enviar
        </Button>
    </Fragment>
  );
}