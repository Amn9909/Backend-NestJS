






const GetMonthData = (month, MonthWiseSalary) =>{




}





const MainFunction = (month , minimumSalary, maximumSalary) =>{








// Employee data array

    const EmployeeData = [
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

    const MapingSaleryToEmployee = [
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

    const MonthWiseSalary = [
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


    const MonthData = GetMonthData(month, MonthWiseSalary);
    console.log(MonthData);


}

MainFunction(month , minimumSalary, maximumSalary);