function projectStaticsList(){
    // 더미데이터
    let listData = [
        {title: "블라블라", money:"25000", count: 1000, totalMoney : "25,000,000"},
        {title: "블라블라1", money:"251000", count: 100, totalMoney : "25,000,000"},
        {title: "블라블라2", money:"225000", count: 1200, totalMoney : "25,000,000"},
        {title: "블라블라3", money:"235000", count: 1400, totalMoney : "25,000,000"},
    ]

    listData.forEach((item,index)=>{
        let elementText = `
            <tr>
                <th>${index+1}</th>
                <td>${item.title}</td>
                <td>${item.money}</td>
                <td>${item.count}</td>
                <td>${item.totalMoney}</td>
            </tr>
             `
        $("#product-statics-list").append(elementText);
    })

}