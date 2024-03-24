import { useDispatch } from "react-redux";
import {
  toggleLoginWidget,
} from "../features/authSlice";
const JobCard = () => {
  const dispatch = useDispatch()
  const showLoginBlock = () => {
    dispatch(toggleLoginWidget());
  };
  return <div className="w-full -md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-primary-400">
          Jobs
        </h5>
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 ">
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate ">
                  Senior React Developer
                </p>
                <p className="text-sm text-gray-500 truncate ">
                  Yash Technology
                </p>
                <p className="text-sm text-gray-500 truncate ">
                  India (Remote)
                </p>
                <p className="text-sm text-gray-500 truncate ">
                  Required skills: React, Javascript, Redux
                </p>

                <button type="button" onClick={showLoginBlock} className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 text-center ">
                  Login to Apply
                </button>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                <a href="#" className="text-sm font-medium text-blue-600 hover:underline ">
                  Visit Website
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>;
};

export default JobCard;
