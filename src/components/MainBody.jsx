import FilterBy from './FiltersBy';
import Header from './Header'
import { useSelector } from 'react-redux';

const MainBody = () => {
  const user = useSelector(store => store.auth);

    return <div className="container ">
        <Header />
        <div className="px-4 py-10">
          {user.userInfo && <h1>
            Welcome {user.userInfo.displayName}
          </h1>}
          <FilterBy />
        </div>
      </div>;
}

export default MainBody;