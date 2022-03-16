import React, { useState } from 'react';
import Image from 'next/image';
import {
  electronicsIcon,
  femaleClothIcon,
  jewelryIcon,
  menCloth,
  allIcon,
} from '../../../../assets/icons';
import tabStyles from './tab-group.module.css';

const TabGroup = ({ activeTab, setActiveTab }) => {
  console.log(activeTab);
  return (
    <header>
      <ul className={[tabStyles.tab_container, `container`].join(' ')}>
        <li
          className={[
            tabStyles.tab_item,
            `${activeTab === 'all' ? tabStyles.active_tab : null}`,
          ].join(' ')}
          onClick={() => setActiveTab('all')}
        >
          <div className={tabStyles.tabImg}>
            <Image src={allIcon} />
          </div>
          <div>ALL</div>
        </li>
        <li
          className={[
            tabStyles.tab_item,
            `${activeTab === 'jewelry' ? tabStyles.active_tab : null}`,
          ].join(' ')}
          onClick={() => setActiveTab('jewelry')}
        >
          <div className={tabStyles.tabImg}>
            <Image src={jewelryIcon} />
          </div>
          <div>JEWELRY</div>
        </li>
        <li
          className={[
            tabStyles.tab_item,
            `${activeTab === 'female-cloth' ? tabStyles.active_tab : null}`,
          ].join(' ')}
          onClick={() => setActiveTab('female-cloth')}
        >
          <div className={tabStyles.tabImg}>
            <Image src={femaleClothIcon} />
          </div>
          <div>FEMALE CLOTHES</div>
        </li>
        <li
          className={[
            tabStyles.tab_item,
            `${activeTab === 'men-cloth' ? tabStyles.active_tab : null}`,
          ].join(' ')}
          onClick={() => setActiveTab('men-cloth')}
        >
          <div className={tabStyles.tabImg}>
            <Image src={menCloth} />
          </div>
          <div>MENS CLOTHES</div>
        </li>
        <li
          className={[
            tabStyles.tab_item,
            `${activeTab === 'electronics' ? tabStyles.active_tab : null}`,
          ].join(' ')}
          onClick={() => setActiveTab('electronics')}
        >
          <div className={tabStyles.tabImg}>
            <Image src={electronicsIcon} />
          </div>
          <div>ELECTRONICS</div>
        </li>
      </ul>
    </header>
  );
};

export default TabGroup;
