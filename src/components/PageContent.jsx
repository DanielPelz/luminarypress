import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPageContent } from '../actions/pageContentActions';

const PageContent = ({ content, loading, error, fetchPageContent, postId }) => {
  useEffect(() => {
    fetchPageContent(postId);
  }, [fetchPageContent, postId]);

  // Handle errors
  if (error) {
    return <p>Error: {error}</p>;
  }

  // Hier werden die Inhalte der Seiten gerendert und die Fehlermeldungen und Ladeanzeige behandelt
  return (
    <div>
      <h2>Page Content</h2>
      {loading && <p>Loading...</p>}
      {content.map((page,index) => (
        <div key={index}>
          <h3>{page.title.rendered}</h3>
          <p>{page.content.rendered}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  content: state.pageContent.content,
  loading: state.pageContent.loading,
  error: state.pageContent.error,
});

const mapDispatchToProps = {
  fetchPageContent,
};

export default connect(mapStateToProps, mapDispatchToProps)(PageContent);