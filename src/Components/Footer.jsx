import logo from '../assets/logo.webp'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className=' bg-white'>
      <footer className="footer sm:footer-horizontal text-gray-900 p-10 max-w-7xl mx-auto">
  <aside>
    <img src={logo} alt="" className='h-30' />
    <p>
      WanderNest Travel Services Limited.
      <br />
      Providing reliable travel services since 1992
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <Link className="link link-hover">About us</Link>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <Link to='/TermsConditions' className="link link-hover">Terms of use</Link>
    <Link to='/PrivacyPolicy'className="link link-hover">Privacy policy</Link>
    <Link to='/RefundsReturn' className="link link-hover">Refunds & Return Policy
</Link>
  </nav>
</footer>
    </div>
  )
}

export default Footer