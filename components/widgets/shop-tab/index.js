import React from 'react';
import tabStyles from './shop-tab.module.css';

const ShopTab = ({ activeTab }) => {
  const renderTabHeader = () => {
    switch (activeTab) {
      case 'jewelry':
        return 'Jewelery';

      case 'men-cloth':
        return "Men's Cloths";

      case 'female-cloth':
        return "Women's Cloths";

      case 'electronics':
        return 'Electronics';
      default:
        return 'All Products';
    }
  };
  return (
    <section
      className={[tabStyles.tab_container, 'mt-3 mb-3 container'].join(' ')}
    >
      <div>
        <h4>{renderTabHeader()}</h4>
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
