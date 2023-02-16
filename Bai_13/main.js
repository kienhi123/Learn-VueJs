var vueInstance = new Vue({
    el: '#app',
    data: {
        title: 'Một bức ảnh ngẫu nhiên',
        url: "https://shopee.vn/%C3%81o-kho%C3%A1c-d%C3%A2y-k%C3%A9o-ph%C3%B9-h%E1%BB%A3p-nam-n%E1%BB%AF-ch%E1%BA%A5t-n%E1%BB%89-b%C3%B4ng-cao-c%E1%BA%A5p-i.63168762.17082708831?sp_atk=d0511b11-b82f-4bd7-8ec3-132e776f8350&xptdk=d0511b11-b82f-4bd7-8ec3-132e776f8350",
        target: '_blank',
        price: "200.000 VNĐ",
        check: true,


    },
    methods: {
        say: function (text) {
            return "Hello" + text;
        }
    },
});
console.log(vueInstance);


