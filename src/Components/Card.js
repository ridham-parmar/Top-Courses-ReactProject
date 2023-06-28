import React, { useState } from "react";
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({course, likedCourses, setLikedCourses}) => {
    // console.log(course)
    const [likedIcon, setLikedIcon] = useState(false) ;

    function likeHandler () {
        if(likedCourses.includes(course.id)) {
        //    setLikedCourses((prev) => prev.filter((cid) => cid !== course.id)) ;
            setLikedCourses(likedCourses.filter((cid) => cid !== course.id)) ;
            toast.warning("Like Removd") ;
            setLikedIcon(false) ;
        } else {
            if(likedCourses.length === 0) {
                setLikedCourses([course.id]) ;
            } else {
                setLikedCourses([...likedCourses, course.id]) ;
            }
            toast.success("Liked") ;
            setLikedIcon(true) ;
        }
    }

    return (
        <div className="card w-[300px] bg-bgDark overflow-hidden bg-opacity-80 rounded-md">
            <div className="relative">
                <img src={course.image.url} alt={course.image.alt}></img>

                <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
                        grid place-items-center'>
                    <button onClick={likeHandler}>
                        {
                            likedIcon ? <FcLike fontSize="1.75rem"/> : <FcLikePlaceholder fontSize="1.75rem"/>
                        }
                    </button>
                </div>
            </div>

            <div className="p-4 ">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className='mt-2 text-white'>
                    {
                        (course.description).length > 100 ?
                        (course.description).substring(0,100) + "..." :
                        (course.description)
                    }
                </p>
            </div>
        </div>
    )
}

export default Card;