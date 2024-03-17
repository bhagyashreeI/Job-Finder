import FilterBy from './FiltersBy';
import Header from './Header'
const MainBody = () => {
    return <div className="container ">
        <Header />
        <div className="px-4 py-10">
          <FilterBy />
        </div>
      </div>;
}

export default MainBody;