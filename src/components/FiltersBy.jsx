const FiltersBy = () => {
  return (<>
      <div className="grid gap-2 grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
        <div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Technology
            </label>
            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Technology" required />
          </div>
        </div>
        <div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Location
            </label>
            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Location" required />
          </div>
        </div>
        <div>
          <div>
            <label className="block mb-1 invisible">Purple</label>
            <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
              Search
            </button>
          </div>
        </div>
        <div>
        <div>
            <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" placeholder="Only Full-time" required />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Only Full-time
            </label>
          </div>
        </div>
      </div>
      
    </>
    )
}

export default FiltersBy;
