import FilterBy from './FiltersBy';
import Header from './Header'
import { useSelector, useDispatch } from "react-redux";
import JobCard from './JobCard';
import useFetch from '../utils/useFetch';
const MainBody = () => {
 
  const user = useSelector(store => store.auth);
 
  const currentTheme = useSelector(store => store.appTheme.mytheme);
  
  const jobInfo = useFetch();

    return <div className={"w-full " + currentTheme}>
        <Header />
        <div className="px-4 py-10">
          <span className="text-center p-2">
            {user.userInfo && <h1>
                Welcome {user.userInfo.displayName}
              </h1>}
            <p className="dark:text-white">
              If you are looking for your dream Job then you are at the right place.<br />Expore the jobs by applying below filters
            </p>
          </span>
          <FilterBy />
          <JobCard />
        </div>
      </div>;
}

export default MainBody;