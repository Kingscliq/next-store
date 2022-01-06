import React from 'react';
import Link from 'next/link';
import listStyles from './list-item.module.css';
import Badge from '../badge';

const ListItem = ({
  href,
  linkText,
  icon,
  className,
  onClick,
  badgeLabel,
  handleIconClick,
}) => {
  return (
    <li
      className={[listStyles.nav_links, `${className}`].join(' ')}
      onClick={onClick}
    >
      {linkText && (
        <div className={listStyles.link_text}>
          <Link href={href}>
            <a>{linkText}</a>
          </Link>
        </div>
      )}
      {icon && (
        <Link href={href}>
          <>
            <div className={listStyles.link_icon_container}>
              {badgeLabel && (
                <div className={listStyles.link_badge}>
                  <Badge label={badgeLabel} />
                </div>
              )}
              <div className={listStyles.link_icon} onClick={handleIconClick}>
                {icon}
              </div>
            </div>
          </>
        </Link>
      )}
    </li>
  );
};

export default ListItem;
