let list = ["Administrative Services","Advertising","Agriculture and Farming","Alumni","Apps","Artificial Intelligence","Association","B2B","B2C","Biotechnology","Blockchain","Charity","Clothing and Apparel","Collaboration","Collaborative","Commerce and Shopping","Commercial","Community and Lifestyle","Consumer","Consumer Electronics","Consumer Goods","Consumption","Content and Publishing","Crowdsourcing","Customer Service","Data and Analytics","Design","Desktop Apps","Education","Emerging Markets","Energy","Enterprise","Ethereum","Events","Financial Services","Food and Beverage","Franchise","Freemium","Gaming","Generation Y","Generation Z","Government and Military","Hardware","Health Care","Homeless Shelter","Information Technology","Infrastructure","Internet Services","Knowledge Management","LGBT","Lending and Investments","Manufacturing","Media and Entertainment","Messaging and Telecommunications","Millennials","Mobile","Music and Audio","Natural Resources","Navigation and Mapping","Non Profit","Payments","Peer to Peer","Platforms","Privacy and Security","Product Management","Professional Services","Professional Services","Project Management","Real Estate","Real Time","Retirement Service Industry","Sales and Marketing","Science and Engineering","Sharing Economy","Small and Medium Businesses","Social Bookmarking","Social Impact","Software","Sports","Subscription Service","Sustainability","Technical Support","Transportation","Travel and Tourism","Underserved Children","Universities","Video"]
let options = []
let i = 0
list.forEach(item => {
    options.push({value: i, label: item})
    i++
})
console.log(options)