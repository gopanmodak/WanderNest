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
    <Link to='/about' className="link link-hover">About us</Link>
    <a className="link link-hover">Contact</a>
    <Link to='/emi' className="link link-hover">EMI Policy</Link>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <Link to='/terms-conditions' className="link link-hover">Terms of use</Link>
    <Link to='/privacy-policy'className="link link-hover">Privacy policy</Link>
    <Link to='/refunds-return' className="link link-hover">Refunds & Return Policy
</Link>
  </nav>
</footer>
    </div>
  )
}

export default Footer