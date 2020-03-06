export default ({
    email,
    name,
    password,
    username,
    agree
  }) => {
    const error = {
      name: !name ? '*Required'
      : name.length < 6 ? 'Name Min 8 Character'
      : name.length > 50 ? 'Name Max 50 Character'
      : undefined,
      username: !username ? '*Required'
      : username.length < 6 ? 'Username Min 8 Character'
      : username.length > 15 ? 'Username Max 15 Character'
      : undefined,
      email: !email ? '*Required'
      : !(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,4}$/.test(email)) ? 'Use email format'
      : email.length > 50 ? 'Email Max 50 Character'
      : undefined,
      password: !password ? '*Required'
      : password.length < 6 ? 'Password Min 6 Character'
      : password.length > 50 ? 'Password Max 50 Character'
      : undefined,
      agree: !agree ? '*Required' : undefined
    }

    return error
  }
