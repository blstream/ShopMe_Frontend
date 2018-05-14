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
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.categorySelect.categoryOptions.building')}</Link>
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.categorySelect.categoryOptions.companyAndOffice')}</Link>
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.categorySelect.categoryOptions.photography')}</Link>
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.categorySelect.categoryOptions.graphics')}</Link>
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.categorySelect.categoryOptions.tutoring')}</Link>
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.categorySelect.categoryOptions.bookkeeping')}</Link>
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.categorySelect.categoryOptions.marketingAndAdvertising')}</Link>
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.categorySelect.categoryOptions.repairAndService')}</Link>
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.categorySelect.categoryOptions.garden')}</Link>
        </div>
        <div className="footer-top__row">
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.categorySelect.categoryOptions.housework')}</Link>
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.categorySelect.categoryOptions.law')}</Link>
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.categorySelect.categoryOptions.programming')}</Link>
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.categorySelect.categoryOptions.translations')}</Link>
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.categorySelect.categoryOptions.transport')}</Link>
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.categorySelect.categoryOptions.workshopServices')}</Link>
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.categorySelect.categoryOptions.bandsAndMusic')}</Link>
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.categorySelect.categoryOptions.others')}</Link>
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
