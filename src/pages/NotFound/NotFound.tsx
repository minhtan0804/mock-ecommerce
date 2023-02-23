import { Button, Result } from 'antd'
import { Navigate, useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)
  }

  return (
    <Result
      style={{ marginTop: '12rem' }}
      status='404'
      title='404'
      subTitle='Sorry, the page you visited does not exist.'
      extra={
        <Button type='primary' onClick={handleBack}>
          Back Home
        </Button>
      }
    />
  )
}

export default NotFound
