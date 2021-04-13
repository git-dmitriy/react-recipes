export function Footer() {
  return (
    <footer className='page-footer #cfd8dc blue-grey lighten-4 '>
      <div className='footer-copyright black-text'>
        <div className='container'>
          © {new Date().getFullYear} Copyright Text
          <a className='black-text right' href='#!'>
            Repository
          </a>
        </div>
      </div>
    </footer>
  )
}
