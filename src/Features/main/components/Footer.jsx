import React from 'react'
import uzchess from '../../../assets/uzchess.png'
import soical from '../../../assets/soical.png'
import footer from '../../../assets/footer.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-top">
        <img className="footer-logo" src={uzchess} alt="" />

        <nav className="footer-nav">
          <a href="">Biz haqimizda</a>
          <a href="">Cookie fayllari siyosati</a>
          <a href="/roles">Foydalanish qoidalari</a>
          <a href="">Cookie fayllari siyosati</a>
        </nav>

        <img className="footer-social" src={soical} alt="" />
      </div>

      <div className="footer-line">
        <img src={footer} alt="" />
      </div>

      <div className="footer-bottom">
        <span>© UzChess. All rights reserved.</span>
        <a href="">Foydalanish qoidalari</a>
      </div>
    </footer>
  )
}
