let projectListCount = 1;

function customerProjectList(filter){
    $("#customerProjectList").html("")
    // 더미 데이터
    let projectList = [
        {title : "title1",money:"100,100,000", currentMoney:"900,900",startDate:"2023-01-01",endDate:"2023-10-10",state:"진행중"},
        {title : "title2",money:"100,100,000", currentMoney:"900,900",startDate:"2023-01-01",endDate:"2023-10-10",state:"진행중"},
        {title : "title2",money:"100,100,000", currentMoney:"900,900",startDate:"2023-01-01",endDate:"2023-10-10",state:"진행중"},
        {title : "title3",money:"100,100,000", currentMoney:"900,900",startDate:"2023-01-01",endDate:"2023-10-10",state:"진행중"},
    ]
    projectList.forEach((item ,index)=>{
    let elementText = `
    <tr>
        <th>${index+1}</th>
        <td>${item.title}</td>
        <td>${item.money}</td>
        <td>${item.currentMoney}</td>
        <td><span>${item.startDate}</span> ~ <span>${item.endDate}</span></td>
        <td>${item.state}</td>
    </tr>
    `
    $("#customerProjectList").append(elementText);
    })
}

function proejctQAList(filter){
    $("#customerQAList").html("")

    // 더미 데이터
    let projectList = [
        {title : "title2",  accountID : "홍길동", content : "내내용ㅇ요ㅐ요ㅐ애ㅛ애ㅛ내요내", phone:"010-1111-2222",option:"옵션1",money:"40,000",payment:"카드", createDate:"2023-01-23",state:"완료"},
        {title : "title2",  accountID : "홍길동", content : "내내용ㅇ요ㅐ요ㅐ애ㅛ애ㅛ내요내", phone:"010-1111-2222",option:"옵션1",money:"40,000",payment:"카드", createDate:"2023-01-23",state:"완료"},
        {title : "title2",  accountID : "홍길동", content : "내내용ㅇ요ㅐ요ㅐ애ㅛ애ㅛ내요내", phone:"010-1111-2222",option:"옵션1",money:"40,000",payment:"카드", createDate:"2023-01-23",state:"완료"},
        {title : "title2",  accountID : "홍길동", content : "내내용ㅇ요ㅐ요ㅐ애ㅛ애ㅛ내요내", phone:"010-1111-2222",option:"옵션1",money:"40,000",payment:"카드", createDate:"2023-01-23",state:"완료"},
        {title : "title2",  accountID : "홍길동", content : "내내용ㅇ요ㅐ요ㅐ애ㅛ애ㅛ내요내", phone:"010-1111-2222",option:"옵션1",money:"40,000",payment:"카드", createDate:"2023-01-23",state:"완료"},
        {title : "title2",  accountID : "홍길동", content : "내내용ㅇ요ㅐ요ㅐ애ㅛ애ㅛ내요내", phone:"010-1111-2222",option:"옵션1",money:"40,000",payment:"카드", createDate:"2023-01-23",state:"완료"},
    ]
    projectList.forEach((item,index)=>{
        let elementText = `
            <tr>
                <th>${index+1}</th>
                <td>${item.title}</td>
                <td>${item.accountID}</td>
                <td>${item.content}</td>
                <td>${item.phone}</td>
                <td>${item.option}</td>
                <td>${item.money}</td>
                <td>${item.payment}</td>
                <td>${item.createDate}</td>
                <td>${item.state}</td>
            </tr>
        `
        $("#customerQAList").append(elementText);
    })
}

function activeElement(element){
    let selectEl = $(element)
    let selectId = selectEl.prop("id")

    $(`#${selectId}Menu`).siblings("li").removeClass("active-page")
    $(`#${selectId}Menu`).addClass("active-page")

    selectEl.prop("id");
    selectEl.siblings("td").removeClass("active-page")
    //$(`${}Menu`).addClass("active-page")
    selectEl.addClass("active-page")
    return selectId
}
$("#cusMenu td").click(function (){
    let selectId = activeElement(this)
    customerProjectList(selectId)
})

$("#qaMenu td").click(function (){
    let selectId = activeElement(this)
    proejctQAList(selectId)
})


