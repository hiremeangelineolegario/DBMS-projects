use('employeeRecordsDB');

db.employee.drop(); //To Remove if exisst

db.employee.insertMany([
    { '_id' : 1, 'employeeName' : 'Deneen Willmon', 'employeeEmail' : 'deneen.willmon@gmail.com', 'employeePhone' : '09087878889', 
    worksFor : {
        'departmentName': 'Maintenance',
        'role' : 'Engineer',
    }},
    { '_id' : 2, 'employeeName' : 'Lashay Dann', 'employeeEmail' : 'lashay.dann@gmail.com', 'employeePhone' : '08041971660',
    worksFor : {
        'departmentName': 'Accounting',
        'role' : 'Head Accountant',
    }},
    { '_id' : 3, 'employeeName' : 'Kallie Jolliff', 'employeeEmail' : 'kallie@ymail.com', 'employeePhone' : '09171287291',
    worksFor : {
        'departmentName': 'Maintenance',
        'role' : 'Technician',
    },
    manages : [
        { "_id": 1, "Name": "Deneen Willmon" }
    ]},
    { '_id' : 4, 'employeeName' : 'Starla Priebe', 'employeeEmail' : 'starlap@yahoo.com', 'employeePhone' : '06503382292',
    worksFor : {
        'departmentName': 'Development',
        'role' : 'Coder',
    },
    manages : [
        { "_id": 1, "Name": "Deneen Willmon" }
    ]},

    { '_id' : 5, 'employeeName' : 'Jannette Basnight', 'employeeEmail' : 'jannette012@hotmail.com', 'employeePhone' : '07784902817',
    worksFor : {
        'departmentName': 'Development',
    }},
]);
