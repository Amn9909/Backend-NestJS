



const findMonthWiseSalary = (month : any[], MonthWiseSalary : any[], minimumSalary : number, maximumSalary : number) : any[] => {
    const ArrayOfSalaryId : any[] = [];
    for (let i = 0; i < MonthWiseSalary.length; i++) {
        for (let j = 0; j < month.length; j++) {
            if (MonthWiseSalary[i].month == month[j] && MonthWiseSalary[i].ammount >= minimumSalary && MonthWiseSalary[i].ammount <= maximumSalary) {
                let tempData : any = MonthWiseSalary[i].salId;
                let salamnt : any = MonthWiseSalary[i].ammount;
                let tempMonth : any = month[j];
                ArrayOfSalaryId.push({ salId: tempData, ammount: salamnt , month :tempMonth});

            }
        }
    }
    return ArrayOfSalaryId;
}

const NewFindEmployeeWithThatSalId = (SalaryData, MapingSaleryToEmployee) => {
    const ArrayOfEmpId : any[] = [];
    for (let i = 0; i < SalaryData.length; i++) {
        for (let j = 0; j < MapingSaleryToEmployee.length; j++) {
            if (SalaryData[i].salId == MapingSaleryToEmployee[j].salId) {

                let empid : any = MapingSaleryToEmployee[j].empid;
                let ammount : any = SalaryData[i].ammount;
                let tempMonth : any = SalaryData[i].month;
                ArrayOfEmpId.push({ empid, ammount, month : tempMonth });
            }
        }
    }
    return ArrayOfEmpId;
}

const NewFindEmployeeDetailsWithEmpid = (EmployeeId, EmployeeData): any[] => {
    const ArrayOfEmployeeDetails : any[] = [];
    for (let i = 0; i < EmployeeId.length; i++) {
        for (let j = 0; j < EmployeeData.length; j++) {
            if (EmployeeId[i].empid == EmployeeData[j].empid) {
                let empid : any[] = EmployeeId[i].empid;
                let ammount : any[] = EmployeeId[i].ammount;
                let tempMonth : any[] = EmployeeId[i].month;
                let empName : any [] = EmployeeData[j].empName;
                ArrayOfEmployeeDetails.push({ empid, empName, month : tempMonth, ammount });
            }
        }
    }
    return ArrayOfEmployeeDetails;

}




const NewMainFunctionToManageSaleryDetails = (month : string[] , minimumSalary : number, maximumSalary : number) : any => {

    // Creating Details of Employees _______________________________________________________________

    const EmployeeData : any[] = [
        {
            empid: "emp1",
            empName: "Aman kazi"
        },
        {
            empid: "emp2",
            empName: "Azam kazi"
        },
        {
            empid: "emp3",
            empName: "nihal"
        }
    ];

    // Maping Details of Employees with Salery _____________________________________________________

    const MapingSaleryToEmployee : any[] = [
        {
            empid: "emp1",
            salId: "JanSal1"
        },
        {
            empid: "emp2",
            salId: "JanSal2"
        },
        {
            empid: 'emp3',
            salId: "JanSal3"
        },
        {
            empid: "emp1",
            salId: "FebSal1"
        },
        {
            empid: "emp2",
            salId: "FebSal2"
        },
        {
            empid: 'emp3',
            salId: "FebSal3"
        },
        {
            empid: "emp1",
            salId: "MarSal1"
        },
        {
            empid: "emp2",
            salId: "MarSal2"
        },
        {
            empid: 'emp3',
            salId: "MarSal3"
        }
    ];

    // Maping salery to the month with ammount of salery

    const MonthWiseSalary : any[] = [
        {
            salId: "JanSal1",
            month: "jan",
            ammount: 1100
        },
        {
            salId: "JanSal2",
            month: "jan",
            ammount: 1401
        },
        {
            salId: "JanSal3",
            month: "jan",
            ammount: 1501
        },
        {
            salId: "FebSal1",
            month: "feb",
            ammount: 1042
        },
        {
            salId: "FebSal2",
            month: "feb",
            ammount: 1042
        },
        {
            salId: "FebSal3",
            month: "feb",
            ammount: 1032
        },
        {
            salId: "MarSal1",
            month: "mar",
            ammount: 1303
        },
        {
            salId: "MarSal2",
            month: "mar",
            ammount: 1053
        },
        {
            salId: "MarSal3",
            month: "mar",
            ammount: 1633
        },
        {
            salId: "AprSal1",
            month: "apr",
            ammount: 1404
        },
        {
            salId: "AprSal2",
            month: "apr",
            ammount: 1734
        },
        {
            salId: "AprSal3",
            month: "apr",
            ammount: 1544
        },
        {
            salId: "MaySal1",
            month: "may",
            ammount: 1415
        },
        {
            salId: "MaySalal2",
            month: "may",
            ammount: 1047
        },
        {
            salId: "MaySalal3",
            month: "may",
            ammount: 1502
        },
        {
            salId: "JuneSal1",
            month: "june",
            ammount: 1055
        },
        {
            salId: "JuneSal2",
            month: "june",
            ammount: 1206
        },
        {
            salId: "JuneSal3",
            month: "june",
            ammount: 1051
        }
    ];


    // Calling of function 

    const SalaryData = findMonthWiseSalary(month, MonthWiseSalary, minimumSalary, maximumSalary);
    // console.log("salerydata ",SalaryData);
    const EmployeeId = NewFindEmployeeWithThatSalId(SalaryData, MapingSaleryToEmployee);
    // console.log("employeeid ",EmployeeId);
    const EmployeeDetails = NewFindEmployeeDetailsWithEmpid(EmployeeId, EmployeeData);
    console.log(EmployeeDetails);



}

NewMainFunctionToManageSaleryDetails(["jan", "feb", "mar"], 1000, 1700)