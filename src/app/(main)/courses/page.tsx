import { cache } from "react";
import { getCourses } from "@/index"; // Adjust the path as needed
import { List } from "@/app/(main)/courses/list"; // Adjust the path as needed

// Define the return type for getCourses if not already defined
type Course = {
    id: number;
    name: string;
    // Add other course properties as needed
};

// Cache the getCourses function
const getCachedCourses = cache(async () => {
    return getCourses();
});

const CoursesPage = async () => {
    // Fetch user data (courses)
    const courses = await getCachedCourses();

    return (
        <div className="h-full max-w-[912px] px-3">
            <h1 className="font-bold text-2xl text-slate-700 mb-6">
                Courses
            </h1>
            <List
                courses={courses}
                activeCourseID={1} // Fixed prop name to match List component
            />
        </div>
    );
};

export default CoursesPage;