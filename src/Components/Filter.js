
const Filter = ({filterData, category, setCategory}) => {
    return (
        <div className="filterBar w-[11/12] bg-bgDark2 py-4 mx-auto flex flex-wrap justify-center items-center gap-4">
            {
                filterData.map( (data) => {
                    return (
                        <button onClick={() => setCategory(data.title)} key={data.id} 
                        className={`text-lg px-2 py-1 rounded-md font-medium
                        text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
                        ${category === data.title ?
                        "bg-opacity-60 border-white" : 
                        "bg-opacity-40 border-transparent"}`}>
                            {data.title}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Filter;