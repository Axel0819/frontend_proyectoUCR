import { Helmet } from 'react-helmet'

export default function Login() {
  return (
    <>
    <Helmet>
      <title>CECAMM-UCR | Inicia sesión</title>
      <meta name="description" content="Inicia sesesion"/>
    </Helmet>

      <div style={{
        display: 'grid',
        placeContent: 'center',
        height: '100vh'
      }}>
        Login
      </div>
    </>

  )
}
