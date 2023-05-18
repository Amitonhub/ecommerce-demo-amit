import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonComponent: React.FC = () => {
    return (
        <div>
            <Skeleton width={300} height={200} />
        </div>
    );
};

export default SkeletonComponent;
