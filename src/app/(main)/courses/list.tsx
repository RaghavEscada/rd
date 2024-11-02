"use client";

// Instead of using InferModel, define the Course type explicitly
type Course = {
    id: number;
    name: string;
    // Add other course properties as needed
};

type Props = {
    courses: Course[];
    activeCourseID: number;
};

export const List = ({ courses, activeCourseID }: Props) => {
    return (
        <div className="w-full max-w-2xl">
            <ul className="space-y-2">
                {courses.map((course) => (
                    <li 
                        key={course.id}
                        className={`p-3 rounded-lg ${
                            course.id === activeCourseID 
                                ? 'bg-blue-50 border border-blue-200' 
                                : 'bg-white border border-gray-200'
                        }`}
                    >
                        <span className="font-medium">{course.name}</span>
                        {course.id === activeCourseID && (
                            <span className="ml-2 text-sm text-blue-600 font-medium">
                                (Active)
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List