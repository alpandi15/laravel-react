import React from 'react'
import {
    Button,
    Typography,
    CircularProgress
} from '@material-ui/core'

const ButtonComponent = ({
    type,
    color,
    className,
    id,
    variant,
    invalid,
    loading,
    submitting,
    text,
    ...props
}) => {
    return (
        <Button
            {...props}
            type={type}
            variant={variant}
            color={color}
            className={className}
            disabled={invalid || submitting || loading}
            style={{
                width: '100%'
            }}
        >
            {!submitting ? (
                <Typography> {text}</Typography>
            ) : (
                <CircularProgress size={30} />
            )}
        </Button>
    )
}

export default ButtonComponent
