import { IUserSelect } from "./user.interface";

export const userFilterableFields = [
	'searchTerm',
	'role',
	'email',
];

export const userSearchableFields = [
	'email',
	'role',

];


export const userSelect: IUserSelect = {
	id: true,
	name: true,
	email: true,
	role: true,

};