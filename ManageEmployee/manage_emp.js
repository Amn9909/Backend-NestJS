const empData =
    [
        {
            empid: 1,
            empName: "aman kazi",
            empSal: 10000,
        },
        {
            empid: 2,
            empName: "Azam kazi",
            empSal: 10000,
        },
        {
            empid: 3,
            empName: "irfan kazi",
            empSal: 10000,
        },
        {
            empid: 4,
            empName: "nihal bhai",
            empSal: 10000,
        },
        {
            empid: 5,
            empName: "fifth employee",
            empSal: 10000,
        }
    ]


const leaveData = [
    {
        empid: 1,
        leaveStart: 10,
        leaveEnd: 12
    },
    {
        empid: 2,
        leaveStart: 8,
        leaveEnd: 15
    },
    {
        empid: 1,
        leaveStart: 5,
        leaveEnd: 7
    },
    {
        empid: 4,
        leaveStart: 2,
        leaveEnd: 10
    }
];

const leaveMaster = 15;


// calculate totle leave function ************************************************************


const CalculateTotalleavesTakken = (empid) => {
    let totalLeavesLreadyTakken = 0;
    for (let i = 0; i < leaveData.length; i++) {
        if (leaveData[i].empid == empid) {
            temp = (leaveData[i].leaveEnd - leaveData[i].leaveStart);
            totalLeavesLreadyTakken = totalLeavesLreadyTakken + temp;
            // console.log("total leaves already takken ", totalLeavesLreadyTakken);
        } 
    }
    return totalLeavesLreadyTakken;


}


// calculate new totle leave function ************************************************************


const TotalLeaveRequired = (leaveStart, leaveEnd) => {
    totalLeaveReq = leaveEnd - leaveStart
    return totalLeaveReq;
    // console.log("how many new leaves are required ", totalLeaveReq);

}

// leave grant function ************************************************************

const  NewTotalOfLeaves = (LeaveReq, TotalleavesTakken) => {
    newtotal = LeaveReq + TotalleavesTakken;
    return newtotal;
    // console.log("total after new leave takken", newtotal)
}

// leave grant function ************************************************************

const GrantLeave = (newTotal, id, Start, leaveEnd) => {
    if (newTotal < leaveMaster) {
        leaveData.push({ empid : id, leaveStart : Start, leaveEnd })

        return ("leave Granted !")
    } else {
        return ("you can opt for paid leaves !")
    }

}









const ManageEmployeeLeaves = (empid, leaveStart, leaveEnd) => {


    let totalLeaveTakken = CalculateTotalleavesTakken(empid);
    console.log(" totalLeaveTakken ",totalLeaveTakken);
    let totalLeaveReq = TotalLeaveRequired(leaveStart, leaveEnd);
    console.log("totalLeaveReq ", totalLeaveReq);
    let newADD= NewTotalOfLeaves(totalLeaveTakken, totalLeaveReq);
    console.log("newADD ", newADD );
    const result  = GrantLeave(newADD ,empid, leaveStart, leaveEnd );

    return(result);

}


//---------------------------------






ManageEmployeeLeaves(1, 10, 12)

