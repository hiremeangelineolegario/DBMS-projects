

//List of employees and the department(s) they work for
db.employee.aggregate(
    [
        {"$unwind" : "$worksFor"},
        {"$project" : {
            _id: 0,
            "Employee ID" : "$_id",
            "Employee Name" : "$employeeName",
            "Department" : "$worksFor.departmentName"
                      }
        }
    ]
).pretty();


//List of employees and their manager (show the employee even if they do not have a manager)
db.employee.aggregate(
    [
      {
        $unwind: {
          path: "$manages",
          preserveNullAndEmptyArrays: true
        }
      },
        {"$project" : {
            _id: 0,
            "Employee ID" : "$_id",
            "Employee Name" : "$employeeName",
            "Manager" : "$manages.Name"
                      }
        }
    ]
).pretty();



//List of employees having an ”a” in their name
db.employee.aggregate([
  {
    $match: {
      "employeeName": /a/
    }
  },
  {
    $project: {
          _id: 0,
          "Employee Name " : "$employeeName"
    }
  }
]).pretty();