import React from 'react'
import {
  Button
} from '@material-ui/core'

class User extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
    this.rediretLogin = this.rediretLogin.bind(this)
  }

  componentDidMount() {
    console.log('Masuk ', this.props)
  }

  rediretLogin () {
    const { history } = this.props
    history.push('/login')
  }

  render () {
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={this.rediretLogin}
        >
        Login
        </Button>
      </div>
    )
  }
}

export default User
