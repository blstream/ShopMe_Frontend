import React from 'react';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = props => (
  <footer>
    <div className="footer-top">
      <div className="footer-top__headers">
        <h3 className="footer-top--h3">{props.t('components.UI.footer.headers.categories')}</h3>
        <span />
        <h3 className="footer-top--h3">{props.t('components.UI.footer.headers.aboutUs')}</h3>
        <h3 className="footer-top--h3">{props.t('components.UI.footer.headers.exhibitor')}</h3>
      </div>
      <div className="footer-top__columns">
        <div className="footer-top__row">
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.footer.categoryNames.construction')}</Link>
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.footer.categoryNames.office')}</Link>
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.footer.categoryNames.photography')}</Link>
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.footer.categoryNames.graphics')}</Link>
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.footer.categoryNames.privateLessons')}</Link>
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.footer.categoryNames.bookkeeping')}</Link>
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.footer.categoryNames.marketing')}</Link>
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.footer.categoryNames.repair')}</Link>
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.footer.categoryNames.garden')}</Link>
        </div>
        <div className="footer-top__row">
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.footer.categoryNames.housework')}</Link>
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.footer.categoryNames.law')}</Link>
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.footer.categoryNames.programming')}</Link>
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.footer.categoryNames.translations')}</Link>
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.footer.categoryNames.transport')}</Link>
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.footer.categoryNames.workshop')}</Link>
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.footer.categoryNames.music')}</Link>
          <Link href="/" to="/" className="footer-top__row--link">{props.t('components.UI.footer.categoryNames.other')}</Link>
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
