import React from 'react';

import ArticlesList from '../components/ArticlesList';
import articleContent from './articles-content';


const ArticlesListPage = () => {
    return (
        <>
         <h1>Articles</h1>
        <ArticlesList articles={articleContent} />
        </>
    )
}

export default ArticlesListPage;
