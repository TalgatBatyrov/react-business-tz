import './App.css';
import { useEffect, useState } from 'react';
import { useSearchPosts } from './Hooks/usePosts';
import { getPosts } from './store/mainSlice';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from './components/Pagination/Pagination';
import SearchBar from './components/SearchBar/SearchBar';
import Table from './components/Table/Table';

function App() {
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const { posts, currentPage, isLoading } = useSelector(state => state.main);
  const sortAndSearchPosts = useSearchPosts(posts, filter.sort, filter.query);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentPage])

  return (
    <div className="container">
      <SearchBar filter={filter} setFilter={setFilter} />
      <Table filter={filter} setFilter={setFilter} isLoading={isLoading} posts={sortAndSearchPosts} />
      <Pagination currentPage={currentPage} />
    </div>
  );
}

export default App;