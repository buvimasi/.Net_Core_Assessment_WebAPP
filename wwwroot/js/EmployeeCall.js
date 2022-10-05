$.get("http://localhost:7222/api/Employee", function (data, status) {

    let code = "";
    for (let x in data) {
        code += "<tr>"
        code += "<td>" + data[x].employeeID + "</td>"
        code += "<td>" + data[x].name + "</td>"
        code += "<td>" + data[x].status + "</td>"
        code += "<td>" + data[x].manager + "</td>"
        code += "<td>" + data[x].wfm_Manager + "</td>"
        code += "<td>" + data[x].email + "</td>"
        code += "<td>" + data[x].experience + "</td>"
        code += "<td>"
        for (let y in data[x].skills)
            code += data[x].skills[y] + "  "
        code += "</td>"
        code += "<td> <button id=request> RequestLock </button> </td> </tr>"
    }
    $('#tbody').html(code)
})