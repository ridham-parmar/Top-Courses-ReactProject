import Card from "./Card";
import { useState } from "react";

const Cards = ({urlData, category}) => {
    const [likedCourses, setLikedCourses] = useState([]) ;

    function getCourses() {
        if(category === "All") {
            const allCourses = [] ;
                Object.values(urlData).forEach((subCourses) => {
                subCourses.forEach((course) => {
                allCourses.push(course);
                })
            })
            return allCourses; 
        } else {
           return urlData[category] ;
        }
    }
    // console.log('printing all courses');
    // console.log(allCourses) 
    return (
        <div className="cards w-[11/12] max-w-[1200px] flex flex-wrap justify-center mx-auto gap-4 pb-8">
            {
                getCourses().map((course) => {
                    return (
                        <Card course={course} 
                        key={course.id}
                        likedCourses={likedCourses} 
                        setLikedCourses={setLikedCourses}
                        />
                    )
                })
            }
        </div>
    )
}

export default Cards;