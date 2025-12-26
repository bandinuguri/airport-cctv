
import { Airport } from './types';

export const AIRPORTS: Airport[] = [
  {
    id: 'incheon',
    name: '인천공항',
    nameEn: 'Incheon Int\'l',
    url: 'https://www.utic.go.kr/jsp/map/cctvStream.jsp?cctvid=E913207&cctvname=%255B%25EC%259D%25B8%25EC%25B2%259C%25EB%258C%2580%25EA%25B5%2590%25EA%25B3%25A0%25EC%2586%258D%25EB%258F%2584%25EB%25A1%259C%255D%25EA%25B3%25B5%25ED%2595%25AD%25EC%258B%25A0%25EB%258F%2584%25EC%258B%259C%25EC%25A7%2584%25EC%259E%2585%25EB%25B6%2580&kind=Z3&cctvip=9346&cctvch=undefined&id=9346/KGSaWVOuT0waadCMK4rCPJVfLmbTAif26eiFAXvZw25Y6hvKoRBmJfbDmoU7xyi6rvssm7Tc%2Bbo4LWSzuqXfLAnL6OXJ9EwW7pgRPltVcGY=&cctvpasswd=undefined&cctvport=undefined&minX=126.39064452215288&minY=37.40603795225003&maxX=126.65084645658114&maxY=37.55342825208388',
    location: '인천광역시 중구',
    imageUrl: 'https://images.unsplash.com/photo-1542340578-837b0a880625?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gimpo',
    name: '김포공항',
    nameEn: 'Gimpo Int\'l',
    url: 'https://www.utic.go.kr/jsp/map/cctvStream.jsp?cctvid=L010054&cctvname=%25EA%25B9%2580%25ED%258F%25AC%25EA%25B3%25B5%25ED%2595%25AD%25EC%259E%2585%25EA%25B5%25AC&kind=Seoul&cctvip=undefined&cctvch=51&id=90&cctvpasswd=undefined&cctvport=undefined&minX=126.74612643404012&minY=37.52829002404771&maxX=126.86844781511533&maxY=37.58993822848175',
    location: '서울특별시 강서구',
    imageUrl: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'jeju',
    name: '제주공항',
    nameEn: 'Jeju Int\'l',
    url: 'https://media2.jejuits.go.kr:7001/hls/707e10ab-c2fc-dad4-95c1-ec820c8fa5bd.m3u8?authKey=d5c4ea37-ae16-4249-8884-20ec8bf9f779&chunked&sessionID=679642&hi',
    location: '제주특별자치도 제주시',
    imageUrl: 'https://images.unsplash.com/photo-1621319011735-2c8188280d3d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gimhae',
    name: '김해공항',
    nameEn: 'Gimhae Int\'l',
    url: 'https://www.utic.go.kr/jsp/map/cctvStream.jsp?cctvid=L230071&cctvname=%25EC%2584%259C%25EB%25B6%2580%25EC%2582%25B0IC&kind=I&cctvip=225&cctvch=74&id=3&cctvpasswd=undefined&cctvport=undefined&minX=128.89120756784547&minY=35.14526399804108&maxX=129.01144916647246&maxY=35.204962812394',
    location: '부산광역시 강서구',
    imageUrl: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cheongju',
    name: '청주공항',
    nameEn: 'Cheongju Int\'l',
    url: 'https://www.utic.go.kr/jsp/map/cctvStream.jsp?cctvid=E901014&cctvname=%255B%25EA%25B5%25AD%25EB%258F%258417%255D%25EC%25B2%25AD%25EC%25A3%25BC%25EA%25B0%2580%25EA%25B3%25A1%25EC%2582%25BC%25EA%25B1%25B0%25EB%25A6%25AC&kind=Z3&cctvip=79691&cctvch=undefined&id=79691/JciK7hHdalNGum9S8K%2BkVH6yyJty7u47U%2BijcChXIS1u1mxiQDq%2BSr4oNsbd6FrtPt9JkNaciaKf3LW6GI5ptpq13%2BB9APHfT7SdbeurqL0=&cctvpasswd=undefined&cctvport=undefined&minX=127.45471477585845&minY=36.691819063518665&maxX=127.52707108272195&maxY=36.73566016191182',
    location: '충청북도 청주시',
    imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'daegu',
    name: '대구공항',
    nameEn: 'Daegu Int\'l',
    url: 'https://www.utic.go.kr/jsp/map/cctvStream.jsp?cctvid=E100141&cctvname=%25EC%259E%2585%25EC%2584%259D%25EB%2584%25A4%25EA%25B1%25B0%25EB%25A6%25AC&kind=H&cctvip=undefined&cctvch=16&id=1&cctvpasswd=undefined&cctvport=undefined&minX=128.5544830467598&minY=35.85067693172178&maxX=128.68880575984753&maxY=35.92719596928562',
    location: '대구광역시 동구',
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gwangju',
    name: '광주공항',
    nameEn: 'Gwangju Airport',
    url: 'https://www.utic.go.kr/jsp/map/cctvStream.jsp?cctvid=L310059&cctvname=%25EA%25B4%2591%25EC%25A3%25BC%25EA%25B3%25B5%25ED%2595%25AD%25EC%2582%25BC%25EA%25B1%25B0%25EB%25A6%25AC&kind=v&cctvip=undefined&cctvch=5&id=1045&cctvpasswd=undefined&cctvport=undefined&minX=126.7471571471842&minY=35.10798744892842&maxX=126.87885587044964&maxY=35.18639015863841',
    location: '광주광역시 광산구',
    imageUrl: 'https://images.unsplash.com/photo-1464037192406-613d0382834b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ulsan',
    name: '울산공항',
    nameEn: 'Ulsan Airport',
    url: 'https://www.utic.go.kr/jsp/map/cctvStream.jsp?cctvid=L320197&cctvname=%25ED%2599%2594%25EB%25B4%2589%25EC%2582%25EA%25B1%25B0%25EB%25A6%25AC&kind=J&cctvip=undefined&cctvch=undefined&id=server1/live/C0200_01&cctvpasswd=undefined&cctvport=undefined&minX=129.27677916322787&minY=35.561694842258845&maxX=129.424651874931&maxY=35.62378793522817',
    location: '울산광역시 북구',
    imageUrl: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pohang',
    name: '포항공항',
    nameEn: 'Pohang Gyeongju',
    url: 'https://www.utic.go.kr/jsp/map/cctvStream.jsp?cctvid=L370006&cctvname=%25EA%25B3%25B5%25ED%2595%25AD%25EC%2582%25BC%25EA%25B1%25B0%25EB%25A6%25AC&kind=w&cctvip=undefined&cctvch=28&id=28&cctvpasswd=undefined&cctvport=1&minX=129.39110815476417&minY=35.9622303003326&maxX=129.47041113558765&maxY=35.99821536320358',
    location: '경상북도 포항시',
    imageUrl: 'https://images.unsplash.com/photo-1476900543704-4312b786316e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'yeosu',
    name: '여수공항',
    nameEn: 'Yeosu Airport',
    url: 'https://www.utic.go.kr/jsp/map/cctvStream.jsp?cctvid=E32009&cctvname=%25EC%259C%25A8%25EC%25B4%258C%25EC%25B7%25A8%25EC%25A0%2581%25EB%25A6%25AC&kind=y&cctvip=undefined&cctvch=undefined&id=camera02&cctvpasswd=undefined&cctvport=undefined&minX=127.47376279665745&minY=34.77162118005284&maxX=127.74528585514051&maxY=34.94169460201623',
    location: '전라남도 여수시',
    imageUrl: 'https://images.unsplash.com/photo-1581553680321-4fffae59fccd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'wonju',
    name: '원주공항',
    nameEn: 'Wonju Airport',
    url: 'https://www.utic.go.kr/jsp/map/cctvStream.jsp?cctvid=E904920&cctvname=%255B%25EA%25B5%25AD%25EB%258F%25845%25ED%2598%25B8%25EC%2584%25A0%255D%25EC%259B%2590%25EC%25A3%25BC%25EA%25B3%25B5%25ED%2595%25AD&kind=Z3&cctvip=71563&cctvch=undefined&id=71563/w/CD5a%2B4Ca2SqEMEVKBx/EILOyKbzX0QWe9GcAdGfPg34yNfOfYluzMXEBxnSJhfEcd01Mn79XlfMmHMVkWP5rQnI9NmJFgP9eG0SWhGDdc=&cctvpasswd=undefined&cctvport=undefined&minX=127.91707739655133&minY=37.40665377417331&maxX=128.0534360386715&maxY=37.48378645501284',
    location: '강원특별자치도 원주시',
    imageUrl: 'https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sacheon',
    name: '사천공항',
    nameEn: 'Sacheon Airport',
    url: 'https://www.utic.go.kr/jsp/map/cctvStream.jsp?cctvid=E903846&cctvname=%255B%25EA%25B5%25AD%25EB%258F%25843%25ED%2598%25B8%25EC%2584%25A0%255D%25EB%25B0%25B0%25EC%25B6%2598%25EC%2582%25BC%25EA%25B1%25B0%25EB%25A6%25AC&kind=Z3&cctvip=72451&cctvch=undefined&id=72451/NKpckSNjoGKcWJcMMkpXFqbQ2Sv8vas7FGLwJaN8TSYz%2B%2BTZEqzNWbb1004PhPxo/OeLJAA7x8rOuvCINHT0Ry/V1VVN/X4gFWWgvldHRg4=&cctvpasswd=undefined&cctvport=undefined&minX=128.0658091226369&minY=35.07576881252883&maxX=128.10647197622387&maxY=35.10254700702704',
    location: '경상남도 사천시',
    imageUrl: 'https://images.unsplash.com/photo-1483450388369-9ed95738483c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'muan',
    name: '무안공항',
    nameEn: 'Muan Int\'l',
    url: 'https://www.utic.go.kr/jsp/map/cctvStream.jsp?cctvid=E911322&cctvname=%255B%25EB%25AC%25B4%25EC%2595%2588%25EA%25B4%2591%25EC%25A3%25BC%25EC%2584%25A0%255D%25EB%25AC%25B4%25EC%2595%2588%25EA%25B3%25B5%25ED%2595%25AD&kind=Z3&cctvip=2137&cctvch=undefined&id=2137/4iRodXTGrV7SSO3A/PpcF%2B2W738bmqRW3Xu7PHfpTzKMHPmtfnmEE3WCNzJWZqOcZJZe2W8bhscryblsvvfCFDISBnELXPZRGmGhgyBu8bs=&cctvpasswd=undefined&cctvport=undefined&minX=126.32175618628763&minY=34.935690109388105&maxX=126.57412991089205&maxY=35.08322337848453',
    location: '전라남도 무안군',
    imageUrl: 'https://images.unsplash.com/photo-1558285511-282092c7bf79?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'yangyang',
    name: '양양공항',
    nameEn: 'Yangyang Int\'l',
    url: 'https://www.utic.go.kr/jsp/map/cctvStream.jsp?cctvid=E900770&cctvname=%255B%25EA%25B5%25AD%25EB%258F%25847%25ED%2598%25B8%25EC%2584%25A0%255D%25EC%2596%2591%25EC%2596%2591%25EC%2586%25A1%25ED%2598%2584%25EA%25B5%2590%25EC%25B0%25A8%25EB%25A1%259C&kind=Z3&cctvip=9597&cctvch=undefined&id=9597/A8jByN82Kj1VGtay3a%2BhCKWHuP3WggRK/jaO1ZE4cyaABrRFbMNRFORpJWYKOhjDrHmF33jx0/gBrd0psm0U963w36rZWjK%2BYRWbxXpMr7U=&cctvpasswd=undefined&cctvport=undefined&minX=128.47018926774751&minY=37.934164110189926&maxX=128.7547430512292&maxY=38.10168448693278',
    location: '강원특별자치도 양양군',
    imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gunsan',
    name: '군산공항',
    nameEn: 'Gunsan Airport',
    url: 'https://www.utic.go.kr/jsp/map/cctvStream.jsp?cctvid=E901942&cctvname=%255B%25EA%25B5%25AD%25EB%258F%258427%25ED%2598%25B8%25EC%2584%25A0%255D%25EA%25B5%25B0%25EC%2582%25B0%25EA%25B3%25A0%25EB%25B4%2589%25EA%25B5%2590%25EC%25B0%25A8%25EB%25A1%259C&kind=Z3&cctvip=71269&cctvch=undefined&id=71269/peQUf2RKDbaahfafyclEvjuEmXtLGjQsQsNXh0/XmaRi46Yawz0YrAvh5XqPmrg%2B3NszRXE0CxSlZLGIJAmunNLP3doyR3joDyUS%2BWc2dac=&cctvpasswd=undefined&cctvport=undefined&minX=126.53301147956678&minY=35.85544048028501&maxX=126.80619394526971&maxY=36.027522374056886',
    location: '전라북도 군산시',
    imageUrl: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?auto=format&fit=crop&q=80&w=800'
  }
];
