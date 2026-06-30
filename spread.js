let emp={
    eid:101,
    ename:"rahul",
    email:"rg@gmail.com"
}

    let details={
        email:"rg@gmail.com",
        esal:45000,
        loc:"bglr"
    }

    let emp_details={
        ...emp,...details
    }
    console.log(emp_details);