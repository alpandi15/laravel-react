import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Avatar,
    CssBaseline,
    FormControlLabel,
    Checkbox,
    Grid,
    Box,
    Typography,
    Container,
    CircularProgress
} from '@material-ui/core'
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Field, reduxForm, getFormValues } from 'redux-form'
import axios from 'axios'
import InputField from '../../components/FormField/Input'
import Button from '../../components/FormField/Button'
import validate from './validate'

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = ({
    invalid,
    loading,
    submitting,
    handleSubmit
}) => {
  const classes = useStyles();

  const onSubmit = async (values) => {
    const res = await axios.post('/api/register', values)
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
          Sign up
        </Typography>
        <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Field
                component={InputField}
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                component={InputField}
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                component={InputField}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                component={InputField}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            text="Login"
            invalid={invalid}
            submitting={submitting}
            loading={loading}
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

const mapStateToProps = (state) => {
    const { authStore } = state
    return {
      authStore,
      values: getFormValues('RegisterForm')(state)
    }
  }

  const mapDispatchToProps = (dispatch) => ({
  //   getLoginData: (data) => dispatch(getLoginData(data))
  })

  export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
      form: 'RegisterForm',
      validate
  })(SignUp))
