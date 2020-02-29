import React from 'react'
import {
    Avatar,
    Button,
    CssBaseline,
    FormControlLabel,
    Checkbox,
    Grid,
    Box,
    Typography,
    Container
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { makeStyles } from '@material-ui/core/styles'

import { connect } from 'react-redux'
import { Field, reduxForm, getFormValues } from 'redux-form'
import axios from 'axios'
import { Link } from 'react-router-dom'

import InputField from '../../components/FormField/Input'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link to="#" color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = ({
  invalid,
  submitting,
  handleSubmit,
  ...props
}) => {
  const classes = useStyles()

  const handleLogin = async (values) => {
    const res = await axios.post('/api/login', values)
    console.log(res)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit(handleLogin)}
        >
          <Field
            component={InputField}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            type="text"
            placeholder="Email"
          />
          <Field
            component={InputField}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            placeholder="Password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}

const mapStateToProps = (state) => {
  const { authStore } = state
  return {
    authStore,
    values: getFormValues('LoginForm')(state)
  }
}

const mapDispatchToProps = (dispatch) => ({
//   getLoginData: (data) => dispatch(getLoginData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'LoginForm'
})(SignIn))
