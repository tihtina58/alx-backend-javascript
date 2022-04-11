export default function getListStudentIds(getListStudents)
{
    if (Array.isArray(getListStudents)) {
	const idList = getListStudents.map((getListStudents) => getListStudents.id);
	return idList;
    }
    return [];
}
