import StaffMember from '../../model/StaffMember';


export const LOAD_STAFF = 'LOAD_STAFF';

export const loadStaff = () => {
    return async dispatch => {
        try {
            const response = await fetch('https://richmond-school-app.firebaseio.com/staffmembers.json');
            
            if (!response.ok) {
                throw new Error('Something went wrong!')
            }

            const staffData = await response.json();
            //console.log(staffData)
            const loadedStaff = [];
            staffData.forEach(obj => {
                loadedStaff.push(new StaffMember(
                    obj.index,
                    obj.firstName,
                    obj.lastName,
                    obj.jobTitle,
                    obj.extension,
                    obj.emailAddress
                ));
            }) 
            dispatch({type: LOAD_STAFF, staff: loadedStaff})
        } catch (err) {
            throw err;
        }
    };
};