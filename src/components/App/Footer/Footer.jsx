import React from 'react';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = props => (
  <footer>
    <div className="footer-top">
      <div className="footer-top__headers">
        <h3 className="footer-top--header">{props.t('components.UI.footer.headers.categories')}</h3>
        <span />
        <h3 className="footer-top--header">{props.t('components.UI.footer.headers.aboutUs')}</h3>
        <h3 className="footer-top--header">{props.t('components.UI.footer.headers.exhibitor')}</h3>
      </div>
      <div className="footer-top__columns">
        <div className="footer-top__row">
          <Link href="/" to="/search?category=building" className="footer-top__row--link">{props.t('components.UI.categorySelect.categoryOptions.building')}</Link>
          <Link href="/" to="/search?category=photography" className="footer-top__row--link">{props.t('components.UI.categorySelect.categoryOptions.photography')}</Link>
          <Link href="/" to="/search?category=companyAndOffice" className="footer-top__row--link">{props.t('components.UI.categorySelect.categoryOptions.companyAndOffice')}</Link>
          <Link href="/" to="/search?category=graphics" className="footer-top__row--link">{props.t('components.UI.categorySelect.categoryOptions.graphics')}</Link>
          <Link href="/" to="/search?category=tutoring" className="footer-top__row--link">{props.t('components.UI.categorySelect.categoryOptions.tutoring')}</Link>
          <Link href="/" to="/search?category=bookkeeping" className="footer-top__row--link">{props.t('components.UI.categorySelect.categoryOptions.bookkeeping')}</Link>
          <Link href="/" to="/search?category=marketingAndAdvertising" className="footer-top__row--link">{props.t('components.UI.categorySelect.categoryOptions.marketingAndAdvertising')}</Link>
          <Link href="/" to="/search?category=repairAndService" className="footer-top__row--link">{props.t('components.UI.categorySelect.categoryOptions.repairAndService')}</Link>
          <Link href="/" to="/search?category=garden" className="footer-top__row--link">{props.t('components.UI.categorySelect.categoryOptions.garden')}</Link>
        </div>
        <div className="footer-top__row">
          <Link href="/" to="/search?category=housework" className="footer-top__row--link">{props.t('components.UI.categorySelect.categoryOptions.housework')}</Link>
          <Link href="/" to="/search?category=law" className="footer-top__row--link">{props.t('components.UI.categorySelect.categoryOptions.law')}</Link>
          <Link href="/" to="/search?category=programming" className="footer-top__row--link">{props.t('components.UI.categorySelect.categoryOptions.programming')}</Link>
          <Link href="/" to="/search?category=translations" className="footer-top__row--link">{props.t('components.UI.categorySelect.categoryOptions.translations')}</Link>
          <Link href="/" to="/search?category=transport" className="footer-top__row--link">{props.t('components.UI.categorySelect.categoryOptions.transport')}</Link>
          <Link href="/" to="/search?category=workshopServices" className="footer-top__row--link">{props.t('components.UI.categorySelect.categoryOptions.workshopServices')}</Link>
          <Link href="/" to="/search?category=bandsAndMusic" className="footer-top__row--link">{props.t('components.UI.categorySelect.categoryOptions.bandsAndMusic')}</Link>
          <Link href="/" to="/search?category=others" className="footer-top__row--link">{props.t('components.UI.categorySelect.categoryOptions.others')}</Link>
        </div>
        <div className="footer-top__row">
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.footer.aboutUs.privacy')}</Link>
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.footer.aboutUs.statute')}</Link>
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.footer.aboutUs.help')}</Link>
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.footer.aboutUs.shopping')}</Link>
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.footer.aboutUs.sale')}</Link>
        </div>
        <div className="footer-top__row">
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.footer.forExhibitors.seller')}</Link>
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.footer.forExhibitors.conditions')}</Link>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <span>Intive Patronage 2018</span>
    </div>
  </footer>
);

export { Footer };
export default translate()(Footer);
