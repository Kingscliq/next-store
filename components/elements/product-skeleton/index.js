import Skeleton from 'react-loading-skeleton';

export const ProductSkeleton = () => {
  return (
    <div className="category-section container" style={{ marginTop: '40px' }}>
      <div>
        <Skeleton height={223} />
        <br />
        <Skeleton height={20} />
      </div>
      <div>
        <Skeleton height={223} />
        <br />
        <Skeleton height={20} />
      </div>
      <div>
        <Skeleton height={223} />
        <br />
        <Skeleton height={20} />
      </div>
      <div>
        <Skeleton height={223} />
        <br />
        <Skeleton height={20} />
      </div>
      <div>
        <Skeleton height={223} />
        <br />
        <Skeleton height={20} />
      </div>
      <div>
        <Skeleton height={223} />
        <br />
        <Skeleton height={20} />
      </div>
      <div>
        <Skeleton height={223} />
        <br />
        <Skeleton height={20} />
      </div>
      <div>
        <Skeleton height={223} width={300} />
        <br />
        <Skeleton height={20} width={200} />
      </div>
    </div>
  );
};
