import React from 'react'

function LoginForm({onSubmit, buttonText = ''}) {
  const [formData, setFormData] = React.useState(() => ({
    username: '',
    password: '',
  }))

  const handleChange = e => {
    const {name, value} = e.target

    setFormData({...formData, [name]: value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    // for now
    onSubmit(formData)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button>{buttonText}</button>
      </form>
    </div>
  )
}

export {LoginForm}
