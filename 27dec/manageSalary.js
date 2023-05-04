
// Get salids function ______________________________________________________________________________________________

const findMonthData = (month, MonthWiseSalery) => {
    const AccordingToMonthArr = [];
    for (let i = 0; i < MonthWiseSalery.length; i++) {
        if (MonthWiseSalery[i].month == month) {
            let tempmon = MonthWiseSalery[i];
            AccordingToMonthArr.push(tempmon);
        }

    }
    return AccordingToMonthArr;
}


// Get salery ID within the range function ______________________________________________________________________________________________

const findSaleryBetweenRange = (salRes, minSal, maxSal) => {
    const SalidArr = [];
    for (let i = 0; i < salRes.length; i++) {
        // console.log(salRes[i])
        if (salRes[i].ammount > minSal && salRes[i].ammount < maxSal) {
            // console.log("working here ")
            // console.log(salRes[i].salId);
            let tempData = salRes[i].salId;
            SalidArr.push(tempData);
        } else {
            return ("no saleries within that range !")
        }
    }
    return SalidArr;
}

// Get emp IDs function ______________________________________________________________________________________________


const GetEmpId = (salid, MapingSaleryToEmployee) => {
    const EmpIdData = [];
    for (let i = 0; i < salid.length; i++) {
        for (let j = 0; j < MapingSaleryToEmployee.length; j++) {
            if (salid[i] == MapingSaleryToEmployee[j].salId) {
                let tempData = MapingSaleryToEmployee[j].empid;
                EmpIdData.push(tempData);
            }
        }
    }
    return EmpIdData
}

// Get array of object according to all the data we want __________________________________________________________________

const DisplayData = (empids, EmployeeData) => {
    const FinalObj = [];
    for (let i = 0; i < empids.length; i++) {
        for (let j = 0; j < EmployeeData.length; j++) {
            if (empids[i] == EmployeeData[j].empid) {
                let tempres = EmployeeData[i];
                FinalObj.push(tempres);

            }

        }


    }
    return FinalObj;
}

// Fetch final salery of the Employees _______________________________________________________________

const FinalSal = (salid, salRes) => {
    const FinalSalObj = [];
    for (let i = 0; i < salid.length; i++) {
        for (let j = 0; j < salRes.length; j++) {
            if (salid[i] == salRes[j].salId) {
                let tempdata = salRes[j];
                FinalSalObj.push(tempdata);
            }
        }
    }
    return FinalSalObj;
}

// Converting ArrayOfObject to single object

const ConvertToObj = (display, finalSalery) => {
    NewObj = {};
    let newArr = display.concat(finalSalery);
    // console.log(newArr);
    for (let i = 0; i < newArr.length; i++) {
        Object.assign(NewObj, newArr[i]);
    }
    delete NewObj.salId;
    delete NewObj.month;
    return NewObj
    // return newArr
}









const MainFucntionToManageSaleryData = (month, minSal, maxSal) => {

    // Creating Details of Employees ___________________________________________________________________
    const EmployeeData = [
        {
            empid: 1,
            empName: "Aman kazi"
        },
        {
            empid: 2,
            empName: "Azam kazi"
        },
        {
            empid: 3,
            empName: "nihal"
        }
    ];

    // Maping Details of Employees with Salery ___________________________________________________________________

    const MapingSaleryToEmployee = [
        {
            empid: 1,
            salId: 1
        },
        {
            empid: 2,
            salId: 2
        },
        {
            empid: 3,
            salId: 3
        }
    ];

    // Maping salery to the month with ammount of salery

    const MonthWiseSalery = [
        {
            salId: 1,
            month: "jan",
            ammount: 1100
        },
        {
            salId: 2,
            month: "jan",
            ammount: 1401
        },
        {
            salId: 3,
            month: "jan",
            ammount: 1501
        },
        {
            salId: 1,
            month: "feb",
            ammount: 1042
        },
        {
            salId: 2,
            month: "feb",
            ammount: 1042
        },
        {
            salId: 3,
            month: "feb",
            ammount: 1032
        },
        {
            salId: 1,
            month: "mar",
            ammount: 1303
        },
        {
            salId: 2,
            month: "mar",
            ammount: 1053
        },
        {
            salId: 3,
            month: "mar",
            ammount: 1633
        },
        {
            salId: 1,
            month: "apr",
            ammount: 1404
        },
        {
            salId: 2,
            month: "apr",
            ammount: 1734
        },
        {
            salId: 3,
            month: "apr",
            ammount: 1544
        },
        {
            salId: 1,
            month: "may",
            ammount: 1415
        },
        {
            salId: 2,
            month: "may",
            ammount: 1047
        },
        {
            salId: 3,
            month: "may",
            ammount: 1502
        },
        {
            salId: 1,
            month: "june",
            ammount: 1055
        },
        {
            salId: 2,
            month: "june",
            ammount: 1206
        },
        {
            salId: 3,
            month: "june",
            ammount: 1051
        }
    ];
// Calling of functions _____________________________________________________________________________

    const salRes = findMonthData(month, MonthWiseSalery);
    // console.log(salRes);
    const salid = findSaleryBetweenRange(salRes, minSal, maxSal);
    // console.log(salid);
    const empids = GetEmpId(salid, MapingSaleryToEmployee);
    // console.log(empids);
    const display = DisplayData(empids, EmployeeData);
    // console.log(display);
    const finalSalery = FinalSal(salid, salRes);
    // console.log(finalSalery)
    const finalans = ConvertToObj(display, finalSalery);
    console.log(finalans);
}

MainFucntionToManageSaleryData("mar", 1000, 17000)
