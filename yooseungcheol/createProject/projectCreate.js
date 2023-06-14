let faqListCount = 1;
let projectCount = 1;
$("#fqa_add").click(function (){
    faqListCount++;
    let text = `
    <div>
        <label class="subtitle" for="title">제목</label>
        <input class="inputBox w-100" id="title${faqListCount}" name="title${faqListCount}"/>
    </div>
    <div class="mt-4">
        <label class="subtitle" for="body" >내용</label>
        <textarea class="inputBox w-100" rows="2" style="resize: none; height: 80px !important;"  id="body${faqListCount}" name="body${faqListCount}"></textarea>
    </div>
    <hr class="line">    
    `
    $('#faq_list').append(text);
});

$("#product-add").click(function (){

    let text=
        `<div>
            <div class="row" style="margin-top: 1em;">
                <div class="col">
                    <label class="subtitle" for="name">옵션명</label>
                    <input class="w-100 inputBox" type="text" id="name${projectCount}" name="name${projectCount}">
                </div>
                <div class="col-3">
                    <label for="count" class="subtitle">수량</label>
                    <input class="w-100 inputBox" type="number" id="count${projectCount}" name="count${projectCount}">
                </div>
                <div class="col-3">
                    <label for="money" class="subtitle">금액</label>
                    <input class="w-100 inputBox" type="number" id="money${projectCount}" name="money${projectCount}">
                </div>
            </div>
            <div class="row" style="margin-top: 1em;">
                <div class="col">
                    <label for="body" class="subtitle">설명</label>
                    <input class="w-100 inputBox" type="text" id="body${projectCount}" name="body${projectCount}">
                </div>
                <div class="col-3">
                    <label for="shippingStart" class="subtitle">배송시작</label>
                    <input class="w-100 inputBox" type="date" id="shippingStart${projectCount}" name="shippingStart${projectCount}">
                </div>
                <div class="col-3">
                    <label for="shippingFee" class="subtitle">배송비</label>
                    <input class="w-100 inputBox" type="number" id="shippingFee${projectCount}" name="shippingFee${projectCount}">
                </div>
            </div>
            <hr class="line">
        </div>`
    $("#product_list").append(text)
})

function productList(){
    // 더미 데이터
    let newList = [
        {title:"title1", body:"body11111",startDate:"2023-01-01",endDate:"2032-10-10"},
        {title:"title2", body:"body22222",startDate:"2023-02-01",endDate:"2032-10-10"},
        {title:"title3", body:"body33333",startDate:"2023-03-01",endDate:"2032-10-10"},
        {title:"title4", body:"body44444",startDate:"2023-04-01",endDate:"2032-10-10"},
        ];
    
    newList.forEach((item,index)=>
        $("#news_list").append(`
        <tr>
            <th>${index+1}</th>
            <td>${item.title}</td>
            <td>${item.body}</td>
            <td>${item.startDate}</td>
            <td>${item.endDate}</td>
        </tr>`)
    );
}

function productInfoList() {
    let dummyData = [
        {title : "어쩌구 저쩌구",money:"200,000",count:12},
        {title : "어쩌구 저쩌구",money:"200,000",count:12},
        {title : "어쩌구 저쩌구",money:"200,000",count:12},
        {title : "어쩌구 저쩌구",money:"200,000",count:12},
        {title : "어쩌구 저쩌구",money:"200,000",count:12},
        {title : "어쩌구 저쩌구",money:"200,000",count:12},
    ]

    dummyData.forEach((item,index)=>{
        let elementText= `
        <tr class="row">
            <th class="col-1">상품명</th>
            <td class="col">어쩌구 저쩌구</td>
            <th class="col-2">가격(원)</th>
            <td class="col">200,000</td>
            <th class="col-1">수량</th>
            <td class="col-2">12개 </td>
        </tr>
        `
        $("#project-end-list").append(elementText)
    })

}