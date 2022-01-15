import React from 'react';
import tabStyles from './shop-tab.module.css';

const ShopTab = () => {
  return (
    <section
      className={[tabStyles.tab_container, 'mt-3 mb-3 container'].join(' ')}
    >
      <div>
        <h4>All Products</h4>
      </div>
      <div>
        <span>
          <strong>Sort By:</strong> &nbsp; Popularity
        </span>
      </div>
    </section>
  );
};

export default ShopTab;
