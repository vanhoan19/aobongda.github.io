const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

var currentNational = [];
var currentIndex = 0;
var sum = 0;
const nationalBtns = $$('.national-menu')
const nationalGroupList = $$('.national-group-list')
const nationalLeftBtns = $$('.btn-national-left')
const nationalRightBtns = $$('.btn-national-right')
const sliderLeftBtn = $('.btn-slider-left') 
const sliderRightBtn = $('.btn-slider-right')
const sliderImgs = $('.slider-imgs.container-fluid')
const nationalContents = $$('.national-content')
const myObject = {
    sliders: [
        './assets/img/slide-1.jpg',
        './assets/img/slide-2.jpg',
        './assets/img/slide-3.png',
        './assets/img/slide-4.png',
        './assets/img/slide-5.png'
    ],
    contents: [
        [
            {
                img: './assets/img/arghentina.jpg',
                name: 'Áo thi đấu đội tuyển Arghentina sân nhà 2020-2021',
                link: '#',
                price1: '80.000đ',
                price2: '120.000đ',
                price3: '160.000đ',
                span1: '(Hàng thun lạnh)',
                span2: '(Hàng thun co giãn)',
                span3: '(Hàng mè Caro)',
            },
            {
                img: './assets/img/VN trắng.jpg',
                name: 'Áo thi đấu đội tuyển Việt Nam sân khách 2020-2021',
                link: '#',
                price1: '80.000đ',
                price2: '120.000đ',
                price3: '160.000đ',
                span1: '(Hàng thun lạnh)',
                span2: '(Hàng thun co giãn)',
                span3: '(Hàng mè Caro)'
            },
            {
                img: './assets/img/VN vàng.jpg',
                name: 'Áo thi đấu đội tuyển Việt Nam màu vàng 2020-2021',
                link: '#',
                price1: '80.000đ',
                price2: '120.000đ',
                price3: '160.000đ',
                span1: '(Hàng thun lạnh)',
                span2: '(Hàng thun co giãn)',
                span3: '(Hàng mè Caro)'
            },
            {
                img: './assets/img/VN xanh.jpg',
                name: 'Áo thi đấu đội tuyển Việt Nam màu xanh 2020-2021',
                link: '#',
                price1: '80.000đ',
                price2: '120.000đ',
                price3: '160.000đ',
                span1: '(Hàng thun lạnh)',
                span2: '(Hàng thun co giãn)',
                span3: '(Hàng mè Caro)'
            },
            {
                img: './assets/img/VN đỏ.jpg',
                name: 'Áo thi đấu đội tuyển Việt Nam sân nhà 2020-2021',
                link: '#',
                price1: '80.000đ',
                price2: '120.000đ',
                price3: '160.000đ',
                span1: '(Hàng thun lạnh)',
                span2: '(Hàng thun co giãn)',
                span3: '(Hàng mè Caro)'
            },
            {
                img: './assets/img/Ý trắng.jpg',
                name: 'Áo thi đấu đội tuyển Ý sân khách 2020-2021',
                link: '#',
                price1: '80.000đ',
                price2: '120.000đ',
                price3: '160.000đ',
                span1: '(Hàng thun lạnh)',
                span2: '(Hàng thun co giãn)',
                span3: '(Hàng mè Caro)'
            },
            {
                img: './assets/img/ý xanh đen.jpg',
                name: 'Áo thi đấu đội tuyển Việt Nam sân nhà 2020-2021',
                link: '#',
                price1: '80.000đ',
                price2: '120.000đ',
                price3: '160.000đ',
                span1: '(Hàng thun lạnh)',
                span2: '(Hàng thun co giãn)',
                span3: '(Hàng mè Caro)'
            },
            {
                img: './assets/img/argentina trắng.jpg',
                name: 'Áo thi đấu đội tuyển Arghentina sân nhà 2020-2021',
                link: '#',
                price1: '80.000đ',
                price2: '120.000đ',
                price3: '160.000đ',
                span1: '(Hàng thun lạnh)',
                span2: '(Hàng thun co giãn)',
                span3: '(Hàng mè Caro)'
            },
        ],
        [
            {
                img: './assets/img/Bayern đen.jpg',
                name: 'Áo bóng đá Bayern đen ngắn tay mùa giải 2020-2021',
                link: '#',
                price1: '80.000đ',
                price2: '120.000đ',
                price3: '160.000đ',
                span1: '(Hàng thun lạnh)',
                span2: '(Hàng thun co giãn)',
                span3: '(Hàng mè Caro)'
            },
            {
                img: './assets/img/Bayern đỏ.jpg',
                name: 'Áo bóng đá Bayern đỏ ngắn tay mùa giải 2020-2021',
                link: '#',
                price1: '80.000đ',
                price2: '120.000đ',
                price3: '160.000đ',
                span1: '(Hàng thun lạnh)',
                span2: '(Hàng thun co giãn)',
                span3: '(Hàng mè Caro)'
            },
            {
                img: './assets/img/PSG đen xám.jpg',
                name: 'Áo bóng đá PSG đen xám mùa giải 2020-2021',
                link: '#',
                price1: '80.000đ',
                price2: '120.000đ',
                price3: '160.000đ',
                span1: '(Hàng thun lạnh)',
                span2: '(Hàng thun co giãn)',
                span3: '(Hàng mè Caro)'
            },
            {
                img: './assets/img/Real ngọc.jpg',
                name: 'Áo bóng đá Real ngọc mùa giải 2020-2021',
                link: '#',
                price1: '80.000đ',
                price2: '120.000đ',
                price3: '160.000đ',
                span1: '(Hàng thun lạnh)',
                span2: '(Hàng thun co giãn)',
                span3: '(Hàng mè Caro)'
            },
            {
                img: './assets/img/Tottenham 01.jpg',
                name: 'Áo bóng đá Tottenham sân nhà mùa giải 2020-2021',
                link: '#',
                price1: '80.000đ',
                price2: '120.000đ',
                price3: '160.000đ',
                span1: '(Hàng thun lạnh)',
                span2: '(Hàng thun co giãn)',
                span3: '(Hàng mè Caro)'
            },
            {
                img: './assets/img/Real ngọc đậm.jpg',
                name: 'Áo bóng đá Real ngọc đậm mùa giải 2020-2021',
                link: '#',
                price1: '80.000đ',
                price2: '120.000đ',
                price3: '160.000đ',
                span1: '(Hàng thun lạnh)',
                span2: '(Hàng thun co giãn)',
                span3: '(Hàng mè Caro)'
            },
            {
                img: './assets/img/Arsenal đỏ.jpg',
                name: 'Áo bóng đá Arsenal đỏ sân nhà mùa giải 2020-2021',
                link: '#',
                price1: '80.000đ',
                price2: '120.000đ',
                price3: '160.000đ',
                span1: '(Hàng thun lạnh)',
                span2: '(Hàng thun co giãn)',
                span3: '(Hàng mè Caro)'
            },
            {
                img: './assets/img/PSG training.jpg',
                name: 'Áo bóng đá PSG training ngắn tay mùa giải 2020-2021',
                link: '#',
                price1: '80.000đ',
                price2: '120.000đ',
                price3: '160.000đ',
                span1: '(Hàng thun lạnh)',
                span2: '(Hàng thun co giãn)',
                span3: '(Hàng mè Caro)'
            },
            {
                img: './assets/img/Liver bích cam.jpg',
                name: 'Áo bóng đá Liverpool bích cam mùa giải 2020-2021',
                link: '#',
                price1: '80.000đ',
                price2: '120.000đ',
                price3: '160.000đ',
                span1: '(Hàng thun lạnh)',
                span2: '(Hàng thun co giãn)',
                span3: '(Hàng mè Caro)'
            },
            {
                img: './assets/img/Leicester xanh bích.jpg',
                name: 'Áo bóng đá Leicester xanh bích mùa giải 2020-2021',
                link: '#',
                price1: '80.000đ',
                price2: '120.000đ',
                price3: '160.000đ',
                span1: '(Hàng thun lạnh)',
                span2: '(Hàng thun co giãn)',
                span3: '(Hàng mè Caro)'
            },
        ],
        [
            {
                img: './assets/img/training1.jpg',
                name: 'Áo bóng đá Riki Freedom xanh lam',
                link: '#',
                price2: '130.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/training2.jpg',
                name: 'Áo bóng đá Riki Freedom vàng',
                link: '#',
                price2: '130.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/training3.jpg',
                name: 'Áo bóng đá Riki Freedom ya đậm',
                link: '#',
                price2: '130.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/training4.jpg',
                name: 'Áo bóng đá Riki Freedom hồng',
                link: '#',
                price2: '130.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/training5.jpg',
                name: 'Áo bóng đá Riki Freedom xanh đen',
                link: '#',
                price2: '130.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/training6.jpg',
                name: 'Áo bóng đá Riki Freedom trắng',
                link: '#',
                price2: '130.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/training7.jpg',
                name: 'Áo Bullbal Euro Ý',
                link: '#',
                price2: '130.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/training8.jpg',
                name: 'Áo Bullbal Euro Tây Ban Nha',
                link: '#',
                price2: '130.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/training9.jpg',
                name: 'Áo Bullbal Euro Pháp',
                link: '#',
                price2: '130.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/training10.jpg',
                name: 'Áo Bullbal Euro Hà Lan',
                link: '#',
                price2: '130.000đ',
                span2: '(Hàng chính hãng)'
            }
        ],
        [
            {
                img: './assets/img/giaybongda1.jpg',
                name: 'Giày bóng đá Wika Quang Hải Freedom xanh navy',
                link: '#',
                price2: '420.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/giaybongda2.jpg',
                name: 'Giày bóng đá Wika Quang Hải Neo xám',
                link: '#',
                price2: '420.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/giaybongda3.jpg',
                name: 'Giày bóng đá Wika Quang Hải Neo hồng',
                link: '#',
                price2: '420.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/giaybongda4.jpg',
                name: 'Giày bóng đá Wika Quang Hải Neo xanh trắng',
                link: '#',
                price2: '420.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/giaybongda5.jpg',
                name: 'Giày bóng đá Wika Quang Hải Neo xanh cam',
                link: '#',
                price2: '420.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/giaybongda6.jpg',
                name: 'Giày bóng đá Kamito Tuấn Anh TA11 trắng',
                link: '#',
                price2: '655.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/giaybongda7.jpg',
                name: 'Giày bóng đá Kamito Tuấn Anh TA11 đen',
                link: '#',
                price2: '655.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/giaybongda8.jpg',
                name: 'Giày bóng đá Kamito Tuấn Anh TA11 đỏ',
                link: '#',
                price2: '655.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/giaybongda9.jpg',
                name: 'Giày bóng đá Kamito Tuấn Anh TA11 xanh dương',
                link: '#',
                price2: '655.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/giaybongda10.jpg',
                name: 'Giày bóng đá Kamito Tuấn Anh TA11 xanh lá',
                link: '#',
                price2: '690.000đ',
                span2: '(Hàng chính hãng)'
            }
        ],
        [
            {
                img: './assets/img/aodaitay1.jpg',
                name: 'Áo lót body chính hãng Riki xám trắng',
                link: '#',
                price2: '100.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/aodaitay2.jpg',
                name: 'Áo lót body chính hãng Riki da lợt',
                link: '#',
                price2: '100.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/aodaitay3.jpg',
                name: 'Áo lót body chính hãng Riki xanh dương',
                link: '#',
                price2: '100.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/aodaitay4.jpg',
                name: 'Áo lót body chính hãng Riki xanh ngọc',
                link: '#',
                price2: '100.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/aodaitay5.jpg',
                name: 'Áo lót body chính hãng Riki hồng',
                link: '#',
                price2: '100.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/aodaitay6.jpg',
                name: 'Áo lót body chính hãng Riki trắng',
                link: '#',
                price2: '100.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/aodaitay7.jpg',
                name: 'Áo lót body chính hãng Riki tím than',
                link: '#',
                price2: '100.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/aodaitay8.jpg',
                name: 'Áo lót body chính hãng Riki vàng',
                link: '#',
                price2: '100.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/aodaitay9.jpg',
                name: 'Áo lót body chính hãng Riki đen',
                link: '#',
                price2: '100.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/aodaitay10.jpg',
                name: 'Áo lót body chính hãng Riki đỏ',
                link: '#',
                price2: '100.000đ',
                span2: '(Hàng chính hãng)'
            }
        ],
        [
            {
                img: './assets/img/aokhoac1.jpg',
                name: 'Bộ nỉ MU đen 2020 - 2021',
                link: '#',
                price2: '300.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/aokhoac2.jpg',
                name: 'Bộ nỉ PSG tím than 2020 - 2021',
                link: '#',
                price2: '300.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/aokhoac3.jpg',
                name: 'Bộ nỉ Arsenal đen 2020 - 2021',
                link: '#',
                price2: '300.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/aokhoac4.jpg',
                name: 'Bộ nỉ Juventus đen 2020 - 2021',
                link: '#',
                price2: '300.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/aokhoac5.jpg',
                name: 'Bộ nỉ PSG trắng đen 2020 - 2021',
                link: '#',
                price2: '300.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/aokhoac6.jpg',
                name: 'Áo bóng đá dài tay Tây Ban Nha đỏ WC 2018',
                link: '#',
                price2: '90.000đ',
                span2: '(Hàng cao cấp)'
            }, 
            {
                img: './assets/img/aokhoac7.jpg',
                name: 'Bộ nỉ Real đen 2017-2018',
                link: '#',
                price2: '300.000đ',
                span2: '(Hàng Việt)'
            }, 
            {
                img: './assets/img/aokhoac8.jpg',
                name: 'Áo bóng đá đội tuyển BỒ Đào Nha 2016-2017 màu xanh',
                link: '#',
                price2: '160.000đ',
                span2: '(Hàng loại 1)'
            }, 
            {
                img: './assets/img/aokhoac9.jpg',
                name: 'Áo bóng đá đội tuyển Pháp 2016-2017 màu tím than',
                link: '#',
                price2: '106.000đ',
                span2: '(Hàng loại 1)'
            }, 
            {
                img: './assets/img/aokhoac10.jpg',
                name: 'Áo nỉ mũ Arsenal màu ghi',
                link: '#',
                price2: '150.000đ',
                span2: '(Nỉ lót lông)'
            }
        ],
        [
            {
                img: './assets/img/aotreem1.jpg',
                name: 'Bộ quần áo bóng đá trẻ em CLB Manchester United đỏ',
                link: '#',
                price2: 'Liên hệ',
                span2: '(Mẫu tham khảo)'
            }, 
            {
                img: './assets/img/aotreem2.jpg',
                name: 'Áo bóng đá trẻ em đội tuyển Việt Nam trắng sân khách 2021',
                link: '#',
                price2: '80.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/aotreem3.jpg',
                name: 'Áo bóng đá trẻ em đội tuyển Việt Nam đỏ sân nhà 2021',
                link: '#',
                price2: '80.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/aotreem4.jpg',
                name: 'Áo bóng đá trẻ em CLB Chelsea xanh sân nhà 2021',
                link: '#',
                price2: '80.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/aotreem5.jpg',
                name: 'Áo bóng đá trẻ em CLB Real Madrid trắng sân nhà 2021',
                link: '#',
                price2: '80.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/aotreem6.jpg',
                name: 'Bộ quần áo bóng đá trẻ em Bulbal Falcon tím',
                link: '#',
                price2: '120.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/aotreem7.jpg',
                name: 'Bộ quần áo bóng đá trẻ em Bulbal Falcon trắng',
                link: '#',
                price2: '120.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/aotreem8.jpg',
                name: 'Bộ quần áo bóng đá trẻ em Bulbal Falcon xanh ngọc',
                link: '#',
                price2: '120.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/aotreem9.jpg',
                name: 'Bộ quần áo bóng đá trẻ em Bulbal Falcon xanh lá',
                link: '#',
                price2: '120.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/aotreem10.jpg',
                name: 'Bộ quần áo bóng đá trẻ em Bulbal Falcon vàng',
                link: '#',
                price2: '120.000đ',
                span2: '(Hàng chính hãng)'
            }
        ],
        [
            {
                img: './assets/img/dodabanh1.jpg',
                name: 'Quả bóng đá Palades đen',
                link: '#',
                price2: '99.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/dodabanh2.jpg',
                name: 'Quả bóng đá Palades đỏ',
                link: '#',
                price2: '99.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/dodabanh3.jpg',
                name: 'Quả bóng đá Palades xanh',
                link: '#',
                price2: '99.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/dodabanh4.jpg',
                name: 'Giày bóng đá ba sọc',
                link: '#',
                price2: '99.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/dodabanh5.jpg',
                name: 'Giày Hyper cam chuối',
                link: '#',
                price2: '180.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/dodabanh6.jpg',
                name: 'Giày Messi',
                link: '#',
                price2: '180.000đ',
                span2: '(Hàng Việt)'
            }, 
            {
                img: './assets/img/dodabanh7.png',
                name: 'Áo Bullbal Euro Ý',
                link: '#',
                price2: '130.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/dodabanh8.jpg',
                name: 'Áo Bullbal Euro Tây Ban Nha',
                link: '#',
                price2: '130.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/dodabanh9.jpg',
                name: 'Áo Bullbal Euro Pháp',
                link: '#',
                price2: '130.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/dodabanh10.png',
                name: 'ÁÁo Bullbal Euro Hà Lan',
                link: '#',
                price2: '130.000đ',
                span2: '(Hàng chính hãng)'
            }
        ],
        [
            {
                img: './assets/img/phukien1.jpg',
                name: 'Áo thủ môn Riki Rollmes xanh',
                link: '#',
                price2: '150.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/phukien2.jpg',
                name: 'Áo thủ môn Riki Rollmes cam',
                link: '#',
                price2: '150.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/phukien3.jpg',
                name: 'Áo thủ môn Riki Rollmes vàng',
                link: '#',
                price2: '150.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/phukien4.jpg',
                name: 'Áo thủ môn Riki Rollmes hồng',
                link: '#',
                price2: '150.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/phukien5.jpg',
                name: 'Áo thủ môn Riki Rollmes xám',
                link: '#',
                price2: '150.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/phukien6.jpg',
                name: 'Găng tay thủ môn Wika 01 cam',
                link: '#',
                price2: '200.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/phukien7.jpg',
                name: 'Găng tay thủ môn Wika 01 xanh dương',
                link: '#',
                price2: '200.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/phukien8.jpg',
                name: 'Găng tay thủ môn Wika 01 xanh chuối',
                link: '#',
                price2: '200.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/phukien9.jpg',
                name: 'Găng tay thủ môn H3 Ro Ro xanh',
                link: '#',
                price2: '500.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/phukien10.jpg',
                name: 'Găng tay thủ môn H3 Ro Ro đen',
                link: '#',
                price2: '500.000đ',
                span2: '(Hàng chính hãng)'
            }
        ],
        [
            {
                img: './assets/img/bongchuyen1.jpg',
                name: 'Bộ quần áo bóng chuyền Beyono Lead trắng',
                link: '#',
                price2: '160.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/bongchuyen2.jpg',
                name: 'Bộ quần áo bóng chuyền Beyono Lead đỏ',
                link: '#',
                price2: '160.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/bongchuyen3.jpg',
                name: 'Bộ quần áo bóng chuyền Beyono Thunder xanh dương',
                link: '#',
                price2: '160.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/bongchuyen4.jpg',
                name: 'Bộ quần áo bóng chuyền Beyono Thunder vàng',
                link: '#',
                price2: '160.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/bongchuyen5.jpg',
                name: 'Bộ quần áo bóng chuyền Beyono Thunder trắng',
                link: '#',
                price2: '160.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/bongchuyen6.jpg',
                name: 'Bộ quần áo bóng chuyền Beyono Thunder đỏ',
                link: '#',
                price2: '160.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/bongchuyen7.jpg',
                name: 'Bộ quần áo bóng chuyền Beyono Vincent xanh dương',
                link: '#',
                price2: '160.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/bongchuyen8.jpg',
                name: 'Bộ quần áo bóng chuyền Beyono Vincent xanh lá',
                link: '#',
                price2: '160.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/bongchuyen9.jpg',
                name: 'Bộ quần áo bóng chuyền Beyono Vincent hồng',
                link: '#',
                price2: '160.000đ',
                span2: '(Hàng chính hãng)'
            }, 
            {
                img: './assets/img/bongchuyen10.jpg',
                name: 'Bộ quần áo bóng chuyền Beyono Vincent đỏ',
                link: '#',
                price2: '160.000đ',
                span2: '(Hàng chính hãng)'
            }
        ],
    ]
}
const length = myObject.contents.length
// Chèn slide HTML
function slideImg() {
    const htmls = myObject.sliders.map(function(slider, index) {
        return `
            <img src="${slider}" class="" alt="" data-id="${index}">
        `
    }) 
    $('.slider-imgs').innerHTML = htmls.join(' ')
}
slideImg()

// Chuyển slide
sliderRightBtn.onclick = function() {
    ++currentIndex;
    if (currentIndex > myObject.sliders.length - 1) {
        currentIndex = 0
    }
    sum = currentIndex * 100;
    sliderImgs.style.marginLeft = '-' + sum + '%';
}
sliderLeftBtn.onclick = function() {
    --currentIndex;
    if (currentIndex < 0) {
        currentIndex = myObject.sliders.length - 1;
    }
    sum = currentIndex * 100;
    sliderImgs.style.marginLeft = '-' + sum + '%';
}
setInterval(function(){
    sliderRightBtn.click()
}, 6000)

// Chèn national HTML
function national() {
    myObject.contents.map(function(content, index) {
        const htmls = content.map(function(item) {
            const price1 = index < 2 ? item.price1 : ''
            const span1 = index < 2 ? item.span1 : ''
            const span3 = index < 2 ? item.span3 : ''
            const price3 = index < 2 ? item.price3 : '' 
            return `
                <div class="national-item col-lg-2-4 col-lg-3 col-md-4 col-sm-6"">
                    <div class="national-item-wrap">
                        <a href="${item.link}" class="national-item-img">
                            <img src="${item.img}" alt="">
                        </a>
                        <div class="national-item-desc">
                            <a class="national-item-link" href="${item.link}" title="${item.name}">${item.name}</a>
                            <div class="national-item-prices">
                                <p class="">${price1} <span>${span1}</span></p>
                                <p class="">${item.price2} <span>${item.span2}</span></p>
                                <p class="">${price3} <span>${span3}</span></p>
                            </div>
                            <a class="national-item-more" href="${item.link}">Xem chi tiết <i class="fas fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
            `
        })
        nationalContents[index].innerHTML = htmls.join(' ')
    })
}
national()

for (let i = 0; i<length; ++i) {
    nationalBtns[i].onclick = function() {
        nationalGroupList[i].classList.toggle('active');
    }
}

for (let i=0; i<length; ++i) {
    currentNational[i]=0;
}

// Chuyển national
const nationalItems = []
const imgItems = []
for (let i=0; i<length; ++i) {
    nationalItems[i] = nationalContents[i].querySelectorAll('.national-item')
    imgItems[i] = nationalContents[i].querySelectorAll('.national-item .national-item-img img')
}
const containerWidth = $('.container').clientWidth
const nationalItemWidth = nationalItems[0][0].clientWidth
const nationalItemHeight = imgItems[0][0]
const number = Math.round(containerWidth / nationalItemWidth)
for (let i = 0; i < length; ++i) {
    nationalRightBtns[i].onclick = function(e) {
        if (currentNational[i] < nationalItems[i].length - number) {
            if (nationalLeftBtns[i].classList.contains('active')) {
                nationalLeftBtns[i].classList.remove('active')
            }
            nationalItems[i][currentNational[i]].classList.toggle('active')
            if (nationalItems[i][currentNational[i]+number].classList.contains('active')) {
                nationalItems[i][currentNational[i]+number].classList.remove('active')
            }
            ++currentNational[i]
            if (currentNational[i] == nationalItems[i].length - number) {
                nationalRightBtns[i].classList.add('active')
                e.preventDefault()
            }
        }
    }
    nationalLeftBtns[i].onclick = function(e) {
        if (currentNational[i] > 0) {
            if (nationalRightBtns[i].classList.contains('active')) {{
                nationalRightBtns[i].classList.remove('active')
            }}
            nationalItems[i][currentNational[i]+number-1].classList.toggle('active')
            nationalItems[i][currentNational[i] -1].classList.toggle('active')
            --currentNational[i]
            if (currentNational[i] == 0) {
                nationalLeftBtns[i].classList.add('active')
                e.preventDefault()
            }
        }
    }

    if (currentNational[i] == 0) {
        nationalLeftBtns[i].classList.add('active')
    }
}

// Contact
const contactIcons = $$('.contact-item')
const contactDescs = $$('.contact-desc-item')
const pageUp = $('.page-up')
const contactHelpIcons = $$('.contact-help-icon i')
const contactHelpIcon = $('.contact-help-icon')
const contactHelpDesc = $('.contact-help-desc')
console.log(contactIcons[1])
for (let i = 1; i < 3; ++i) {
    contactIcons[i].onmouseover = function() {
        // contactDescs[i].style.animation = 'chuyen ease 1s';
        contactDescs[i].classList.add('active')
        contactDescs[i].style.opacity = '1';
    }
    contactIcons[i].onmouseout = function() {
        contactDescs[i].style.opacity = '0';
        contactDescs[i].classList.remove('active')
    }
}
contactHelpIcon.addEventListener('click', function() {
    contactHelpDesc.classList.toggle('active')
    for (let i = 0; i < 2; ++i) {
        contactHelpIcons[i].classList.toggle('active');
    }
})







