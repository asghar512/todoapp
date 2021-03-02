import React from 'react';

export default function LinkCard({ link, refreshLinks }) {
    const archiveLink = async () => {
        link.archived = true;
        try {
            await fetch('/.netlify/functions/updateLink', {
                method: 'PUT',
                body: JSON.stringify(link),
            });
            refreshLinks();
        } catch (error) {
            console.error('AHHH', error);
        }
    };

    const deleteLink = async () => {
        const id = link._id;
        try {
            await fetch('/.netlify/functions/deleteLink', {
                method: 'DELETE',
                body: JSON.stringify({ id }),
            });
            refreshLinks();
        } catch (error) {
            console.error('AHHH', error);
        }
    };
    return (
        <div className="card2" id="all" style={{textTransform:'capitalize'}}>
            <div className="card-header">{link.name}</div>
            <div className="card-body1">
                <h6 className="h6" >{link.url }</h6>
                <p className="p">{link.description}</p>
            </div>
            <div className="card-footer">
                <button className="btn d" onClick={archiveLink}>
                    Done
                </button>
                <button className="btn d" onClick={deleteLink}>
                    Delete
                </button>
            </div>
        </div>
    );
}