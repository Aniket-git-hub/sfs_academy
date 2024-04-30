import React from 'react';

function DocumentList({ documents }) {
    const filteredDocuments = documents.filter(document => {
        return document.categories[0].documentCategory.categoryId == 7;
    });


    const groupedDocuments = {};
    filteredDocuments.forEach(document => {
        const categoryName = document.categories[0].documentCategory.name;
        if (!groupedDocuments[categoryName]) {
            groupedDocuments[categoryName] = [];
        }
        groupedDocuments[categoryName].push(document);
    });


    return (
        <div>
            {Object.entries(groupedDocuments).map(([categoryName, documents]) => (
                <div key={categoryName}>
                    <h2>Category: {categoryName}</h2>
                    <ul>
                        {documents.map(document => (
                            <li key={document.id}>
                                <a href={`http://localhost:3000/api/document/${document.id}`} target="_blank" rel="noopener noreferrer">{document.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default DocumentList;
