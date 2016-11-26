import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

// let data = [{
//   "category": "Sightseeing",
//   "name": "Tung Chung Waterfront Road",
//   "description": "",
//   "time": "60 mins",
//   "location": "Tung Chung Waterfront Rd",
//   "walk": "10 mins",
//   "url": "",
//   "img": "http://orientaldaily.on.cc/cnt/news/20160503/photo/0503-00176-010b1.jpg",
//   "offer": ""
// },
// {
//   "category": "Sightseeing",
//   "name": "Tat tung road garden",
//   "description": "",
//   "time": "60 mins",
//   "location": "Tung Chung Waterfront Rd",
//   "walk": "8 mins",
//   "url": "",
//   "img": "https://upload.wikimedia.org/wikipedia/commons/a/a3/HK_Tung_Chung_Fu_Tung_Estate_sign_Tat_Tung_Road_garden_path_sign_Oct-2012.JPG",
//   "offer": ""
// },
// {
//   "category": "Food",
//   "name": "Amante Bar & Restaurant",
//   "description": "",
//   "time": "90 mins",
//   "location": "Fu Tung Plaza, Shun Tung Road",
//   "walk": "12 mins",
//   "url": "http://www.openrice.com/zh/hongkong/r-amante-bar-restaurant-%E6%9D%B1%E6%B6%8C-%E8%A5%BF%E5%BC%8F-%E6%B9%AF%E5%93%81-r167439/",
//   "img": "http://static7.orstatic.com/userphoto/photo/6/4VN/00YP5U86AC306BE8E915F6px.jpg",
//   "offer": ""
// },
// {
//   "category": "Food",
//   "name": "Man Wah Restaurant",
//   "description": "",
//   "time": "70 mins",
//   "location": "Shop 21, G/F, Fu Tung Plaza, 6 Fu Tung Street",
//   "walk": "12 mins",
//   "url": "http://www.openrice.com/zh/hongkong/r-%E6%B0%91%E8%8F%AF%E9%A4%90%E5%BB%B3-%E6%9D%B1%E6%B6%8C-%E6%B8%AF%E5%BC%8F-%E7%B2%89%E9%BA%B5-%E7%B1%B3%E7%B7%9A-r490888/",
//   "img": "http://static8.orstatic.com/userphoto/doorphoto/2/1ZZ/00E7T739807A5DFD24A787px.jpg",
//   "offer": ""
// },
// {
//   "category": "Food",
//   "name": "Leonidas",
//   "description": "",
//   "time": "70 mins",
//   "location": "Shop G18, CityGate, 20 Tat Tung Road",
//   "walk": "12 mins",
//   "url": "http://www.openrice.com/zh/hongkong/r-leonidas-%E6%9D%B1%E6%B6%8C-%E6%AF%94%E5%88%A9%E6%99%82%E8%8F%9C-r477329",
//   "img": "https://media-cdn.tripadvisor.com/media/photo-s/0c/8b/9f/e5/shop-inside.jpg",
//   "offer": ""
// },
// {
//   "category": "Food",
//   "name": "Pacific Coffee Company",
//   "description": "",
//   "time": "45 mins",
//   "location": "2L2 243, CityGate,  Tat Tung Road",
//   "walk": "13 mins",
//   "url": "https://www.citygateoutlets.com.hk/en/dine/pacific-coffee-company.aspx",
//   "img": "",
//   "offer": ""
// },
// {
//   "category": "Food",
//   "name": "Federal Palace",
//   "description": "",
//   "time": "120 mins",
//   "location": "2L2 255, CityGate,  Tat Tung Road",
//   "walk": "13 mins",
//   "url": "https://www.citygateoutlets.com.hk/en/Dine/FederalPalace2.aspx",
//   "img": "http://static6.orstatic.com/userphoto/photo/5/4J1/00W7DXD578EBEEB01D42FCpx.jpg",
//   "offer": ""
// },
// {
//   "category": "Food",
//   "name": "Genki Sushi",
//   "description": "",
//   "time": "90 mins",
//   "location": "Shop 25, G/F, Tung Chung Crescent Block 3",
//   "walk": "12 mins",
//   "url": "https://www.citygateoutlets.com.hk/en/dine/genkisushi.aspx",
//   "img": "http://static7.orstatic.com/userphoto/photo/A/7WT/01K9F24A84E65BC7987CC0px.jpg",
//   "offer": ""
// },
// {
//   "category": "Shopping",
//   "name": "City Chain",
//   "description": "",
//   "time": "45 mins",
//   "location": "G/F 16, CityGate,  Tat Tung Road",
//   "walk": "13 mins",
//   "url": "https://www.citygateoutlets.com.hk/en/Brands/City-Chain-Outlet.aspx",
//   "img": "",
//   "offer": ""
// },
// {
//   "category": "Shopping",
//   "name": "Crocs",
//   "description": "",
//   "time": "45 mins",
//   "location": "10F 1005, CityGate,  Tat Tung Road",
//   "walk": "13 mins",
//   "url": "https://www.citygateoutlets.com.hk/en/Brands/Crocs-Outlet.aspx",
//   "img": "http://www.hongkongextras.com/resources/Outlet+Malls+Crocs.jpg",
//   "offer": ""
// }]
//
// for(i=0; i<data.length; i++){
//   Suggestions.insert(data[i]);
// }
