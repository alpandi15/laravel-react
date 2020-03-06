import React from 'react'
import PropTypes from 'prop-types'
import {
    TextField,
    FormControl,
    FormHelperText
} from '@material-ui/core'

const Input = ({
    input,
    label,
    placeholder,
    maxLength,
    autoFocus,
    disabled,
    margin,
    type,
    id,
    name,
    autoComplete,
    meta: {
        error,
        touched
    }
}) => {
    return (
        <FormControl error={error && touched} variant="standard">
            {error && touched && <FormHelperText id="component-error-text">{error}</FormHelperText>}
            <TextField
                {...input}
                variant="outlined"
                margin={margin}
                required
                fullWidth
                id={id}
                label={label}
                name={name}
                autoComplete={autoComplete}
                autoFocus={autoFocus}
                placeholder={placeholder}
                maxLength={maxLength}
                disabled={disabled}
                type={type}
            />
        </FormControl>
    )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  margin: PropTypes.string
}

export default Input
