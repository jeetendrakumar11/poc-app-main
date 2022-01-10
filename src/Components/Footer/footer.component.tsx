import React, { useState, Fragment } from 'react';
import styles from './footer.module.css';
// import { Disclaimer, DISCLAIMER_TYPE, PrivacyAndPolicy, TermsOfUse, SupportedBrowser } from '..';

export const Footer: React.FC = (): JSX.Element => {
	const {
		footerContainer,
		footerNav,
		footerListContainer,
		footerList,
		copyRightText,
		logoTitle,
		logoSpan,
		footerLinkMid,
	} = styles;
	const year = new Date().getFullYear();
	const [hide, setHide] = useState(false);
	// const [id, setId] = useState(DISCLAIMER_TYPE.PrivacyAndPolicy);

	// const handleToggle = () => {
	// 	setHide(!hide);
	// };

	// const handleClick = (id: number) => {
	// 	setId(id);
	// 	handleToggle();
	// };

	// const renderContent = () => {
	// 	switch (id) {
	// 		case DISCLAIMER_TYPE.PrivacyAndPolicy:
	// 			return <PrivacyAndPolicy />;
	// 		case DISCLAIMER_TYPE.TermsOfUse:
	// 			return <TermsOfUse />;
	// 		case DISCLAIMER_TYPE.SupportedBrowser:
	// 			return <SupportedBrowser />;
	// 		default:
	// 			return <PrivacyAndPolicy />;
	// 	}
	// };

	return (
		<Fragment>
			<div className={footerContainer}>
				<nav className={footerNav}>
					<ul className={footerListContainer}>
						<li  className={footerList}>
							Privacy and Security Policy
						</li>
						<li className={`${footerList} ${footerLinkMid}`}>
							Terms of Use
						</li>
						<li className={footerList}>
							Supported Browsers
						</li>
					</ul>
					<p className={copyRightText}>Copyright © {year} AssetMark, Inc. All rights reserved</p>
				</nav>
				<h1 className={logoTitle}>
					<span className={logoSpan}>ASSET</span>MARK
				</h1>
			</div>
			
		</Fragment>
	);
};
