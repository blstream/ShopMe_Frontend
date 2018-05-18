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
          <Link
            to={{ pathname: '/search', search: '?category=building', category: 'building' }}
            className="footer-top__row--link"
          >
            {props.t('components.UI.categorySelect.categoryOptions.building')}
          </Link>
          <Link
            to={{ pathname: '/search', search: '?category=photography', category: 'photography' }}
            className="footer-top__row--link"
          >
            {props.t('components.UI.categorySelect.categoryOptions.photography')}
          </Link>
          <Link
            to={{ pathname: '/search', search: '?category=companyAndOffice', category: 'companyAndOffice' }}
            className="footer-top__row--link"
          >
            {props.t('components.UI.categorySelect.categoryOptions.companyAndOffice')}
          </Link>
          <Link
            to={{ pathname: '/search', search: '?category=graphics', category: 'graphics' }}
            className="footer-top__row--link"
          >
            {props.t('components.UI.categorySelect.categoryOptions.graphics')}
          </Link>
          <Link
            to={{ pathname: '/search', search: '?category=tutoring', category: 'tutoring' }}
            className="footer-top__row--link"
          >
            {props.t('components.UI.categorySelect.categoryOptions.tutoring')}
          </Link>
          <Link
            to={{ pathname: '/search', search: '?category=bookkeeping', category: 'bookkeeping' }}
            className="footer-top__row--link"
          >
            {props.t('components.UI.categorySelect.categoryOptions.bookkeeping')}
          </Link>
          <Link
            to={{ pathname: '/search', search: '?category=marketingAndAdvertising', category: 'marketingAndAdvertising' }}
            className="footer-top__row--link"
          >
            {props.t('components.UI.categorySelect.categoryOptions.marketingAndAdvertising')}
          </Link>
          <Link
            to={{ pathname: '/search', search: '?category=repairAndService', category: 'repairAndService' }}
            className="footer-top__row--link"
          >
            {props.t('components.UI.categorySelect.categoryOptions.repairAndService')}
          </Link>
          <Link
            to={{ pathname: '/search', search: '?category=garden', category: 'garden' }}
            className="footer-top__row--link"
          >
            {props.t('components.UI.categorySelect.categoryOptions.garden')}
          </Link>
        </div>
        <div className="footer-top__row">
          <Link
            to={{ pathname: '/search', search: '?category=housework', category: 'housework' }}
            className="footer-top__row--link"
          >
            {props.t('components.UI.categorySelect.categoryOptions.housework')}
          </Link>
          <Link
            to={{ pathname: '/search', search: '?category=law', category: 'law' }}
            className="footer-top__row--link"
          >
            {props.t('components.UI.categorySelect.categoryOptions.law')}
          </Link>
          <Link
            to={{ pathname: '/search', search: '?category=programming', category: 'programming' }}
            className="footer-top__row--link"
          >
            {props.t('components.UI.categorySelect.categoryOptions.programming')}
          </Link>
          <Link
            to={{ pathname: '/search', search: '?category=translations', category: 'translations' }}
            className="footer-top__row--link"
          >
            {props.t('components.UI.categorySelect.categoryOptions.translations')}
          </Link>
          <Link
            to={{ pathname: '/search', search: '?category=transport', category: 'transport' }}
            className="footer-top__row--link"
          >
            {props.t('components.UI.categorySelect.categoryOptions.transport')}
          </Link>
          <Link
            to={{ pathname: '/search', search: '?category=workshopServices', category: 'workshopServices' }}
            className="footer-top__row--link"
          >
            {props.t('components.UI.categorySelect.categoryOptions.workshopServices')}
          </Link>
          <Link
            to={{ pathname: '/search', search: '?category=bandsAndMusic', category: 'bandsAndMusic' }}
            className="footer-top__row--link"
          >
            {props.t('components.UI.categorySelect.categoryOptions.bandsAndMusic')}
          </Link>
          <Link
            to={{ pathname: '/search', search: '?category=others', category: 'others' }}
            className="footer-top__row--link"
          >
            {props.t('components.UI.categorySelect.categoryOptions.others')}
          </Link>
        </div>
        <div className="footer-top__row">
          <Link to="/" className="footer-top__row--link">{props.t('components.UI.footer.aboutUs.privacy')}</Link>
          <Link to="/" className="footer-top__row--link">{props.t('components.UI.footer.aboutUs.statute')}</Link>
          <Link to="/" className="footer-top__row--link">{props.t('components.UI.footer.aboutUs.help')}</Link>
          <Link to="/" className="footer-top__row--link">{props.t('components.UI.footer.aboutUs.shopping')}</Link>
          <Link to="/" className="footer-top__row--link">{props.t('components.UI.footer.aboutUs.sale')}</Link>
        </div>
        <div className="footer-top__row">
          <Link to="/" className="footer-top__row--link">{props.t('components.UI.footer.forExhibitors.seller')}</Link>
          <Link to="/" className="footer-top__row--link">{props.t('components.UI.footer.forExhibitors.conditions')}</Link>
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
