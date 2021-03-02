import React from 'react';
import './index.css';

import LinkCard from './LinkCard';
export default function LinkList({ links, refreshLinks }) {
    return (
        <div className="list">


            {links &&
                links
                    .filter((link) => !link.archived)
                    .map((link) => (
                        <LinkCard
                            key={link._id}
                            link={link}
                            refreshLinks={refreshLinks}
                        />
                    ))}

        </div>
    );
}