let faqListCount = 2;
let productCount = 2;
$("#fqa_add").click(function (){
    $('#subItem').remove()
    $(`#faqIndex${faqListCount-1}`).children().children().prop("class","")
    let text = `
        <div id="faqIndex${faqListCount}">
            <div>
                <div id="faqSubIndex${faqListCount}" class="additem-faq-col2">
                    <div>
                        <div>
                            <label class="subtitle" for="title${faqListCount}">제목</label>
                            <input class="inputBox w-100" id="title"${faqListCount} name="title${faqListCount}"/>
                        </div>
                        <div class="mt-4">
                            <label class="subtitle" for="body${faqListCount}" >내용</label>
                            <textarea class="inputBox w-100" rows="2" style="resize: none; height: 80px !important;"  id="body${faqListCount}" name="body"></textarea>
                        </div>
                    </div>
                    <div id="subItem">
                        <button id="product-sub" class="subItem" onclick="faqItemRemove()">
                            <img src="/static/image/subItem.png" width="40px" height="40px" >
                        </button>
                    </div>
                </div>
                <div>
                    <hr class="line">
                </div>
            </div>
        </div>`
    $('#faq_list').append(text);
    faqListCount++;
});

function faqItemRemove(){
    faqListCount--;
    const elementText =`
        <div id="subItem">
            <button id="product-sub" class="subItem" onclick="faqItemRemove()">
                <img src="/static/image/subItem.png" width="40px" height="40px" >
            </button>
        </div>`
    $(`#faqIndex${faqListCount}`).remove();
    $(`#faqSubIndex${faqListCount-1}`)
        .prop("class","additem-faq-col2")
        .append(elementText)
}

$("#product-add").click(function (){
    $("#subItem").remove();
    $(`#additem-product-index${productCount-1}`).children().prop("class","")
    let text=
        `<div id="additem-product-index${productCount}">
            <div id="product-sub-index${productCount}" class="additem-product-col2">
                <div id="item">
                    <div class="row" style="margin-top: 1em;">
                        <div class="col">
                            <label class="subtitle" for="name">옵션명</label>
                            <input class="w-100 inputBox" type="text" id="name${productCount}" name="name${productCount}">
                        </div>
                        <div class="col-3">
                            <label for="count" class="subtitle">수량</label>
                            <input class="w-100 inputBox" type="number" id="count${productCount}" name="count${productCount}">
                        </div>
                        <div class="col-3">
                            <label for="money" class="subtitle">금액</label>
                            <input class="w-100 inputBox" type="number" id="money${productCount}" name="money${productCount}">
                        </div>
                    </div>
                    <div class="row" style="margin-top: 1em;">
                        <div class="col">
                            <label for="body" class="subtitle">설명</label>
                            <input class="w-100 inputBox" type="text" id="body${productCount}" name="body${productCount}">
                        </div>
                        <div class="col-3">
                            <label for="shippingStart" class="subtitle">배송시작</label>
                            <input class="w-100 inputBox" type="date" id="shippingStart${productCount}" name="shippingStart${productCount}">
                        </div>
                        <div class="col-3">
                            <label for="shippingFee" class="subtitle">배송비</label>
                            <input class="w-100 inputBox" type="number" id="shippingFee${productCount}" name="shippingFee${productCount}">
                        </div>
                    </div>
                </div>
                <div id="subItem">
                    <button id="product-sub" class="subItem" onclick="itemRemove()">
                        <img src="/static/image/subItem.png" width="40px" height="40px" >
                    </button>
                </div>
            </div>
            <div>
                <hr class="line">
            </div>
        </div>`
    $("#product_list").append(text)
    productCount++;
})

function itemRemove (){
    productCount--;
    let elementText = `
                <div id="subItem">
                    <button id="product-sub" class="subItem" onclick="itemRemove()">
                        <img src="/static/image/subItem.png" width="40px" height="40px" >
                    </button>
                </div>`
    $(`#additem-product-index${productCount}`).remove();
    $(`#product-sub-index${productCount-1}`)
        .append(elementText)
        .prop("class","additem-product-col2");

}

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