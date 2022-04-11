export default function getStudentsByLocation(students, city) {
    if (Array.isArray(students)) {
	const studentslocation = students.filter((student) => student.location === city);
	return studentsLocation;
    }
    return [];
}
