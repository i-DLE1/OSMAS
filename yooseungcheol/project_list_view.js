function projectListView(){
    let dummyData = [
        {img: "../static/image/item1.png" ,money:"123,123,123", date:12,title:"타이틀1",user:1001},
        {img: "../static/image/item2.jpg" ,money:"1,123,123", date:14,title:"타이틀1",user:101},
        {img: "../static/image/item3.png" ,money:"12,123,123", date:17,title:"타이틀123",user:201},
        {img: "../static/image/item4.jpg" ,money:"123,123,123", date:20,title:"타이틀234234231",user:1},
        {img: "../static/image/item5.jpg" ,money:"123,123,123", date:60,title:"긴글 테스트 니아리냐어리냐어리ㅓ냐이러ㅑ너ㅣㅑ타이ㄴㄹㅇㄴㄹㄴㄹㄴㅇㄹ틀1",user:121},
        {img: "../static/image/item5.jpg" ,money:"123,123,123", date:90,title:"긴글 테스트 니아리냐어리냐어리ㅓ냐이러ㅑ너ㅣㅑ타이ㄴㄹㅇㄴㄹㄴㄹㄴㅇㄹ틀1",user:121},
    ]
    let color = "";
    dummyData.forEach(item=>{

        if(item.date >60){
            color = "days-default";
        }else if(item.date >30){
            color = "days-green";
        }else if(item.date > 15){
            color = "days-blue";
        }else{
            color = "days-red";
        }

        let elementText= `
        <div class ="project-item">
            <div>
                <img class="project-item-thumnail" src="${item.img}">
            </div>
            <div class="project-row">
                <div>${item.money}</div>
                <div><span class="${color}">${item.date}일남음</span></div>
            </div>
            <div>${item.title}</div>
            <div>참여자 수 : <span >${item.user}</span>명</div>
        </div>`
        $("#project-view-list").append(elementText)
    })
}